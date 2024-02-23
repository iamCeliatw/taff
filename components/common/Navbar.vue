<template lang='pug'>
.navbar__wrapper
  .navbar__container
    a
      span 全部商品
    a
      span 期間限定
    a
      span 美味蛋糕
    a
      span 關於我們
</template>

<script lang='ts' setup>
</script>

<style lang='sass' scoped>
.navbar__wrapper
  width: 1280px
  height: 80px
  display: flex
  justify-content: center
  align-items: center
  margin: auto
  @include breakpoint(xl)
    width: 80%
.navbar__container
  display: flex
  justify-content: space-between
  gap: 20px
  a
    padding: 10px
    span
      color: #a3a3a3
      font-size: 18px
</style>