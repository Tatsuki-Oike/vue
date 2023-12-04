<template>
  <!-- 共通部分 -->
  <h2 class="mt-3"> ここは共通部分 </h2>
  <router-link to="/" class="btn btn-primary mx-2">
    Go To Top
  </router-link>
  <router-link to="/page" class="btn btn-primary mx-2">
    Go To Page
  </router-link>

  <!-- ページで切り替わる部分 -->
  <h2 class="mt-3"> ここより下は、変化する </h2>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
