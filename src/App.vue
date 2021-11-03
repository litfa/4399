<template>
  <div>
    <topBar></topBar>
    <logoBar></logoBar>
    <gameTypeBar></gameTypeBar>
    <gameTypeBox></gameTypeBox>
    <div class="gameContainer">
      <div class="left">
        <gameContainer class="gameLeft" v-for="i in gameList.left" :key="i.title" :title="i.title" :url="i.href" :games="i.content"></gameContainer>
      </div>
      <div class="right">
        <gameContainer class="gameRight" v-for="i in gameList.right" :key="i.title" :title="i.title" :url="i.href" :games="i.content"></gameContainer>
      </div>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import topBar from '@/components/topBar.vue'
import logoBar from '@/components/logoBar.vue'
import gameTypeBar from '@/components/gameTypeBar.vue'
import gameTypeBox from '@/components/gameTypeBox.vue'
import gameContainer from '@/components/gameContainer.vue'
import bottomBar from '@/components/bottomBar.vue'
export default {
  components: {
    topBar,
    logoBar,
    gameTypeBar,
    gameTypeBox,
    gameContainer,
    bottomBar
  },
  data() {
    return {
      gameList: []
    }
  },
  created() {
    this.initGameList()
  },
  methods: {
    async initGameList() {
      const { data: res } = await this.$http.get('./data/gameList.json')
      this.gameList = res
    }
  }
}
</script>

<style lang="less" scoped>
.gameContainer {
  width: 980px;
  display: flex;
  // justify-content: space-between;
  .left,
  .gameLeft {
    width: 690px;
    margin-right: 10px;
    margin: 0 10px 13px 0;
  }
  .right,
  .gameRight {
    width: 285px;
    margin: 0 0 16px 0;
  }
}
</style>
