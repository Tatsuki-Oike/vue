<template>

    <!-- タイトル -->
    <div class="row justify-content-center" id="title">
        <div class="col-9">
            <h1 class="display-2 font-weight-bold text-left"> ようこそ、</h1>
        </div>
        <div class="col-9">
            <h1 class="display-2 font-weight-bold text-left"> データサイエンス研究所へ</h1>
        </div>
    </div>

    <!-- ボタン -->
    <div class="row justify-content-center">
        <a href="https://youtube.com/@dken" 
         class="btn btn-danger btn-lg col-10 py-3 text-decoration-none fs-3"
         target="_blank" id="button">
            Youtube
        </a>
    </div>
    
</template>
  
<script>

export default {
name: 'Home',
}
</script>

<style>
#title {
    margin: 8rem 0 8rem 0;
}
</style>
