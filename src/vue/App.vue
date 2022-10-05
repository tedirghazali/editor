<script setup lang="ts">
import { ref, watch } from 'vue'
import TextEditor from './components/TextEditor.vue'

const content = ref<string>('')

watch(content, () => {
  console.log(content.value)
})
</script>

<template>
  <div class="container mt-30px mb-30px">
    <TextEditor v-model="content" />
  </div>
</template>
