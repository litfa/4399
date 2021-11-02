<template>
  <div>
    <topBar></topBar>
    <logoBar></logoBar>
    <gameTypeBar></gameTypeBar>
    <gameTypeBox></gameTypeBox>
    <gameContainer title="最新好玩小游戏列表"></gameContainer>
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
  }
}
</script>

<style>
</style>
