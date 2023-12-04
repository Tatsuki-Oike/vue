<template>
  <h1 class="mt-3"> Category作成 </h1>
  <div class="row">
    <div class="col-8">
      <input class="form-control" type="text" v-model="input">
    </div>
    <div class="col-4">
      <button type="button" class="btn btn-primary" @click="add_category"> 追加 </button>
    </div>
  </div>

  <h2 class="mt-3"> Category List </h2>  
  
  <ul id="category_list" class="list-group overflow-y px-3">
      <template v-for="(_, key) in $store.state.task_list">
        <router-link :to="{name: 'todo', params: {category: key}}" 
          class="btn btn-outline-dark d-flex my-2 row align-items-center justify-content-between">
            <div class="col-8 fs-3 d-flex">
              {{ key }}
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger px-5" 
                  @click.prevent="$store.commit('delete_category', key)"> 消去 </button>
            </div>
        </router-link>
      </template>
  </ul>
  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      input: ""
    }
  },
  methods: {
    add_category(){
        this.$store.commit('add_category', this.input)
        this.input = ""
      }
  }
}
</script>

<style>
#category_list {
  max-height: 550px;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
</style>
