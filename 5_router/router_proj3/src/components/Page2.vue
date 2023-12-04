<template>
  <h1 class="mt-3"> {{ title }} </h1>
  <p> {{ "[msg] : " + msg }} </p>
  <p> {{ "[username] : " + username }} </p>
  <p> {{ $route.params }} </p>
  <p> {{ $route.query }} </p>
</template>

<script>
export default {
  name: 'Page2',
  props: {
    username: String
  },
  data() {
    return {
      title:  "Page2.vue の内容",
    }
  },
  computed:{
    msg(){
      return "(UserID :" + this.$route.query["id"] + ") " + 
        this.$route.params["username"] + "さんのPage2の内容です"
    }
  }
}
</script>
