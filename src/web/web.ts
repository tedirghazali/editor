import { defineCustomElement } from 'vue'
import VueMarkEditor from '../vue/components/MarkEditor.vue'
import VueTextEditor from '../vue/components/TextEditor.vue'

export const MarkEditor = defineCustomElement(VueMarkEditor)
export const TextEditor = defineCustomElement(VueTextEditor)

export function useTedirEditor() {
  customElements.define('mark-editor', MarkEditor)
  customElements.define('text-editor', TextEditor)
}
