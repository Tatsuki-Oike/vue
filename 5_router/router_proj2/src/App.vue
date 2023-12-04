<template>
  <Home></Home>
  <router-view></router-view>
  <router-view name="comp1"></router-view>
  <router-view name="comp2"></router-view>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
