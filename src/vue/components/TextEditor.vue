<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { uniqid } from 'alga-js/string'

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
const content = ref<string>('<p>This is the first content for tooltip</p>')
const viewCode = ref<boolean>(false)
const uniqueId = uniqid()

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
          <li class="editorItem active">Bold</li>
          <li class="editorItem">Italic</li>
          <li class="editorItem active">Underscore</li>
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
          <li class="editorItem plain">p &gt; b</li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem plain">Total: 2345 word</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@use editor;
</style>
