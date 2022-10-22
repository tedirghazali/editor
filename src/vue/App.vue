<script setup lang="ts">
import { ref, watch } from 'vue'
import { uniqid } from 'alga-js/string'
import TextEditor from './components/TextEditor.vue'

const content = ref<string>('<p>This is <b>the <u>first content</u></b> for tooltip</p>')
/*const content = ref<any[]>([
  {
    id: 'block-'+uniqid(0),
    type: 'block',
    name: 'p',
    source: '<p>This is <b>the <u>first content</u></b> for tooltip</p>',
    children: [
      {
        type: 'text',
        children: 'This is '
      },
      {
        id: 'inline-'+uniqid(0),
        type: 'inline',
        name: 'b',
        children: [
          {
            type: 'text',
            children: 'the '
          },
          {
            id: 'inline-'+uniqid(1),
            type: 'inline',
            name: 'u',
            children: 'first content'
          },
        ]
      },
      {
        type: 'text',
        children: ' for rich editor'
      }
    ]
  }
])*/

watch(content, () => {
  console.log(content.value)
})
</script>

<template>
  <div class="container mt-30px mb-30px">
    <TextEditor v-model="content" :showCode="true" />
  </div>
</template>
