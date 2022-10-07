<script setup lang="ts">
import { ref, watch, onMounted, onUpdated } from 'vue'
import { marked } from 'marked'
import TurndownService from 'turndown'
import { uniqid } from 'alga-js/string'
import Paragraph from '../icons/Paragraph.vue'
import TypeH1 from '../icons/TypeH1.vue'
import TypeH2 from '../icons/TypeH2.vue'
import TypeH3 from '../icons/TypeH3.vue'
import TypeBold from '../icons/TypeBold.vue'
import TypeItalic from '../icons/TypeItalic.vue'
import TypeUnderline from '../icons/TypeUnderline.vue'
import TypeStrikethrough from '../icons/TypeStrikethrough.vue'

const props = withDefaults(defineProps<{
  //@ts-ignore
  modelValue?: string,
  height?: string
}>(), {
  //@ts-ignore
  modelValue: '',
  height: '300px'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorContentRef = ref<any>(null)
const htmlContent = ref<string>('<p>This is the first content for tooltip</p>')
const markdownContent = ref<string>('This is the first content for tooltip')
const viewCode = ref<boolean>(false)

const uniqueId = uniqid()
const turndownService = new TurndownService()

watch(htmlContent, () => {
  if(viewCode.value === false) {
    markdownContent.value = turndownService.turndown(htmlContent.value)
  }
})

watch(markdownContent, () => {
  if(viewCode.value === true) {
    htmlContent.value = marked.parse(markdownContent.value)
  }
})

const selectionHandler = (e) => {
  const selection = e.target.value.substring(
    e.target.selectionStart, e.target.selectionEnd
  )
  console.log(selection.toString())
}

const enterHandler = () => {
  content.value.insertAdjacentHTML("afterend", '<p></p>')
}

const handleFiles = (e: any) => {
  emit('update:modelValue', content.value)
}
</script>

<template>
  <div class="editor editorText">
      <div class="editorToolbar">
        <ul class="editorMenu">
          <li class="editorItem"><Paragraph /></li>
          <li class="editorItem"><TypeH1 /></li>
          <li class="editorItem"><TypeH2 /></li>
          <li class="editorItem"><TypeH3 /></li>
          <li class="editorItem"><TypeBold /></li>
          <li class="editorItem"><TypeItalic /></li>
          <li class="editorItem"><TypeUnderline /></li>
          <li class="editorItem"><TypeStrikethrough /></li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem" :class="{active: viewCode === true}" @click="viewCode = true">Markdown</li>
          <li class="editorItem" :class="{active: viewCode === false}" @click="viewCode = false">View</li>
        </ul>
      </div>
      <textarea v-if="viewCode" class="editorContent" v-model="markdownContent" :style="{height}" @select="selectionHandler" @keyup.enter=""></textarea>
      <div v-else ref="editorContentRef" class="editorContent" contenteditable="true" :style="{height}" v-html="htmlContent" @keyup.enter=""></div>
      <div class="editorStatusbar">
        <ul class="editorMenu">
          <li class="editorItem plain">Status</li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem plain">Total: {{ markdownContent.split(' ').length }} words</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@use editor;
</style>
