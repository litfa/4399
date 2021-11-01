<template>
  <div>
    <topBar></topBar>
    <logoBar></logoBar>
    <gameTypeBar></gameTypeBar>
    <gameTypeBox></gameTypeBox>
  </div>
</template>

<script>
import topBar from '@/components/topBar.vue'
import logoBar from '@/components/logoBar.vue'
import gameTypeBar from '@/components/gameTypeBar.vue'
import gameTypeBox from '@/components/gameTypeBox.vue'
export default {
  components: {
    topBar,
    logoBar,
    gameTypeBar,
    gameTypeBox
  }
}
</script>

<style>
</style>
