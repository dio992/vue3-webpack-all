<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button @click="handler('hi', $event)">
    Click me1
  </button>
  <button @click="handler('what',$event)">
    Click me2
  </button>
  <button @click="(handler('what',$event), handler2('why',$event))">
    Click me3
  </button>
</template>
<script>
  export default {
    methods: {
      handler(msg, event){
       console.log(msg)
       console.log(event)
      },
      handler2(msg, event) {
        console.log(msg)
        console.log(event)
      }
    }
  }
</script>