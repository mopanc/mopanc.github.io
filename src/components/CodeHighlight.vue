<template>
  <div class="code-block" :class="`language-${language}`">
    <div class="code-header">
      <span class="language-label">{{ languageLabel }}</span>
      <button
        class="copy-button"
        @click="copyCode"
        :aria-label="copied ? 'Copied!' : 'Copy code'"
      >
        <i :class="copied ? 'ri-check-line' : 'ri-file-copy-line'"></i>
        <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>
    <pre class="code-content"><code ref="codeElement" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

// Import common languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-markup';

export default {
  name: 'CodeHighlight',
  props: {
    /**
     * Programming language for syntax highlighting
     */
    language: {
      type: String,
      default: 'javascript',
      validator: (value) => [
        'javascript', 'js', 'typescript', 'ts',
        'jsx', 'tsx', 'html', 'css', 'scss',
        'json', 'bash', 'shell', 'python', 'sql',
        'vue', 'markdown', 'yaml'
      ].includes(value)
    },

    /**
     * Code content to highlight
     */
    code: {
      type: String,
      required: true
    },

    /**
     * Show line numbers
     */
    lineNumbers: {
      type: Boolean,
      default: false
    },

    /**
     * Custom label override
     */
    label: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      copied: false,
      copyTimeout: null
    }
  },

  computed: {
    /**
     * Get highlighted code HTML
     */
    highlightedCode() {
      try {
        const grammar = Prism.languages[this.normalizedLanguage];

        if (!grammar) {
          console.warn(`Language "${this.language}" not supported. Falling back to plaintext.`);
          return this.escapeHtml(this.code);
        }

        return Prism.highlight(this.code, grammar, this.normalizedLanguage);
      } catch (error) {
        console.error('Syntax highlighting error:', error);
        return this.escapeHtml(this.code);
      }
    },

    /**
     * Normalize language name for Prism
     */
    normalizedLanguage() {
      const languageMap = {
        'js': 'javascript',
        'ts': 'typescript',
        'shell': 'bash',
        'vue': 'markup'
      };

      return languageMap[this.language] || this.language;
    },

    /**
     * Display label for the language
     */
    languageLabel() {
      if (this.label) {
        return this.label;
      }

      const labels = {
        'javascript': 'JavaScript',
        'js': 'JavaScript',
        'typescript': 'TypeScript',
        'ts': 'TypeScript',
        'jsx': 'React JSX',
        'tsx': 'React TSX',
        'html': 'HTML',
        'css': 'CSS',
        'scss': 'SCSS',
        'json': 'JSON',
        'bash': 'Bash',
        'shell': 'Shell',
        'python': 'Python',
        'sql': 'SQL',
        'vue': 'Vue',
        'markdown': 'Markdown',
        'yaml': 'YAML'
      };

      return labels[this.language] || this.language.toUpperCase();
    }
  },

  methods: {
    /**
     * Copy code to clipboard
     */
    async copyCode() {
      try {
        await navigator.clipboard.writeText(this.code);
        this.copied = true;

        // Reset after 2 seconds
        if (this.copyTimeout) {
          clearTimeout(this.copyTimeout);
        }

        this.copyTimeout = setTimeout(() => {
          this.copied = false;
        }, 2000);

        this.$emit('copied');
      } catch (error) {
        console.error('Failed to copy code:', error);

        // Fallback for older browsers
        this.fallbackCopy();
      }
    },

    /**
     * Fallback copy method for older browsers
     */
    fallbackCopy() {
      const textarea = document.createElement('textarea');
      textarea.value = this.code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        this.copied = true;

        setTimeout(() => {
          this.copied = false;
        }, 2000);
      } catch (error) {
        console.error('Fallback copy failed:', error);
      } finally {
        document.body.removeChild(textarea);
      }
    },

    /**
     * Escape HTML entities
     */
    escapeHtml(text) {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, (char) => map[char]);
    }
  },

  beforeUnmount() {
    if (this.copyTimeout) {
      clearTimeout(this.copyTimeout);
    }
  }
}
</script>

<style scoped>
.code-block {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.language-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #61dafb;
  font-family: 'Monaco', 'Menlo', monospace;
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: #fff;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.copy-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.copy-button:active {
  transform: translateY(0);
}

.copy-button i {
  font-size: 1rem;
}

.code-content {
  padding: 1.5rem;
  margin: 0;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.6;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  text-align: left;
}

.code-content code {
  display: block;
  color: #d4d4d4;
  text-align: left;
  direction: ltr;
}

/* Scrollbar styling */
.code-content::-webkit-scrollbar {
  height: 8px;
}

.code-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.code-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.code-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .code-block {
    border-radius: 8px;
    margin: 1rem 0;
  }

  .code-header {
    padding: 0.6rem 0.8rem;
  }

  .code-content {
    padding: 1rem;
    font-size: 0.85rem;
  }

  .language-label {
    font-size: 0.7rem;
  }

  .copy-button {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }

  .copy-button span {
    display: none; /* Hide "Copy" text on mobile */
  }
}
</style>
