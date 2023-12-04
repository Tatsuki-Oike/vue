<template>
    <!-- 画像一覧 -->
    <h2 class="text-light"> {{ title }} </h2>
    <div class="row flex-nowrap overflow-x-scroll mb-5">
        <template v-for="image_obj in image_objects">
                <div class="col-6 col-lg-4 d-flex" :href="image_obj.link">
                        <div class="card border-light">
                            <img class="card-img-top" :src="image_obj.path" alt="Card image cap">
                            <div class="card-body row d-flex justify-content-between align-items-center">
                                <h5 class="card-title col-12 col-lg-6"> {{ image_obj.title }} </h5>
                                <a :href="image_obj.link"
                                 class="btn btn-danger stretched-link col-6 col-lg-4 py-3 mx-3">
                                  Youtube 
                                </a>
                            </div>
                        </div>
                </div>
        </template>
    </div>
</template>
  
<script>
export default {
name: 'Images',
props: {
  title: String,
  image_objects: Object,
},
}
</script>
