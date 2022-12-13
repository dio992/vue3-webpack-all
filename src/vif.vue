<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button @click="handler">
    click me!!!
  </button>
  <div v-if="isShow">
    <h1>title</h1>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
  </div>
</template>
<script>
export default{
  data() {
    return {
      isShow: true,
      count:0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>