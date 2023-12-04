<template>

    <!-- 概要 -->
    <div class="row">
        <div class="col-4 col-md-2">
            <h3 class="border text-center py-3"> About </h3>
        </div>
    </div>

    <p class="mt-3">
        AIや機械学習、統計などデータサイエンスに関連する分野について発信しています!!💻<br><br>

        1週間に2本(土日)投稿中⭐️<br><br>

        データサイエンス研究所 : https://www.youtube.com/@dken<br>
        twitter : https://twitter.com/Dken_ta<br>
        ブログ : https://tatsukioike.com<br>
        github : https://github.com/Tatsuki-Oike<br>
    </p>

    <!-- Series -->
    <div class="row mt-5">
        <div class="col-4 col-md-2">
            <h3 class="border text-center py-3"> Series </h3>
        </div>
    </div>

    <div class="list-group mt-3">
        <template v-for="(item, id) in this.$store.state.image_path_objects">
            <a :href="item.link" 
            class="list-group-item list-group-item-action bg-transparent text-white"> 
                {{listContent(id, item)}} 
            </a>
        </template>                
    </div>
    
</template>
  
<script>

export default {
name: 'About',
computed: {
    listContent(){
      return (id, item) => {
        const sentence = id+1 + ": " + item.title + "×" + item.num_videos
        return sentence
      }
    }
}
}
</script>
