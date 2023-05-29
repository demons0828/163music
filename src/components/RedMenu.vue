<template>
    
<div class="redmenu">

    <ul>
        <li v-for="item in menuItems" :key="item.id">
        <a :href="item.link">{{item.title}}</a>
        <sub v-if="item.id==1"> </sub>
        </li>
    </ul>


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
    .redmenu {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #C20C0C;
        color: #CCCCCC;
        height: 20px;
        margin: 0;
        width: 100%;
       
      

    }
    .redmenu ul {
        
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        margin-left: 18%;
    }

    .redmenu li {
        
        margin-right: 30px;
    } 
    .redmenu a {
        color: #cccccc;
        border-radius: 20px;
        padding: 0 13px;
        width: 100%;
        height: 100%;
        display: inline-block;
        text-decoration: none;
        font-size: 10px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;

    }
    .redmenu a:hover {
        color: #fff;
        background-color: #9B0909;
        
    }
    .redmenu sub {
        position: absolute;
        top: -10px;
        left: 22%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 10px solid #C20C0C;
        content: "";
    }



</style>