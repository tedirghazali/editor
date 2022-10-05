<script setup lang="ts">
import { ref } from 'vue'
import { uniqid } from 'alga-js/string'

const props = withDefaults(defineProps<{
  //@ts-ignore
  modelValue?: string
}>(), {
  //@ts-ignore
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const content = ref<string>('')
const uniqueId = uniqid()

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
          <li class="editorItem">Compose</li>
          <li class="editorItem">View</li>
        </ul>
      </div>
      <div class="editorContent" contenteditable="true">
        This is the first content for tooltip
      </div>
      <div class="editorStatusbar">
        <ul class="editorMenu">
          <li class="editorItem">p &gt; b</li>
        </ul>
        <ul class="editorMenu">
          <li class="editorItem">Total: 2345 word</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>
@use editor;
</style>
