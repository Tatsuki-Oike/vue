<template>
  <div class="col-auto px-0 bg-dark pt-2">
      <div id="sidebar" class="collapse collapse-horizontal show">
          <div id="sidebar-nav" class="list-group rounded-0 text-sm-start min-vh-100 bg-dark">
              <router-link to="/" class="btn btn-outline-light m-1">
                + New Category
              </router-link>
              <ul id="nav_list" class="list-group">
                  <template v-for="(_, key) in $store.state.task_list">
                    <router-link :to="{name: 'todo', params: {category: key}}" :class="Active(key)">
                      {{ key }}
                    </router-link>
                  </template>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    Active(){
      return (key) =>{
        return {
        btn: true,
        "btn-dark": true,
        "d-flex": true,
        "m-1": true,
        active: key === this.$route.params["category"]
        }
      }
    }
  }
}
</script>

<style>
#sidebar-nav{
  width: 250px;
}
#nav_list {
  max-height: 625px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
</style>

