<template>
  <h1 class="mt-5"> {{ title }} </h1>
  <router-link v-bind:to="page1Link" class="btn btn-primary mx-2">
    Go To Page1
  </router-link>
  <router-link v-bind:to="page2Link" class="btn btn-primary mx-2">
    Go To Page2
  </router-link>
</template>

<script>
export default {
  name: 'Home',
  props: {
    inputName: String,
    userId: String,
  },
  data() {
    return {
      title: "Home.vueの内容",
    }
  },
  computed: {
    page1Link(){
      let tempUser = this.inputName? this.inputName: "gest"
      let tempId = this.userId? this.userId: 0
      return {name: 'page1', params: {username: tempUser}, query: {id: tempId}}
    },
    page2Link(){
      let tempUser = this.inputName? this.inputName: "gest"
      let tempId = this.userId? this.userId: 0
      return {name: 'page2', params: {username: tempUser}, query: {id: tempId}}
    }
  }
}
</script>
