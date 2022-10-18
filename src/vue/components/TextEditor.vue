<script setup lang="ts">
import { ref, computed, watch, onMounted, onUpdated } from 'vue'
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
  modelValue?: any[],
  height?: string
}>(), {
  //@ts-ignore
  modelValue: [],
  height: '300px'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
}>()

const toolBlock = ref<string>('p')
const toolDefault = ref<string>('')
//const toolBlock = ref<string>('')
//const toolInlines = ref<string[]>([])
const editorContentRef = ref<any>(null)
const editorBlockRef = ref<any>(null)
const content = ref<any[]>(props.modelValue || {})
const viewCode = ref<string>('text')
const uniqueId = uniqid()

const contentHTML = computed<string>(() => {
  return content.value.map((item: any, index: number) => {
    let newBlock = `<${item.name} id="${item.id}" data-index="${index}">`
    if(typeof item.children === 'string') {
      newBlock = newBlock + item.children
    } else {
      newBlock = newBlock + childrenHTML(item.children)
    }
    return newBlock + `</${item.name}>`
  }).join('\n')
})

const childrenHTML = (children) => {
  let newChildren = ''
  for(let child of children) {
    if(child.type === 'inline') {
      let newInline = `<${child.name} id="${child.id}">`
      if(typeof child.children === 'string') {
        newInline = newInline + child.children
      } else {
        newInline = newInline + childrenHTML(child.children)
      }
      newChildren = newChildren + newInline + `</${child.name} id="${child.id}">`
    } else {
      newChildren = newChildren + child.children
    }
  }
  return newChildren
}

onMounted(() => {
  if(editorContentRef.value !== null) {
    const childrenElem = [].slice.call(editorContentRef.value.children)
    for(let elem of childrenElem) {
      elem.onclick = () => {
        editorBlockRef.value = elem
        console.log(editorBlockRef.value)
      }
    }
  }
})

onUpdated(() => {
  if(editorContentRef.value !== null) {
    const childrenElem = [].slice.call(editorContentRef.value.children)
    editorBlockRef.value = childrenElem[Number(childrenElem.length) - 1]
    editorBlockRef.value.focus()
    let range = editorBlockRef.value.createTextRange();
    range.collapse(false);
    range.select();
    console.log(editorBlockRef.value)
    for(let elem of childrenElem) {
      elem.onclick = () => {
        editorBlockRef.value = elem
        console.log(editorBlockRef.value)
      }
    }
  }
})

const changeBlockHandler = () => {
  
}

const selectionStart = ref<number>(0)
const selectionEnd = ref<number>(0)
const selectionHandler = (e) => {
  toolDefault.value = ''
  selectionStart.value = Number(e.target.selectionStart)
  selectionEnd.value = Number(e.target.selectionEnd)
}

const applyHandler = () => {
  if(selectionStart.value !== 0 || selectionEnd.value !== 0) {
    const textToArray = contentHTML.value.split('')
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
  content.value.splice(Number(editorBlockRef.value.getAttribute('data-index')) + 1, 0, {
    id: 'block-'+uniqid(content.value.length),
    type: 'block',
    name: 'p',
    children: 'This is the second content for text editor '+uniqid(content.value.length),
  })
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
          <li class="editorItem" :class="toolBlock === 'p' ? 'active' : ''" @click="toolBlock = 'p'; changeBlockHandler();"><Paragraph /></li>
          <li class="editorItem" :class="toolBlock === 'h1' ? 'active' : ''" @click="toolBlock = 'h1'; changeBlockHandler();"><TypeH1 /></li>
          <li class="editorItem" :class="toolBlock === 'h2' ? 'active' : ''" @click="toolBlock = 'h2'; changeBlockHandler();"><TypeH2 /></li>
          <li class="editorItem" :class="toolBlock === 'h3' ? 'active' : ''" @click="toolBlock = 'h3'; changeBlockHandler();"><TypeH3 /></li>
          <li class="editorItem" :class="toolDefault === 'b' ? 'active' : ''" @click="toolDefault = 'b'; changeBlockHandler();"><TypeBold /></li>
          <li class="editorItem" :class="toolDefault === 'i' ? 'active' : ''" @click="toolDefault = 'i'; applyHandler();"><TypeItalic /></li>
          <li class="editorItem" :class="toolDefault === 'u' ? 'active' : ''" @click="toolDefault = 'u'; applyHandler();"><TypeUnderline /></li>
          <li class="editorItem" :class="toolDefault === 's' ? 'active' : ''" @click="toolDefault = 's'; applyHandler();"><TypeStrikethrough /></li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem" :class="{active: viewCode === 'text'}" @click="viewCode = 'text'">Editor</li>
          <li class="editorItem" :class="{active: viewCode === 'html'}" @click="viewCode = 'html'">HTML</li>
          <li class="editorItem" :class="{active: viewCode === 'json'}" @click="viewCode = 'json'">JSON</li>
        </ul>
      </div>
      <textarea v-if="viewCode === 'html'" class="editorContent" :value="contentHTML" :style="{height}" @select="selectionHandler" @keyup.enter="enterHandler" @click="pressHandler" readonly></textarea>
      <textarea v-else-if="viewCode === 'json'" class="editorContent" :value="JSON.stringify(content, null, 4)" :style="{height}" @select="selectionHandler" @keyup.enter="enterHandler" @click="pressHandler" readonly></textarea>
      <div v-else ref="editorContentRef" class="editorContent" contenteditable="true" :style="{height}" v-html="contentHTML" @keyup.enter="enterHandler"></div>
      <div class="editorStatusbar">
        <ul class="editorMenu">
          <li class="editorItem plain">Status</li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem plain">Total: {{ String(contentHTML).split(' ').length }} words</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@use editor;
</style>
