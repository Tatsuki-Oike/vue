<template>
  <h1> HelloWorld.vueのtemplate </h1>
  <p> {{ "Vuex data: " + $store.state.count }} </p>
  <form>
    <div class="form-group mt-3">
      <!-- Nの入力 -->
      <div class="form-group row justify-content-center">
        <label for="N" class="col-1 col-form-label">N</label>
        <div class="col-8">
          <input type="number" class="form-control" id="N" v-model="N">
        </div>
      </div>
      
      <!-- ボタン -->
      <div class="form-group row gap-3 my-3 justify-content-center">
        <button type="button" class="btn btn-primary w-auto" 
          v-on:click="$store.commit('plusN', N)"> plusN </button>
        <button type="button" class="btn btn-primary w-auto" 
          v-on:click="$store.commit('minusN', N)"> minusN </button>
        <button type="button" class="btn btn-primary w-auto" 
          v-on:click="$store.dispatch('randomN')"> randomN </button>
      </div>

    </div>

  </form>
  <p> {{ $store.state.msg }} </p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      N: 0,
    }
  }
}
</script>
