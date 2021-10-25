<template>
  <div class="container">
    <div class="left">
      <span>收藏4399 </span>|
      <span>保存到桌面</span>|
      <div class="search">
        <form action="http:////so2.4399.com/search/search.php" method="post">
          <input type="text" name="k">
          <button>搜索</button>
        </form>
      </div>
    </div>
    <div class="right">
      <div class="user">
        <img src="./../assets/middle.png" alt="">
        用户名
      </div>
      <div class="woWanGuoDe">我玩过的</div>
      <div class="guessYouLike">猜你喜欢</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  color: #bbb;
  font-size: 14px;
  display: flex;
  .left {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .search {
      form {
        input {
          border: 1px #bbb solid;
          height: 29px;
          float: left;
        }
        button {
          height: 31px;
          border-radius: 0px 5px 5px 0px;
          border: none;
          background-color: rgb(16, 192, 0);
          padding: 0 15px;
          color: #fff;
        }
      }
    }
  }
  .right {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      // font-size: 16px;
      font-weight: 600;
      img {
        width: 36px;
        margin-right: 10px;
      }
    }
    .guessYouLike {
      color: rgb(255, 123, 0);
    }
  }
}
</style>
