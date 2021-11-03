<template>
  <div>
    <topBar></topBar>
    <logoBar></logoBar>
    <gameTypeBar></gameTypeBar>
    <gameTypeBox></gameTypeBox>
    <gameContainer v-for="i in gameList" :key="i.title" :title="i.title" :url="i.href" :games="i.content"></gameContainer>
  </div>
</template>

<script>
import topBar from '@/components/topBar.vue'
import logoBar from '@/components/logoBar.vue'
import gameTypeBar from '@/components/gameTypeBar.vue'
import gameTypeBox from '@/components/gameTypeBox.vue'
import gameContainer from '@/components/gameContainer.vue'
export default {
  components: {
    topBar,
    logoBar,
    gameTypeBar,
    gameTypeBox,
    gameContainer
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
      const { data: res } = await this.$http.get('/data/gameList.json')
      this.gameList = res
    }
  }
}
</script>

<style>
</style>
