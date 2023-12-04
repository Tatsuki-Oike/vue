<template>
  <nav class="navbar navbar-expand-lg fixed-top py-3" id="Nav">
      <div class="container-fluid">
        
        <!-- ブランド名 -->
        <span class="navbar-brand me-auto text-white">データサイエンス研究所</span>

        <!-- 折りたたみ時のアイコン -->
        <button class="navbar-toggler border-light" type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarNav02">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- ナビゲーション -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav02">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="btn btn-outline-light mx-2 fs-5">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/video" class="btn btn-outline-light mx-2 fs-5">
                Video
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="btn btn-outline-light mx-2 fs-5">
                About
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav> 
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
#Nav {
  background-color: saddlebrown;
}
</style>