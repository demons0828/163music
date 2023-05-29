<template>
    <div class="nav">
      <div class="logo">
        
        <svg t="1685287031169" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2372" width="200" height="200"><path d="M512 32c265.12 0 480 214.88 480 480 0 265.088-214.88 480-480 480-265.088 0-480-214.912-480-480C32 246.848 246.912 32 512 32z m82.08 173.568c-51.84 17.152-76.736 65.44-61.856 120.32l5.344 20.192c-11.2 2.432-22.208 5.696-32.928 9.824-50.656 19.52-90.848 62.816-104.896 113.024a153.696 153.696 0 0 0-5.088 55.04 137.92 137.92 0 0 0 57.536 100.576 121.504 121.504 0 0 0 103.264 17.6 120.96 120.96 0 0 0 63.68-42.56c24.736-32.288 32.096-74.752 20.8-119.52-4.16-16.32-9.344-34.368-14.4-51.904l-5.376-18.976c21.44 5.376 41.184 16.032 57.44 31.04 56 52.288 66.784 142.368 25.088 209.536-36.608 59.008-107.936 97.088-181.664 97.088a225.76 225.76 0 0 1-225.536-225.472c0-28.992 5.696-57.696 16.832-84.448a221.664 221.664 0 0 1 41.856-65.6 223.712 223.712 0 0 1 81.408-56.416A31.712 31.712 0 0 0 412.064 256a299.52 299.52 0 0 0-25.696 11.808 289.504 289.504 0 0 0-100 86.432 286.56 286.56 0 0 0-54.304 167.136c0 159.296 129.6 288.896 288.96 288.896 95.2 0 187.648-49.856 235.552-127.072 58.304-93.888 43.232-215.584-35.712-289.344-32.32-30.208-74.368-47.872-118.784-51.776-2.304-8.96-5.888-22.592-8.64-32.832-2.08-7.584-3.104-16.16-0.864-23.808a31.808 31.808 0 0 1 38.4-21.44c4.416 1.184 8.608 3.264 12.256 6.048 3.84 2.88 6.848 6.624 10.368 9.888a31.744 31.744 0 0 0 49.856-37.664l-0.64-1.056a65.312 65.312 0 0 0-14.4-16.448 100.48 100.48 0 0 0-53.376-23.392 96.128 96.128 0 0 0-40.96 4.224z m-40.224 201.92c3.36 12.416 7.04 25.344 10.752 38.176 4.928 17.28 9.888 34.432 13.824 49.92 4.576 18.176 6.624 44.192-9.664 65.472a57.056 57.056 0 0 1-30.24 19.936 58.464 58.464 0 0 1-50.144-8.544 73.92 73.92 0 0 1-30.528-53.952 89.6 89.6 0 0 1 2.944-32.416c8.8-31.36 34.304-58.528 66.624-71.008 8.672-3.36 17.536-5.856 26.432-7.584z" fill="#DD001B" p-id="2373"></path></svg>
        <a href="#">网易云音乐</a>
      </div>

      <div class="menu">
        
        <ul>
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.link">{{ item.title }}</a>
            
          </li>
          <li>
            <!-- <svg t="1685290362856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9048" width="30" height="20"><path d="M0 256h1024v512H0V256z m194.24 155.52V640h37.44V538.88h115.84V640h37.44V411.52H347.52v95.36H231.68V411.52h-37.44zM531.2 407.04c-35.2 0-62.72 11.2-82.56 34.24-19.2 21.76-28.48 49.92-28.48 84.8 0 34.56 9.28 62.72 28.48 84.48 19.84 22.4 47.36 33.92 82.56 33.92 34.88 0 62.4-11.2 82.56-33.6 19.2-21.44 28.8-49.6 28.8-84.8 0-35.2-9.6-63.68-28.8-85.12-20.16-22.72-47.68-33.92-82.56-33.92z m0 32.96c23.68 0 41.92 7.36 54.72 22.72 12.48 15.36 18.88 36.48 18.88 63.36 0 26.88-6.4 47.68-18.88 62.72-12.8 15.04-31.04 22.72-54.72 22.72s-42.24-8-55.04-23.68c-12.48-15.36-18.56-35.84-18.56-61.76 0-26.24 6.08-46.72 18.56-62.08 13.12-16 31.36-24 55.04-24z m128.96-28.48v32h74.88V640h37.44V443.52h74.88v-32h-187.2z" fill="#d81e06" p-id="9049" data-spm-anchor-id="a313x.7781069.0.i11" class=""></path></svg> -->

          </li>

        </ul>

      </div>
      <div class="search">
        <svg t="1685287797461" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4286" width="200" height="200"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="4287" fill="#bfbfbf"></path></svg>
        <input type="text" placeholder="音乐/视频/电台/用户" />
        </div>
        <div class="create">
            <a href="https://music.163.com/login?targetUrl=%2Fcreatorcenter">创作者中心</a>
            
        </div>
    <div class="login">

      <a href="#">登录</a>
    </div>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, title: '发现音乐', link: '#' },
          { id: 2, title: '我的音乐', link: '#' },
          { id: 3, title: '朋友', link: '#' },
          { id: 4, title: '商城', link: '#' },
          { id: 5, title: '音乐人', link: '#' },
          { id: 6, title: '下载客户端', link: '#' }
        ]
      }
    }
  }
  </script>
  
  <style>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #242424;
    color: #CCCCCC;
    height: 40px;
    margin: 0;
    

  }
  
  .logo svg {
    width: 43px;
    height: auto;
  }
  
  .menu ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    

  }
  
  .menu li {
    margin-right: 30px;
    
  }
  .menu li:hover{
    margin-right: 30px;
    background-color: #3a3a3a;

    
  }
  
  .menu a {
    color: #cccccc;
    text-decoration: none;
    font-size: 14px;
    font-family: Arial, sans-serif;

  }
  .menu svg {

    width: 30px;
    height: 30px;
    border-radius: 25px;
    margin-right: 5px;
    color: #bfbfbf;
    
  }
  .logo a {
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;




  }
  .logo{
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
    .login a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
    }
    .search {
  display: flex;
  align-items: center;
  width: 200px;
  height: 35px;
  background-color: #fff;
  border-radius: 15px;
  margin-left: 20px;
  padding-left: 10px;
  overflow: hidden;
}
    .search input {
  border: none;
  outline: none;
  width: 150px;
  height: 100%;
  background-color: #fff;
  font-size: 10px;
  margin-top: 5px;
}
    .search svg {
        width: 20px;
        height: 20px;
        margin-top: 7px;
        margin-left: 5px;
        color: #bfbfbf;
    }


    .create {
border: 1px solid #cccccc;
border-radius: 20px;
width: 100px;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
}

.create a {
background-color: transparent;
border: none;
color: #cccccc;
font-size: 10px;
text-decoration: none;

}
.create:hover{
border-color: #ffffff;
}
.create a:hover{
color: #ffffff;
}

    @media screen and (max-width: 768px) {
  /* 在宽度小于768px的屏幕上应用以下样式 */
  .nav {
    flex-direction: column;
    font-size: 14px;
  }
  .menu {
    margin-top: 20px;
    height: 60px;
  }
  .menu ul {
    flex-direction: column;
  }
  .menu li {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .search {
    margin-left: 0;
    margin-top: 10px;
  }


}

 
  </style>  