<template>
  <h1> {{ title }} </h1>
  <p> {{ $store.state.message }} </p>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "App.vueのtemplate"
    }
  },
  components: {
    HelloWorld
  }
}
</script>
