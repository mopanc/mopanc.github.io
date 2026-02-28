import { ref } from 'vue';
import {
  collection, doc, onSnapshot, setDoc, updateDoc, deleteDoc,
  increment, serverTimestamp,
} from 'firebase/firestore';
import { firestore } from '../../firebase.js';

const COLLECTION = 'articles';

// Module-level reactive state — shared across all useArticles() calls
const articles = ref([]);
const isLoading = ref(true);

// Real-time Firestore listener
onSnapshot(
  collection(firestore, COLLECTION),
  (snapshot) => {
    articles.value = snapshot.docs.map(d => ({ ...d.data() }));
    isLoading.value = false;
  },
  (error) => {
    console.error('Firestore listener error', error);
    isLoading.value = false;
  }
);

export function useArticles() {

  const addArticle = async (article) => {
    const slug = article.slug ||
      (article.titlePt || article.title || '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
    const docRef = doc(firestore, COLLECTION, slug);
    await setDoc(docRef, {
      ...article,
      slug,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  };

  const updateArticle = async (updatedArticle) => {
    const slug = updatedArticle.slug;
    if (!slug) return;
    const docRef = doc(firestore, COLLECTION, slug);
    await updateDoc(docRef, {
      ...updatedArticle,
      updatedAt: serverTimestamp(),
    });
  };

  const deleteArticle = async (articleId) => {
    // articleId may be a numeric id or a slug string
    let slug = (typeof articleId === 'string' && isNaN(Number(articleId)))
      ? articleId
      : null;
    if (!slug) {
      const found = articles.value.find(
        a => a.id === articleId || a.id === Number(articleId)
      );
      if (found) slug = found.slug;
    }
    if (!slug) return;
    await deleteDoc(doc(firestore, COLLECTION, slug));
  };

  const getArticleBySlug = (slug) => {
    return articles.value.find(a => a.slug === slug) || null;
  };

  const incrementViews = async (slug) => {
    try {
      await updateDoc(doc(firestore, COLLECTION, slug), {
        views: increment(1),
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('incrementViews failed', e);
    }
  };

  const incrementLikes = async (slug) => {
    try {
      await updateDoc(doc(firestore, COLLECTION, slug), {
        likes: increment(1),
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('incrementLikes failed', e);
    }
  };

  const decrementLikes = async (slug) => {
    try {
      await updateDoc(doc(firestore, COLLECTION, slug), {
        likes: increment(-1),
        updatedAt: serverTimestamp(),
      });
    } catch (e) {
      console.warn('decrementLikes failed', e);
    }
  };

  return {
    articles,
    isLoading,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleBySlug,
    incrementViews,
    incrementLikes,
    decrementLikes,
  };
}
