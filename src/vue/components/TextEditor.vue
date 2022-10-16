<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
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

const toolDefault = ref('')
//const toolBlocks = ref('')
//const toolInlines = ref([])
const editorContentRef = ref<any>(null)
const content = ref<string>('<p>This is the first content for tooltip</p>')
const viewCode = ref<boolean>(false)
const uniqueId = uniqid()

const selectionHandler = (e) => {
  const textToArray = e.target.value.split('')
  textToArray.splice(e.target.selectionStart, 0, `<${toolDefault.value}>`)
  textToArray.splice(Number(e.target.selectionEnd) + 1, 0, `</${toolDefault.value}>`)
  content.value = textToArray.join('')
  
  toolDefault.value = ''
  /*const selection = e.target.value.substring(
    e.target.selectionStart, e.target.selectionEnd
  )
  console.log(selection.toString())*/
}

const enterHandler = () => {
  content.value.insertAdjacentHTML("afterend", '<p></p>')
}

const handleFiles = (e: any) => {
  emit('update:modelValue', content.value)
}

/*const addToolInlines = (type) => {
  if(toolInlines.value.includes(type)) {
    toolInlines.value = toolInlines.value.filter((item: string) => item !== type)
  } else {
    toolInlines.value.push(type)
  }
}*/
</script>

<template>
  <div class="editor editorText">
      <div class="editorToolbar">
        <ul class="editorMenu">
          <li class="editorItem" :class="toolDefault === 'p' ? 'active' : ''" @click="toolDefault = 'p'"><Paragraph /></li>
          <li class="editorItem" :class="toolDefault === 'h1' ? 'active' : ''" @click="toolDefault = 'h1'"><TypeH1 /></li>
          <li class="editorItem" :class="toolDefault === 'h2' ? 'active' : ''" @click="toolDefault = 'h2'"><TypeH2 /></li>
          <li class="editorItem" :class="toolDefault === 'h3' ? 'active' : ''" @click="toolDefault = 'h3'"><TypeH3 /></li>
          <li class="editorItem" :class="toolDefault === 'b' ? 'active' : ''" @click="toolDefault = 'b'"><TypeBold /></li>
          <li class="editorItem" :class="toolDefault === 'i' ? 'active' : ''" @click="toolDefault = 'i'"><TypeItalic /></li>
          <li class="editorItem" :class="toolDefault === 'u' ? 'active' : ''" @click="toolDefault = 'u'"><TypeUnderline /></li>
          <li class="editorItem" :class="toolDefault === 's' ? 'active' : ''" @click="toolDefault = 's'"><TypeStrikethrough /></li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem" :class="{active: viewCode === true}" @click="viewCode = true">Compose</li>
          <li class="editorItem" :class="{active: viewCode === false}" @click="viewCode = false">View</li>
        </ul>
      </div>
      <textarea v-if="viewCode" class="editorContent" v-model="content" :style="{height}" @select="selectionHandler" @keyup.enter=""></textarea>
      <div v-else ref="editorContentRef" class="editorContent" contenteditable="true" :style="{height}" v-html="content" @keyup.enter=""></div>
      <div class="editorStatusbar">
        <ul class="editorMenu">
          <li class="editorItem plain">Status</li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem plain">Total: {{ content.split(' ').length }} words</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@use editor;
</style>
