<template>
  <h1> App.vue の内容 </h1>
  <input type="text" v-model="inputName">
  <input type="text" v-model="userId">

  <Home v-bind:inputName="inputName" v-bind:userId="userId"></Home>
  
  <router-view></router-view>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  data() {
    return {
      inputName: "",
      userId: "",
    }
  },
  components: {
    Home
  }
}
</script>
