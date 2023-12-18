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
  modelValue: '<p>Start writing...</p>',
  height: '300px',
  showCode: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const toolBlock = ref<string>('')
const toolDefault = ref<string>('')
const toolInlines = ref<string[]>([])

const editorContentRef = ref<any>(null)
const editorBlockRef = ref<any>(null)
const editorInlineRef = ref<any>(null)
const editorSelectionRef = ref<any>(null)

const content = ref<string>(props.modelValue || '<p></p>')
const viewCode = ref<string>('text')
const uniqueId = uniqid()

const contentHTML = computed<string>(() => {
   const newHTML = content.value.replace(/\<(p|h1|h2|h3)\>/g, `<div data-tag="$1">`).replace(/\<\/(p|h1|h2|h3)\>/g, '</div>').replace(/\<(b|i|u|s)\>/g, `<span data-tag="$1">`).replace(/\<\/(b|i|u|s)\>/g, '</span>')
   return `<!doctype html>
<html>
  <head>
    <style>
      body { height: 100%; padding: 15px; margin: 0px; }
      
      [data-tag=p] { margin-top: 0.5rem; margin-bottom: 0.5rem; }
      
      [data-tag=h1], 
      [data-tag=h2], 
      [data-tag=h3] { margin-top: 0.5rem; margin-bottom: 0.5rem; font-weight: bold; line-height: 1.2; }
    
      [data-tag=h1] { font-size: 32px; }
    
      [data-tag=h2] { font-size: 24px; }
    
      [data-tag=h3] { font-size: 16px; }
    
      [data-tag=b],
      [data-tag=strong] { font-weight: bolder; }
    
      [data-tag=i],
      [data-tag=em] { font-style: italic; }
    
      [data-tag=u] { text-decoration: underline; }
    
      [data-tag=s] { text-decoration: line-through; }
    </style>
  </head>
  <body contenteditable="true" spellcheck="false">
    ${newHTML}
  </body>
</html>`
})

onMounted(() => {
  setTimeout(() => {
    if(editorContentRef.value !== null) {
      const doc: any = editorContentRef.value.contentDocument
      const childrenElem: any[] = [].slice.call(doc.body.children)
      for(let elem of childrenElem) {
        elem.addEventListener('click', (e: any) => {
          e.preventDefault()
          //e.stopPropagation()
          clickBlockHandler(e.target)
          clickInlineHandler(elem.children)
        })
      }
      doc.addEventListener('selectionchange', selectionHandler)
    }
  }, 200)
})

onUpdated(() => {
  setTimeout(() => {
    if(editorContentRef.value !== null) {
      const doc: any = editorContentRef.value.contentDocument
      const childrenElem: any[] = [].slice.call(doc.body.children)
      for(let elem of childrenElem) {
        elem.addEventListener('click', (e: any) => {
          e.preventDefault()
          //e.stopPropagation()
          clickBlockHandler(e.target)
          clickInlineHandler(elem.children)
        })
      }
      doc.addEventListener('selectionchange', selectionHandler)
    }
  }, 200)
})

watch(viewCode, () => {
  content.value = props.modelValue
})

watch(content, () => {
  inputHandler()
})

const clickBlockHandler = (target: any) => {
  if(target?.tagName.toLowerCase() === 'div') {
    editorBlockRef.value = target
    toolBlock.value = target.getAttribute('data-tag')
    toolInlines.value = []
  }
}

const changeBlockHandler = () => {
  if(editorBlockRef.value !== null && editorBlockRef.value.tagName.toLowerCase() === 'div') {
    editorBlockRef.value.setAttribute('data-tag', toolBlock.value)
    
    inputHandler()
  }
}

const clickInlineHandler = (children: any | any[]) => {
  const childrenInline: any[] = [].slice.call(children)
  for(let elem of childrenInline) {
    elem.addEventListener('click', (e: any) => {
      e.preventDefault()
      e.stopPropagation()
      toolInlines.value = []
      parentInlineHandler(e.target.parentElement)
      toolInlines.value.push(e.target.getAttribute('data-tag'))
      editorInlineRef.value = e.target
      clickInlineHandler(elem.children)
    })
  }
}

const parentInlineHandler = (parent: any) => {
  if(parent.tagName.toLowerCase() !== 'div') {
    toolInlines.value.unshift(parent.getAttribute('data-tag'))
  }
}

const timer = ref<any>(null)
const inputHandler = () => {
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    if(editorContentRef.value !== null) {
      const inputElems = [].slice.call(editorContentRef.value.contentDocument.body.children)
      let newContent = inputElems.map((elem: any) => {
        const newTag = elem.getAttribute('data-tag')
        return `<${newTag}>${inputChildren(elem.childNodes)}</${newTag}>`
      })
      const emitContent = newContent.join('\n').replaceAll('<null>', '<p>').replaceAll('</null>', '</p>')
      emit('update:modelValue', emitContent)
    }
  }, 300)
}

const inputChildren = (childNodes: any[]) => {
  let newChildren = ''
  for(let child of childNodes) {
    if(child.nodeName === "#text") {
      newChildren = newChildren + child.nodeValue
    } else {
      if(child.childNodes) {
        const newTag = child.getAttribute('data-tag')
        if(newTag === 'span') {
          newChildren = newChildren + inputChildren(child.childNodes)
        } else {
          newChildren = newChildren + `<${newTag}>${inputChildren(child.childNodes)}</${newTag}>`
        }
      }
    }
  }
  return newChildren
}

const selectionHandler = (e: any) => {
  toolDefault.value = ''
  const sel = editorContentRef.value.contentDocument.getSelection()
  if((Number(sel?.anchorOffset || 0) !== 0 && Number(sel?.focusOffset || 0) !== 0) || Number(sel?.anchorOffset || 0) < Number(sel?.focusOffset || 0)) {
    editorSelectionRef.value = sel
  }
}

const applyHandler = () => {
  if(editorSelectionRef.value !== null) {
    const range = editorSelectionRef.value.getRangeAt(0)
    if(range.toString().length >= 2) {
      const newInlineTag = editorContentRef.value.contentDocument.createElement('span')
      newInlineTag.setAttribute('data-tag', toolDefault.value)
      range.surroundContents(newInlineTag)
    } else {
      if(editorInlineRef.value !== null) {
        if(editorInlineRef.value.getAttribute('data-tag') === 'span') {
          applyParentInlineHandler(editorInlineRef.value.parentElement)
        } else {
          editorInlineRef.value.setAttribute('data-tag', 'span')
        }
      }
    }
    
    inputHandler()
  }
}

const applyParentInlineHandler = (parent: any) => {
  if(['b', 'i', 'u', 's'].includes(parent.getAttribute('data-tag'))) {
    parent.setAttribute('data-tag', 'span')
    applyParentInlineHandler(parent)
  }
}
</script>

<template>
  <div class="editor editorText tedirEditor" @mouseout="inputHandler">
      <div class="editorToolbar">
        <ul class="editorMenu">
          <li class="editorItem" :class="toolBlock === 'p' ? 'active' : ''" @click="toolBlock = 'p'; changeBlockHandler();"><Paragraph /></li>
          <li class="editorItem" :class="toolBlock === 'h1' ? 'active' : ''" @click="toolBlock = 'h1'; changeBlockHandler();"><TypeH1 /></li>
          <li class="editorItem" :class="toolBlock === 'h2' ? 'active' : ''" @click="toolBlock = 'h2'; changeBlockHandler();"><TypeH2 /></li>
          <li class="editorItem" :class="toolBlock === 'h3' ? 'active' : ''" @click="toolBlock = 'h3'; changeBlockHandler();"><TypeH3 /></li>
          <li class="editorItem" :class="toolInlines.includes('b') ? 'active' : ''" @click="toolDefault = 'b'; applyHandler();"><TypeBold /></li>
          <li class="editorItem" :class="toolInlines.includes('i') ? 'active' : ''" @click="toolDefault = 'i'; applyHandler();"><TypeItalic /></li>
          <li class="editorItem" :class="toolInlines.includes('u') ? 'active' : ''" @click="toolDefault = 'u'; applyHandler();"><TypeUnderline /></li>
          <li class="editorItem" :class="toolInlines.includes('s') ? 'active' : ''" @click="toolDefault = 's'; applyHandler();"><TypeStrikethrough /></li>
        </ul>
        <ul v-if="showCode === true" class="editorMenu">
          <li class="editorItem" :class="{active: viewCode === 'text'}" @click="viewCode = 'text'">Editor</li>
          <li class="editorItem" :class="{active: viewCode === 'html'}" @click="viewCode = 'html'">HTML</li>
        </ul>
      </div>
      <textarea v-if="showCode === true && viewCode === 'html'" class="editorContent" :value="modelValue" :style="{height}" readonly></textarea>
      <iframe v-else ref="editorContentRef" src="about:blank" :srcdoc="contentHTML" class="editorContent" :style="{height}"></iframe>
      <div class="editorStatusbar">
        <ul class="editorMenu">
          <li class="editorItem plain">{{ toolBlock }} {{ toolInlines.length >= 1 ? '› '+ toolInlines.join(' › ') : '' }}</li>
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
