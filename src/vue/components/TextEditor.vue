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
  modelValue?: string,
  height?: string,
  showCode?: boolean
}>(), {
  //@ts-ignore
  modelValue: '<p></p>',
  height: '300px',
  showCode: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const toolBlock = ref<string>('p')
const toolDefault = ref<string>('')
//const toolInlines = ref<string[]>([])

const editorContentRef = ref<any>(null)
const editorBlockRef = ref<any>(null)
const editorSelectionRef = ref<any>(null)

const content = ref<string>(props.modelValue || '<p></p>')
const viewCode = ref<string>('text')
const uniqueId = uniqid()

const contentHTML = computed<string>(() => {
  return content.value.replace(/\<(p|h1|h2|h3)\>/g, `<div data-name="$1">`).replace(/\<\/(p|h1|h2|h3)\>/g, '</div>').replace(/\<(b|i|u|s)\>/g, `<span data-name="$1">`).replace(/\<\/(b|i|u|s)\>/g, '</span>')
})

onMounted(() => {
  if(editorContentRef.value !== null) {
    const childrenElem = [].slice.call(editorContentRef.value.children)
    for(let elem of childrenElem) {
      elem.addEventListener('click', clickBlockHandler)
      elem.addEventListener('selectstart', selectionHandler)
    }
    selectionHandler()
  }
})

onUpdated(() => {
  if(editorContentRef.value !== null) {
    const childrenElem = [].slice.call(editorContentRef.value.children)
    for(let elem of childrenElem) {
      elem.addEventListener('click', clickBlockHandler)
      elem.addEventListener('selectstart', selectionHandler)
    }
    selectionHandler()
    /*let sel;
    editorBlockRef.value.focus();
    if(document.selection) {
      sel = document.selection.createRange();
      sel.moveStart('character', 1);
      sel.select();
    } else {
      sel = window.getSelection();
      sel.collapse(editorContentRef.value.lastChild, 0)
    }*/
  }
})

const clickBlockHandler = (e: any) => {
  selectionHandler()
  if(e.target.tagName.toLowerCase() === 'div') {
    editorBlockRef.value = e.target
    toolBlock.value = e.target.getAttribute('data-name')
  }
}

const changeBlockHandler = () => {
  if(editorBlockRef.value !== null && editorBlockRef.value.tagName.toLowerCase() === 'div') {
    editorBlockRef.value.setAttribute('data-name', toolBlock.value)
    inputHandler()
  }
}

const timer = ref<any>(null)
const inputHandler = () => {
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    if(editorContentRef.value !== null) {
      const inputElems = [].slice.call(editorContentRef.value.children)
      let newContent = inputElems.map((elem: any) => {
        const newTag = elem.getAttribute('data-name')
        return `<${newTag}>${inputChildren(elem.childNodes)}</${newTag}>`
      })
      content.value = newContent.join('\n').replaceAll('<null></null>', '')
      emit('update:modelValue', content.value)
    }
  }, 300)
}

const inputChildren = (childNodes) => {
  let newChildren = ''
  for(let child of childNodes) {
    if(child.nodeName === "#text") {
      newChildren = newChildren + child.nodeValue
    } else {
      if(child.childNodes) {
        const newTag = child.getAttribute('data-name')
        newChildren = newChildren + `<${newTag}>${inputChildren(child.childNodes)}</${newTag}>`
      }
    }
  }
  return newChildren
}

const selectionHandler = () => {
  toolDefault.value = ''
  const sel = document.getSelection()
  if((Number(sel?.anchorOffset || 0) !== 0 && Number(sel?.focusOffset || 0) !== 0) || Number(sel?.anchorOffset || 0) < Number(sel?.focusOffset || 0)) {
    editorSelectionRef.value = sel
  }
}

const applyHandler = () => {
  if(editorSelectionRef.value !== null) {
    let selectionStart = editorSelectionRef.value.anchorOffset
    let selectionEnd = editorSelectionRef.value.focusOffset
    console.log(selectionStart)
    console.log(selectionEnd)
    //console.log(editorSelectionRef.value.anchorNode.data)
  
    /*const range = document.createRange()
    range.setStart(editorBlockRef.value, selectionStart)
    range.setEnd(editorBlockRef.value, selectionEnd)
    
    const newInlineTag = document.createElement(toolDefault.value)
    range.surroundContents(newInlineTag)*/
    
    inputHandler()
    if(selectionStart !== 0 || selectionEnd !== 0) {
      const textToArray = editorBlockRef.value.innerHTML.split('')
      textToArray.splice(selectionStart, 0, `<span data-name="${toolDefault.value}">`)
      textToArray.splice(Number(selectionEnd) + 1, 0, `</span>`)
      const ltArr: number[] = []
      const gtArr: number[] = []
      let totalTag: number = 1
      for(let i: number = Number(selectionStart) + 1; i < (Number(selectionEnd) + 1); i++) {
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
          textToArray.splice(ltNum, 0, `</span>`)
        }
        if(textToArray[gtNum] === '>') {
          textToArray.splice(Number(gtNum) + 1, 0, `<span data-name="${toolDefault.value}">`)
        }
        index = index + 2
      }
      editorBlockRef.value.innerHTML = textToArray.join('').replace(`<span data-name="${toolDefault.value}"></span>`, '')
    }
  }
}

const pressHandler = () => {
  selectionStart = 0
  selectionEnd = 0
  console.log(selectionStart)
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
  <div class="editor editorText tedirEditor">
      <div class="editorToolbar">
        <ul class="editorMenu">
          <li class="editorItem" :class="toolBlock === 'p' ? 'active' : ''" @click="toolBlock = 'p'; changeBlockHandler();"><Paragraph /></li>
          <li class="editorItem" :class="toolBlock === 'h1' ? 'active' : ''" @click="toolBlock = 'h1'; changeBlockHandler();"><TypeH1 /></li>
          <li class="editorItem" :class="toolBlock === 'h2' ? 'active' : ''" @click="toolBlock = 'h2'; changeBlockHandler();"><TypeH2 /></li>
          <li class="editorItem" :class="toolBlock === 'h3' ? 'active' : ''" @click="toolBlock = 'h3'; changeBlockHandler();"><TypeH3 /></li>
          <li class="editorItem" :class="toolDefault === 'b' ? 'active' : ''" @click="toolDefault = 'b'; applyHandler();"><TypeBold /></li>
          <li class="editorItem" :class="toolDefault === 'i' ? 'active' : ''" @click="toolDefault = 'i'; applyHandler();"><TypeItalic /></li>
          <li class="editorItem" :class="toolDefault === 'u' ? 'active' : ''" @click="toolDefault = 'u'; applyHandler();"><TypeUnderline /></li>
          <li class="editorItem" :class="toolDefault === 's' ? 'active' : ''" @click="toolDefault = 's'; applyHandler();"><TypeStrikethrough /></li>
        </ul>
        <ul v-if="showCode === true" class="editorMenu">
          <li class="editorItem" :class="{active: viewCode === 'text'}" @click="viewCode = 'text'">Editor</li>
          <li class="editorItem" :class="{active: viewCode === 'html'}" @click="viewCode = 'html'">HTML</li>
        </ul>
      </div>
      <textarea v-if="showCode === true && viewCode === 'html'" class="editorContent" :value="content" :style="{height}" readonly></textarea>
      <div v-else ref="editorContentRef" class="editorContent" :style="{height}" contenteditable="true" v-html="contentHTML"></div>
      <div class="editorStatusbar">
        <ul class="editorMenu">
          <li class="editorItem plain">{{ toolBlock }} &gt; Status</li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem plain">Total: {{ String(content).split(' ').length }} words</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@use editor;
</style>
