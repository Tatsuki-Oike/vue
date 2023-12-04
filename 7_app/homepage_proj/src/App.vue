<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  mounted: function () {
      this.$store.commit("make_path")
  }
}
</script>
