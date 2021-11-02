<template>
  <div class="container">
    <div class="top">
      <div class="group" v-for="(i, index) in games" :key="index" :type="i.type" :color="i.color">
        <div class="tag">{{ i.tag }}</div>
        <a class="games" v-for="(j, index2) in i.content" :key="index2" :hotLevel='j.hotLevel'>{{ j.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: []
    }
  },
  created() {
    this.initGames()
  },
  methods: {
    async initGames() {
      const { data: res } = await this.$http.get('/data/games.json')
      this.games = res
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  .group {
    display: flex;
    justify-content: space-between;
    // width: 49%;
    margin: 3px 0;
    position: relative;
    &[type='half'] {
      width: 49%;
    }
    &[type='full'] {
      width: 100%;
    }
    &[color='true']::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 980px;
      height: 100%;
      z-index: -1;
      background-color: rgb(249, 255, 240);
    }

    .tag {
      background-color: rgb(238, 255, 217);
      border: 1px solid rgb(152, 224, 38);
      color: rgb(106, 170, 5);
      border-radius: 5px;
      font-size: 12px;
      padding: 2px;
    }
    a {
      font-size: 14px;
      cursor: pointer;
      &[hotLevel='1'] {
        color: rgb(251, 100, 0);
      }
      &[hotLevel='2'] {
        color: rgb(252, 100, 0);
        font-weight: 800;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
专辑热游推荐主题游戏最新游戏双人小游戏无敌版单人冰火人三人儿童填颜色儿歌故事小马宝莉海绵宝宝朵拉学习玩具托马斯
动作格斗乐高男生游戏三国功夫变形金刚火柴人西游记机器人射击穿越防线狙击手反恐精英大炮战斗机特种兵坦克枪战特警
益智连连看解谜拼图迷宫大富翁找茬塔防找东西麻将小火车休闲斗地主祖玛黄金矿工消消看吃豆豆泡泡龙直升机农场组装游戏
体育赛车卡丁车越野车自行车汽车停车篮球足球过山车台球冒险中文精选大鱼吃小鱼动漫游戏冒险岛忍者跑酷战士闯关3D游戏
女生
阿sue美图美人鱼公主古代换装做饭精灵化妆美甲婚纱美发餐厅蛋糕礼服布置宠物购物芭比制作明星养成宝贝打工挣钱
合辑
4399梦幻之城 全新宠物登场
4399弹弹堂 百变弹射，高手对决
4399天命神话 轮回百转，逆天改命
4399墨香情 独步仙穹，仙域美人
完美漂移百战沙城以太之光传奇霸主莽荒纪2奥奇传说天空之舞魔塔奇兵皮卡堂天命神话笑傲江湖
更多>>网页游戏玩个球三国快打弹弹堂生死狙击圣魔印Touch热舞美食大战老鼠火线精英奥雅之光小花仙奥拉星枪魂三国杀全民仙战墨香情
更多>>H5游戏
暗夜兵团幻灵修仙传热血三国无双遇见尊上幻刃录时空猎人战国美人暴走英雄坛小小首富超级精灵球怼怼三国斗罗大陆荒野日记
