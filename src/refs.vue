<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Hello ref="hello" />
</template>

<script>
  import Hello from '~/components/Hello'

  export default {
    components: {
      Hello
    },
    created() {
      console.log(this.$refs.hello)
    },
    mounted() {
      console.log(this.$refs.hello)
    }
  }
</script>