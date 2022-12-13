<template>
  <div   
    class="btn">
    <slot></slot>
  </div>
  <h1
    v-bind="$attrs"
    @dblclick="$emit('heropy',$event)">
    abc
  </h1>
  <input
    type="text"
    v-model="msg" />  
</template>

<script>
  export default {
    inheritAttrs:false,    
    created(){
      console.log(this.$attrs)
    },
    emits: [
      'heropy',
      'changeMsg'
    ],
    data() {
      return {
        msg:''
      }
    },
    watch: {
      msg() {
        this.$emit('changeMsg',this.msg)
      }
    },
    props: {
      color: {
        type:String,
        default: 'gray'
      },
      large: {
        type:Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn {
    display: inline-block;
    margin:4px;
    padding:6px 12px;
    border-radius: 4px;
    background-color: gray;
    color:white;
    cursor:pointer;
    &.large {
      font-size:20px;
      padding:10px 20px;
    }
  }
  
</style>
