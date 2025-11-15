import { ref, computed } from 'vue'

// Projetos carregados
const projects = ref([])
const currentLanguage = ref('pt')

export function useProjects() {

  // Carregar projetos baseado na língua
  const loadProjects = async (language = 'pt') => {
    try {
      currentLanguage.value = language

      // Importar o JSON correto baseado na língua
      const projectsData = language === 'pt'
        ? await import('@/data/projects/projects-pt.json')
        : await import('@/data/projects/projects-en.json')

      // Processar as imagens para usar require()
      const processedProjects = projectsData.projects.map(project => ({
        ...project,
        // Converter caminhos de imagem para requires
        imageSrc: getProjectImage(project.images[0].src),
        imageAlt: project.images[0].alt,
        projectName: project.title,
        projectDescription: project.description,
        githubLink: project.links.repository,
        websiteLink: project.links.website,
        caseStudySlug: project.caseStudySlug || null,
        gallery: project.images.map(img => ({
          src: getProjectImage(img.src),
          alt: img.alt,
          title: img.title
        }))
      }))

      projects.value = processedProjects
      return processedProjects

    } catch (error) {
      console.error('Erro ao carregar projetos:', error)
      // Fallback para projetos mock se houver erro
      return loadMockProjects()
    }
  }

  // Helper para carregar imagens
  const getProjectImage = (imagePath) => {
    try {
      // Tentar carregar a imagem real
      return require(`@/data/projects/images/${imagePath}`)
    } catch (error) {
      // Fallback para imagem padrão se não encontrar
      console.warn(`Imagem não encontrada: ${imagePath}, usando imagem padrão`)
      try {
        return require('@/data/projects/images/def.png')
      } catch (defError) {
        // Se def.png também não existir, usar placeholder da pasta assets
        console.warn('Imagem padrão def.png não encontrada, usando placeholder')
        return require('@/assets/imgs-bck/placeholder-project.jpg')
      }
    }
  }

  // Projetos mock como fallback
  const loadMockProjects = () => {
    const mockProjects = [
      {
        id: 'mock-project-1',
        category: 'personal',
        isPublic: true,
        featured: true,
        projectType: 'Web Application',
        status: 'Completed',
        projectName: 'Projeto de Exemplo',
        projectDescription: 'Este é um projeto de exemplo enquanto configuramos o sistema de projetos dinâmicos.',
        imageSrc: require('@/assets/imgs-bck/discover.png'),
        imageAlt: 'Projeto de exemplo',
        githubLink: 'https://github.com/mopanc',
        websiteLink: null,
        gallery: [
          { src: require('@/assets/imgs-bck/discover.png'), alt: 'Exemplo 1', title: 'Tela 1' },
          { src: require('@/assets/imgs-bck/discover.png'), alt: 'Exemplo 2', title: 'Tela 2' },
          { src: require('@/assets/imgs-bck/discover.png'), alt: 'Exemplo 3', title: 'Tela 3' }
        ],
        technologies: [
          { name: "Vue.js", icon: "vuejs-icon.svg" },
          { name: "JavaScript", icon: "js.svg" }
        ]
      }
    ]

    projects.value = mockProjects
    return mockProjects
  }

  // Computed para filtrar projetos
  const projectsByCategory = computed(() => {
    return (category) => {
      if (category === 'all') return projects.value
      return projects.value.filter(project => project.category === category)
    }
  })

  const publicProjects = computed(() => {
    return projects.value.filter(project => project.isPublic)
  })

  const featuredProjects = computed(() => {
    return projects.value.filter(project => project.featured)
  })

  const totalProjectsCount = computed(() => projects.value.length)

  const uniqueTechnologies = computed(() => {
    const allTech = projects.value.flatMap(project => project.technologies || [])
    return [...new Set(allTech.map(tech => tech.name))]
  })

  // Inicializar com língua do localStorage ou português
  const initializeProjects = async () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'pt'
    await loadProjects(savedLanguage)
  }

  return {
    projects: computed(() => projects.value),
    currentLanguage: computed(() => currentLanguage.value),
    loadProjects,
    projectsByCategory,
    publicProjects,
    featuredProjects,
    totalProjectsCount,
    uniqueTechnologies,
    initializeProjects
  }
}