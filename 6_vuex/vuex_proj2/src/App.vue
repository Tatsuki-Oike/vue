<template>
  <h1> App.vueのtemplate </h1>
  <p> {{ "Vuex data: " + $store.state.count }} </p>

  <!-- ボタン -->
  <div class="row gap-3 mb-5 justify-content-center">
    <button class="btn btn-primary w-auto" 
      v-on:click="$store.commit('plusOne')"> plus1 </button>
    <button class="btn btn-primary w-auto" 
      v-on:click="$store.commit('plusN', 3)"> plus3 </button>
    <button class="btn btn-primary w-auto" 
      v-on:click="$store.commit('minusOne')"> minus1 </button>
    <button class="btn btn-primary w-auto" 
      v-on:click="$store.commit('minusN', 3)"> minus3 </button>
  </div>

  <!-- コンポーネント -->
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
