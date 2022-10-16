<script setup lang="ts">
import { ref, watch } from 'vue'
import MarkEditor from './components/MarkEditor.vue'
import TextEditor from './components/TextEditor.vue'

const content = ref<string>('')
const contentHTML = ref<string>('')

watch(content, () => {
  console.log(content.value)
})

watch(contentHTML, () => {
  console.log(contentHTML.value)
})
</script>

<template>
  <div class="container mt-30px mb-30px">
    <MarkEditor v-model="content" />
  </div>
  <div class="container mt-30px mb-30px">
    <TextEditor v-model="contentHTML" />
  </div>
</template>
