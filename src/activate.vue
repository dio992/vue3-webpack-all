<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1
    :class="{active: isActive}"
    @click="activate">
    Hello?!({{ isActive }})
  </h1>
  <h2
    :style="[fontStyle,backgroundStyle]"
    @click="changeStyle">
    World?!    
  </h2>
</template>

<script>
export default {
 data() {
  return {
    isActive: false,
    fontStyle: {
      color:'orange',
      fontSize: '30px'
    },
    backgroundStyle: {
      backgroundColor:'black'
    }    
  }
 },
 methods : {
  activate() {
    this.isActive = true
  },
  changeStyle() {
    this.fontStyle.color =  'royalblue',
    this.fontStyle.fontSize = '50px'
  }
 }
}
</script>

<style scoped>
  .active {
    color: royalblue;
    font-size:50px;
  }
</style>