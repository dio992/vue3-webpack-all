<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    v-model="msg" />
</template>

<script>
 export default {
  data () {
    return {
      msg : 'hello world'
    }
  },
  watch: {
    msg() {
      console.log(this.msg.trim())
    }
  }
 }
</script>