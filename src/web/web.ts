import { defineCustomElement } from 'vue'
import VueTextEditor from '../vue/components/TextEditor.vue'

export const TextEditor = defineCustomElement(VueTextEditor)

export function useTedirEditor() {
  customElements.define('text-editor', TextEditor)
}
