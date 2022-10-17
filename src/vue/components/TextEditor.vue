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

const toolDefault = ref<string>('')
//const toolBlocks = ref<string>('')
//const toolInlines = ref<string[]>([])
const editorContentRef = ref<any>(null)
const content = ref<string>('<p>This is the first content for tooltip</p>')
const viewCode = ref<boolean>(false)
const uniqueId = uniqid()

const selectionStart = ref<number>(0)
const selectionEnd = ref<number>(0)
const selectionHandler = (e) => {
  toolDefault.value = ''
  selectionStart.value = Number(e.target.selectionStart)
  selectionEnd.value = Number(e.target.selectionEnd)

  /*const textToArray = e.target.value.split('')
  textToArray.splice(e.target.selectionStart, 0, `<${toolDefault.value}>`)
  textToArray.splice(Number(e.target.selectionEnd) + 1, 0, `</${toolDefault.value}>`)
  content.value = textToArray.join('')
  
  const selection = e.target.value.substring(
    e.target.selectionStart, e.target.selectionEnd
  )
  console.log(selection.toString())*/
}

const applyHandler = () => {
  if(selectionStart.value !== 0 || selectionEnd.value !== 0) {
    const textToArray = content.value.split('')
    textToArray.splice(selectionStart.value, 0, `<${toolDefault.value}>`)
    textToArray.splice(Number(selectionEnd.value) + 1, 0, `</${toolDefault.value}>`)
    const ltArr: number[] = []
    const gtArr: number[] = []
    let totalTag: number = 1
    for(let i: number = Number(selectionStart.value) + 1; i < (Number(selectionEnd.value) + 1); i++) {
      if(textToArray[i] === '<') {
        ltArr.push(i)
        totalTag++
      } else if(textToArray[i] === '>') {
        gtArr.push(Number(i) + 1)
      }
    }
    let index: number = 0
    for(let j: number = 0; j < totalTag; j++) {
      const ltNum = Number(ltArr[j]) + Number(index)
      const gtNum = Number(gtArr[j]) + Number(index)
      if(textToArray[ltNum] === '<') {
        textToArray.splice(ltNum, 0, `</${toolDefault.value}>`)
      }
      if(textToArray[gtNum] === '>') {
        textToArray.splice(Number(gtNum) + 1, 0, `<${toolDefault.value}>`)
      }
      index = index + 2
    }
    content.value = textToArray.join('').replace(`<${toolDefault.value}></${toolDefault.value}>`, '')
    selectionStart.value = 0
    selectionEnd.value = 0
  }
}

const pressHandler = () => {
  selectionStart.value = 0
  selectionEnd.value = 0
  console.log(selectionStart.value)
}

const enterHandler = () => {
  content.value = content.value + '\n<p></p>'
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
          <li class="editorItem" :class="toolDefault === 'p' ? 'active' : ''" @click="toolDefault = 'p'; applyHandler();"><Paragraph /></li>
          <li class="editorItem" :class="toolDefault === 'h1' ? 'active' : ''" @click="toolDefault = 'h1'; applyHandler();"><TypeH1 /></li>
          <li class="editorItem" :class="toolDefault === 'h2' ? 'active' : ''" @click="toolDefault = 'h2'; applyHandler();"><TypeH2 /></li>
          <li class="editorItem" :class="toolDefault === 'h3' ? 'active' : ''" @click="toolDefault = 'h3'; applyHandler();"><TypeH3 /></li>
          <li class="editorItem" :class="toolDefault === 'b' ? 'active' : ''" @click="toolDefault = 'b'; applyHandler();"><TypeBold /></li>
          <li class="editorItem" :class="toolDefault === 'i' ? 'active' : ''" @click="toolDefault = 'i'; applyHandler();"><TypeItalic /></li>
          <li class="editorItem" :class="toolDefault === 'u' ? 'active' : ''" @click="toolDefault = 'u'; applyHandler();"><TypeUnderline /></li>
          <li class="editorItem" :class="toolDefault === 's' ? 'active' : ''" @click="toolDefault = 's'; applyHandler();"><TypeStrikethrough /></li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem" :class="{active: viewCode === true}" @click="viewCode = true">Compose</li>
          <li class="editorItem" :class="{active: viewCode === false}" @click="viewCode = false">View</li>
        </ul>
      </div>
      <textarea v-if="viewCode" class="editorContent" v-model="content" :style="{height}" @select="selectionHandler" @keyup.enter="enterHandler" @click="pressHandler"></textarea>
      <div v-else ref="editorContentRef" class="editorContent" contenteditable="true" :style="{height}" v-html="content" @keyup.enter="enterHandler"></div>
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
