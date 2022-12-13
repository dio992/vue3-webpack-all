<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button @click="handler">
    click me!!
  </button>
  <ul>
    <!-- key 는 해당 태그가 고유하다는것을 알려줌...-->
    <li
      v-for="{id, name} in newFruits"
      :key="id"> 
      {{ name }}-{{ id }}
    </li>
  </ul>
</template>
<script>
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits : ['apple', 'banana', 'cherry']      
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map(fruit => ({       
          id: shortid.generate(),
          name: fruit      
      }))
    }
  },
  methods: {
    handler() {
      this.fruits.push('orange')
    }
  }
}
</script>