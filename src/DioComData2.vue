<template>
  <h1 @click="increase">
    {{ count }} / {{ doublecount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} / {{ reverseMessage }}
  </h1>
</template>

<script>
  import {ref, computed, watch, onMounted} from 'vue'

  export default {
    setup() {
      let count  = ref(0)
      const doublecount = computed(() => {
        return count.value * 2
      })          
      function increase() {
        count.value +=1
      }

      let message = ref('hello world')
      const reverseMessage = computed(() => {
        return message.value.split('').reverse().join('')
      })
      watch(message, (newValue) => {
        console.log(newValue)
      })
      function changeMessage() {
        message.value = 'good'
      }

      onMounted(() => {
        console.log(count.value)
      })
      
      return {
        count,
        doublecount,
        message,
        reverseMessage,
        increase,
        changeMessage
      }
    }
  }
</script>