<template>
    <!-- メインカルーセル -->
    <Carousel :itemsToShow="1.5" :autoplay="1000" :wrapAround="true" :transition="500" class="my-5">
        <Slide v-for="image_obj in new_image_objects" :key="slide">
            <a :href="image_obj.link" target="_blank">
                <img :src="image_obj.path" class="img-fluid" alt="img">
            </a>
        </Slide>

        <template #addons>
        <Navigation />
        </template>
    </Carousel>

    <!-- サブカルーセル -->
    <Images title="古い順番" :image_objects="original_image_objects"></Images>
    <Images title="新しい順番" :image_objects="new_image_objects"></Images>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import Images from './Images.vue'

export default {
    name: 'Vidio',
    data() {
        return {
            original_image_objects: this.$store.state.image_path_objects,
            new_image_objects: [],
            slide: "",
        }
    },
    components: {
        Images,
        Carousel,
        Slide,
        Navigation,
    },
    mounted: function () {
        this.new_image_objects = this.$store.state.image_path_objects.slice().sort(function(a, b) {
            return (a.path > b.path) ? -1 : 1; 
        });
    }
}
</script>

<style>
.carousel__slide {
  padding: 20px;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>