<template>
  <div :class="['markdown-editor', { 'fullscreen': isFullscreen }]">
    <div class="editor-toolbar">
      <div class="toolbar-group">
        <button
          v-for="tool in formattingTools"
          :key="tool.action"
          @click="applyFormatting(tool)"
          :class="['toolbar-btn', { 'active': tool.active }]"
          :title="tool.title"
          type="button"
        >
          <i :class="tool.icon"></i>
        </button>
      </div>

      <div class="toolbar-group">
        <button
          v-for="tool in insertTools"
          :key="tool.action"
          @click="insertElement(tool)"
          :class="['toolbar-btn', { 'active': tool.active }]"
          :title="tool.title"
          type="button"
        >
          <i :class="tool.icon"></i>
        </button>
      </div>

      <div class="toolbar-group">
        <button
          @click="togglePreview"
          :class="['toolbar-btn', { 'active': showPreview }]"
          title="Alternar Preview"
          type="button"
        >
          <i class="ri-eye-line"></i>
        </button>
        <button
          @click="toggleFullscreen"
          :class="['toolbar-btn', { 'active': isFullscreen }]"
          :title="isFullscreen ? 'Sair de Tela Cheia' : 'Tela Cheia'"
          type="button"
        >
          <i :class="isFullscreen ? 'ri-fullscreen-exit-line' : 'ri-fullscreen-line'"></i>
        </button>
      </div>
    </div>

    <div :class="['editor-container', { 'preview-only': showPreview }]">
      <!-- Editor Panel -->
      <div v-show="!showPreview" class="editor-panel">
        <!-- Line Numbers -->
        <div class="line-numbers" ref="lineNumbersRef">
          <div
            v-for="n in lineCount"
            :key="n"
            class="line-number"
          >
            {{ n }}
          </div>
        </div>

        <textarea
          ref="textareaRef"
          v-model="content"
          @keydown="handleKeydown"
          @scroll="syncScroll"
          placeholder="Comece a escrever em markdown..."
          class="markdown-textarea"
        ></textarea>
      </div>

      <!-- Preview Panel -->
      <div v-show="!editorOnly" class="preview-panel" ref="previewRef" @scroll="syncPreviewScroll">
        <div class="preview-content" v-html="renderedContent"></div>
      </div>
    </div>

    <!-- Status Bar -->
    <div class="editor-status">
      <div class="status-left">
        <span class="status-item">
          <i class="ri-text"></i>
          {{ wordCount }} palavras
        </span>
        <span class="status-item">
          <i class="ri-character-recognition"></i>
          {{ charCount }} caracteres
        </span>
        <span class="status-item">
          <i class="ri-file-text-line"></i>
          {{ lineCount }} linhas
        </span>
      </div>
      <div class="status-right">
        <span class="status-item">
          Markdown
        </span>
      </div>
    </div>

    <!-- Help Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showHelp" class="modal-overlay" @click.self="showHelp = false">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Markdown Cheat Sheet</h3>
              <button @click="showHelp = false" class="modal-close">
                <i class="ri-close-line"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="cheat-sheet">
                <div class="cheat-section">
                  <h4>Formatação Básica</h4>
                  <div class="cheat-item">
                    <code>**texto**</code>
                    <span>→ <strong>negrito</strong></span>
                  </div>
                  <div class="cheat-item">
                    <code>*texto*</code>
                    <span>→ <em>itálico</em></span>
                  </div>
                  <div class="cheat-item">
                    <code>~~texto~~</code>
                    <span>→ <del>riscado</del></span>
                  </div>
                  <div class="cheat-item">
                    <code>`código`</code>
                    <span>→ <code>código inline</code></span>
                  </div>
                </div>

                <div class="cheat-section">
                  <h4>Cabeçalhos</h4>
                  <div class="cheat-item">
                    <code># Título 1</code>
                  </div>
                  <div class="cheat-item">
                    <code>## Título 2</code>
                  </div>
                  <div class="cheat-item">
                    <code>### Título 3</code>
                  </div>
                </div>

                <div class="cheat-section">
                  <h4>Listas</h4>
                  <div class="cheat-item">
                    <code>- Item</code>
                    <span>→ Lista não ordenada</span>
                  </div>
                  <div class="cheat-item">
                    <code>1. Item</code>
                    <span>→ Lista ordenada</span>
                  </div>
                  <div class="cheat-item">
                    <code>- [ ] Tarefa</code>
                    <span>→ Checklist</span>
                  </div>
                </div>

                <div class="cheat-section">
                  <h4>Links e Imagens</h4>
                  <div class="cheat-item">
                    <code>[texto](url)</code>
                    <span>→ Link</span>
                  </div>
                  <div class="cheat-item">
                    <code>![alt](url)</code>
                    <span>→ Imagem</span>
                  </div>
                </div>

                <div class="cheat-section">
                  <h4>Código</h4>
                  <div class="cheat-item">
                    <code>```javascript</code>
                    <span>→ Bloco de código</span>
                  </div>
                  <div class="cheat-item">
                    <code>```</code>
                    <span>→ Fechar bloco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { marked } from 'marked'

export default {
  name: 'MarkdownEditor',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Comece a escrever em markdown...'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const content = ref(props.modelValue)
    const showPreview = ref(false)
    const editorOnly = ref(false)
    const isFullscreen = ref(false)
    const showHelp = ref(false)
    const textareaRef = ref(null)
    const previewRef = ref(null)
    const lineNumbersRef = ref(null)

    // Configure marked — only supported options in v17
    marked.use({
      breaks: true,
      gfm: true,
      renderer: {
        // marked v17 passes a token object, not (code, language) strings
        code({ text, lang }) {
          const validLang = lang && /^[a-zA-Z0-9-_]+$/.test(lang) ? lang : 'text'
          return `<pre class="code-block"><code class="language-${validLang}">${text}</code></pre>`
        }
      }
    })

    // Formatting tools
    const formattingTools = ref([
      { action: 'bold', icon: 'ri-bold', title: 'Negrito (Ctrl+B)', active: false },
      { action: 'italic', icon: 'ri-italic', title: 'Itálico (Ctrl+I)', active: false },
      { action: 'strikethrough', icon: 'ri-strikethrough', title: 'Riscado', active: false },
      { action: 'code', icon: 'ri-code-s-slash-line', title: 'Código Inline', active: false }
    ])

    // Insert tools
    const insertTools = ref([
      { action: 'heading', icon: 'ri-h-1', title: 'Cabeçalho', active: false },
      { action: 'quote', icon: 'ri-double-quotes-l', title: 'Citação', active: false },
      { action: 'ul', icon: 'ri-list-unordered', title: 'Lista Não Ordenada', active: false },
      { action: 'ol', icon: 'ri-list-ordered', title: 'Lista Ordenada', active: false },
      { action: 'task', icon: 'ri-checkbox-line', title: 'Checklist', active: false },
      { action: 'link', icon: 'ri-link', title: 'Link', active: false },
      { action: 'image', icon: 'ri-image-line', title: 'Imagem', active: false },
      { action: 'codeblock', icon: 'ri-code-box-line', title: 'Bloco de Código', active: false },
      { action: 'table', icon: 'ri-table-line', title: 'Tabela', active: false },
      { action: 'hr', icon: 'ri-separator', title: 'Linha Horizontal', active: false },
      { action: 'help', icon: 'ri-question-line', title: 'Ajuda', active: false }
    ])

    // Computed properties
    const renderedContent = computed(() => {
      try {
        return marked.parse(content.value || '')
      } catch (error) {
        console.error('Markdown rendering error:', error)
        return '<p>Erro ao renderizar markdown</p>'
      }
    })

    const wordCount = computed(() => {
      return content.value.trim() ? content.value.trim().split(/\s+/).length : 0
    })

    const charCount = computed(() => {
      return content.value.length
    })

    const lineCount = computed(() => {
      return content.value ? content.value.split('\n').length : 1
    })

    // Apply formatting
    const applyFormatting = (tool) => {
      const textarea = textareaRef.value
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = content.value.substring(start, end)
      let newText = ''

      switch (tool.action) {
        case 'bold':
          newText = `**${selectedText || 'texto negrito'}**`
          break
        case 'italic':
          newText = `*${selectedText || 'texto itálico'}*`
          break
        case 'strikethrough':
          newText = `~~${selectedText || 'texto riscado'}~~`
          break
        case 'code':
          newText = `\`${selectedText || 'código'}\``
          break
      }

      insertText(newText, start, end)
    }

    // Insert elements
    const insertElement = (tool) => {
      const textarea = textareaRef.value
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = content.value.substring(start, end)
      let newText = ''

      switch (tool.action) {
        case 'heading':
          newText = '\n## Título\n'
          break
        case 'quote':
          newText = `\n> ${selectedText || 'Citação'}\n`
          break
        case 'ul':
          newText = '\n- Item 1\n- Item 2\n- Item 3\n'
          break
        case 'ol':
          newText = '\n1. Item 1\n2. Item 2\n3. Item 3\n'
          break
        case 'task':
          newText = '\n- [ ] Tarefa 1\n- [ ] Tarefa 2\n- [x] Tarefa concluída\n'
          break
        case 'link':
          newText = `[${selectedText || 'texto do link'}](url)`
          break
        case 'image':
          newText = `![${selectedText || 'descrição da imagem'}](url)`
          break
        case 'codeblock':
          newText = '\n```javascript\n// Seu código aqui\n```\n'
          break
        case 'table':
          newText = '\n| Coluna 1 | Coluna 2 |\n|----------|----------|\n| Dado 1   | Dado 2   |\n'
          break
        case 'hr':
          newText = '\n---\n'
          break
        case 'help':
          showHelp.value = true
          return
      }

      insertText(newText, start, end)
    }

    // Insert text at cursor position
    const insertText = (text, start, end) => {
      const textarea = textareaRef.value
      if (!textarea) return

      const before = content.value.substring(0, start)
      const after = content.value.substring(end)
      
      content.value = before + text + after
      emit('update:modelValue', content.value)

      // Set cursor position after insertion
      nextTick(() => {
        const newCursorPos = start + text.length
        textarea.setSelectionRange(newCursorPos, newCursorPos)
        textarea.focus()
      })
    }

    // Handle keyboard shortcuts
    const handleKeydown = (event) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'b':
            event.preventDefault()
            applyFormatting({ action: 'bold' })
            break
          case 'i':
            event.preventDefault()
            applyFormatting({ action: 'italic' })
            break
          case 'k':
            event.preventDefault()
            insertElement({ action: 'link' })
            break
        }
      }

      // Handle tab for lists
      if (event.key === 'Tab') {
        event.preventDefault()
        const start = textareaRef.value.selectionStart
        const end = textareaRef.value.selectionEnd
        insertText('  ', start, end)
      }
    }

    // Toggle preview
    const togglePreview = () => {
      if (showPreview.value) {
        showPreview.value = false
        editorOnly.value = false
      } else if (editorOnly.value) {
        editorOnly.value = false
        showPreview.value = true
      } else {
        showPreview.value = true
        editorOnly.value = false
      }
    }

    // Toggle fullscreen
    const toggleFullscreen = () => {
      isFullscreen.value = !isFullscreen.value
    }

    // Exit fullscreen on Escape
    const handleGlobalKeydown = (e) => {
      if (e.key === 'Escape' && isFullscreen.value) {
        isFullscreen.value = false
      }
    }

    // Sync scroll between editor and preview
    const syncScroll = () => {
      if (!previewRef.value || !textareaRef.value) return
      
      const textarea = textareaRef.value
      const preview = previewRef.value
      
      const scrollPercentage = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight)
      preview.scrollTop = scrollPercentage * (preview.scrollHeight - preview.clientHeight)
    }

    const syncPreviewScroll = () => {
      if (!previewRef.value || !textareaRef.value) return
      
      const preview = previewRef.value
      const textarea = textareaRef.value
      
      const scrollPercentage = preview.scrollTop / (preview.scrollHeight - preview.clientHeight)
      textarea.scrollTop = scrollPercentage * (textarea.scrollHeight - textarea.clientHeight)
    }

    // Watch for content changes
    watch(content, (newValue) => {
      emit('update:modelValue', newValue)
    })

    watch(() => props.modelValue, (newValue) => {
      content.value = newValue
    })

    onMounted(() => {
      if (textareaRef.value) textareaRef.value.focus()
      document.addEventListener('keydown', handleGlobalKeydown)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleGlobalKeydown)
    })

    return {
      content,
      showPreview,
      editorOnly,
      isFullscreen,
      showHelp,
      textareaRef,
      previewRef,
      lineNumbersRef,
      formattingTools,
      insertTools,
      renderedContent,
      wordCount,
      charCount,
      lineCount,
      applyFormatting,
      insertElement,
      handleKeydown,
      togglePreview,
      toggleFullscreen,
      handleGlobalKeydown,
      syncScroll,
      syncPreviewScroll
    }
  }
}
</script>

<style scoped>
.markdown-editor {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-bg-primary);
}

.markdown-editor.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  border-radius: 0;
  border: none;
  display: flex;
  flex-direction: column;
}

.editor-toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.75rem;
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
  flex-wrap: wrap;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-right: 1px solid var(--color-border);
}

.toolbar-group:last-child {
  border-right: none;
  margin-left: auto;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: var(--color-muted);
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.toolbar-btn:hover {
  background: var(--color-bg-primary);
  color: var(--color-primary);
}

.toolbar-btn.active {
  background: var(--color-primary);
  color: white;
}

.editor-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: v-bind(height);
  min-height: 400px;
}

.editor-container.preview-only {
  grid-template-columns: 1fr;
}

.markdown-editor.fullscreen .editor-container {
  flex: 1;
  height: auto;
  min-height: 0;
}

.editor-panel {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  border-right: 1px solid var(--color-border);
  overflow: hidden;
}

.markdown-textarea {
  border: none;
  outline: none;
  padding: 1rem;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 13.5px;
  line-height: 1.65;
  resize: none;
  background: var(--color-bg-primary);
  color: var(--color-text);
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.markdown-textarea::placeholder { color: var(--color-muted); opacity: 0.6; }

.line-numbers {
  background: var(--color-bg-secondary);
  border-right: 1px solid var(--color-border);
  padding: 1rem 0.5rem;
  text-align: right;
  color: var(--color-muted);
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 13.5px;
  line-height: 1.65;
  user-select: none;
  overflow: hidden;
}

.line-number {
  height: 1.65em;
}

.preview-panel {
  padding: 1.2rem 1.5rem;
  overflow-y: auto;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border);
}

.preview-content {
  max-width: none;
  line-height: 1.75;
  color: var(--color-text);
}

/* Markdown preview styles */
.preview-content :deep(h1),
.preview-content :deep(h2),
.preview-content :deep(h3),
.preview-content :deep(h4),
.preview-content :deep(h5),
.preview-content :deep(h6) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
  line-height: 1.3;
}

.preview-content :deep(h1) { font-size: 1.7rem; }
.preview-content :deep(h2) { font-size: 1.35rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.4rem; }
.preview-content :deep(h3) { font-size: 1.1rem; }

.preview-content :deep(p) { margin-bottom: 0.9rem; font-size: 0.9rem; }

.preview-content :deep(code) {
  background: rgba(74, 134, 232, 0.1);
  border: 1px solid rgba(74, 134, 232, 0.2);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.82em;
  color: var(--color-primary);
}

.preview-content :deep(pre) {
  background: #0d1117;
  border: 1px solid rgba(74, 134, 232, 0.2);
  border-radius: 8px;
  padding: 1rem 1.2rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.preview-content :deep(pre code) {
  background: none;
  border: none;
  padding: 0;
  color: #e6edf3;
  font-size: 0.83rem;
}

.preview-content :deep(blockquote) {
  border-left: 3px solid var(--color-primary);
  padding: 0.6rem 1rem;
  margin: 1rem 0;
  background: rgba(74, 134, 232, 0.05);
  border-radius: 0 6px 6px 0;
  color: var(--color-muted);
  font-style: italic;
}

.preview-content :deep(ul),
.preview-content :deep(ol) {
  margin-bottom: 0.9rem;
  padding-left: 1.4rem;
}

.preview-content :deep(li) { margin-bottom: 0.3rem; font-size: 0.9rem; }

.preview-content :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.preview-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.preview-content :deep(th),
.preview-content :deep(td) {
  border: 1px solid var(--color-border);
  padding: 0.5rem 0.75rem;
  text-align: left;
}

.preview-content :deep(th) {
  background: rgba(74, 134, 232, 0.08);
  font-weight: 600;
  color: var(--color-heading, var(--color-white));
}

.preview-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 0.75rem 0;
}

.preview-content :deep(hr) {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 1.5rem 0;
}

.editor-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  font-size: 0.72rem;
  color: var(--color-muted);
}

.status-left,
.status-right {
  display: flex;
  gap: 1rem;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.modal-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-heading, var(--color-white));
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: var(--color-muted);
  padding: 0.3rem;
  border-radius: 6px;
  transition: background 0.2s;
}
.modal-close:hover { background: var(--color-bg-primary); }

.modal-body {
  padding: 1.5rem;
}

.cheat-sheet {
  display: grid;
  gap: 1.5rem;
}

.cheat-section h4 {
  margin: 0 0 0.75rem 0;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.cheat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.4rem;
}

.cheat-item code {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.8rem;
  min-width: 150px;
  color: var(--color-primary);
}

.cheat-item span {
  font-size: 0.85rem;
  color: var(--color-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .editor-container {
    grid-template-columns: 1fr;
    height: 500px;
  }

  .editor-panel {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .editor-container.preview-only .editor-panel {
    display: none;
  }

  .toolbar-group {
    padding: 0 0.25rem;
  }

  .toolbar-btn {
    width: 28px;
    height: 28px;
  }

  .editor-status {
    flex-direction: column;
    gap: 0.3rem;
    align-items: flex-start;
  }
}
</style>
