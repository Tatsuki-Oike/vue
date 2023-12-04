<template>
  <h2 class="mt-3"> ここは共通部分 </h2>
  <router-link to="/" class="btn btn-primary mx-2">
    Go To Page1
  </router-link>
  <router-link to="/page2" class="btn btn-primary mx-2">
    Go To Page2
  </router-link>

  <h2 class="mt-3"> {{ msg }} </h2>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: "ここより下は、変化する"
    }
  }
}
</script>
