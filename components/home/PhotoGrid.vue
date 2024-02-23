<template lang='pug'>
.photogrid__wrapper
  .photogrid__container
    .grid_container
      .grid_img
        img(src="/grid-1.avif", alt="grid-1")
    .grid_2
      .grid_img
        img(src="/grid-2.avif", alt="grid-2")
    .grid_3
      .grid_img
        img(src="/grid-3.avif", alt="grid-3")
    .grid_4
      .grid_img
        img(src="/grid-4.avif", alt="grid-4")
    .grid_5
      .grid_img
        img(src="/grid-5.avif", alt="grid-5")
</template> 

<script lang='ts' setup>
</script>

<style lang='sass' scoped>
.photogrid__wrapper
  width: 1280px
  margin: 0 auto
  padding: 60px
.photogrid__container
  width: 100%
  display: grid
  grid-template-columns: 1fr 20px 1fr 20px 1fr
  grid-template-rows: 6fr 15px 3fr
.grid_1
  grid-area: 1 / 1
.grid_2
  grid-area: 3 / 1
.grid_3
  grid-area: 1 / 3 / span 3 / span 1
.grid_4
  grid-area: 1 / 5
.grid_5
  grid-area: 3 / 5
.grid_img
  img
    width: 100%
    height: 100%
    object-fit: cover
    display: block
</style>