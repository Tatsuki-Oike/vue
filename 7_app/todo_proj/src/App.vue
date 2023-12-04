<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
        <Sidebar></Sidebar>
        <main class="col ps-md-2 pt-2text-center">
            <div class="row">
              <div class="col-1 mt-3">
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" 
                class="border rounded-1 p-2 text-decoration-none">
                  Menu
                </a>
              </div>
              <div class="col-10">
                <router-view></router-view>
              </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
