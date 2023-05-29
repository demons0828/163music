<template>
    <div class="main">
        <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    </div>

  </template>
  <script>
    export default {
      data() {
        return {
          menuItems: [
            { id: 1, title: '推荐', link: '#' },
            { id: 2, title: '排行榜', link: '#' },
            { id: 3, title: '歌单', link: '#' },
            { id: 4, title: '主播电台', link: '#' },
            { id: 5, title: '歌手', link: '#' },
            { id: 6, title: '新歌上架', link: '#' }
          ]
        }
      }
    }



</script>
  
  <style>
    .el-carousel__item h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .main{
        margin-top: 40px;
        width: 100%;
        height: 100%;

    }
  </style>