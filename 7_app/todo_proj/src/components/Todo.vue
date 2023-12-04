<template>
  <h2 class="mt-3"> {{ title }} </h2>

  <ul class="list-group">
      <template v-for="task_obj in todo_flag_list(done_flag)">
          <div class="row align-items-center">
            <div class="col-8">
              <li class="list-group-item"> {{task_obj.task}} </li>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-primary my-3" 
                @click="$store.commit('check', {category: categoryN, id: task_obj.task_id})"> 
                {{button_name}} 
              </button>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger my-3" 
                @:click="$store.commit('delete_task', {category: categoryN, id: task_obj.task_id})"> 
                Delete 
              </button>
            </div>
          </div>
      </template>
  </ul>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    title: String,
    button_name: String,
    done_flag: Boolean,
    categoryN: String,
  },
  computed: {
      todo_flag_list(){
          return done_flag => 
            this.$store.state.task_list[this.categoryN].filter(item => done_flag === item.status)
      }
  },
}
</script>
