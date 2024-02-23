<template lang='pug'>
.header__wrapper
  .toolbar__container
    .toolbar__items
      .toolbar__item
        a(href="/user")
          img(src="~/assets/images/common/user.svg", alt="user")
      //- .toolbar__item
      //-   a(href="/search")
      //-     img(src="~/assets/images/common/search.svg", alt="search")
  .header__container
    .header__logo
      img(src="~/assets/images/common/logo.jpg", alt="logo")
</template>

<script lang='ts' setup>
</script>

<style lang='sass' scoped>
.header__wrapper
  width: 100%
  height: 150px
  // background: #f0f0f0

.header__container
  width: 1280px
  height: calc(100% - 50px)
  margin: 0 auto
  display: flex
  // border: 1px solid #000
  @include breakpoint(xl)
    width: 80%
.toolbar__container
  width: 1280px
  height: 50px
  margin: 0 auto
  @include breakpoint(xl)
    width: 80%

.toolbar__items
  display: flex
  justify-content: flex-end
  gap: 20px
  width: 100%
  padding: 10px 0 10px 10px
  img
    width: 30px
    height: 30px
    object-fit: cover
    display: block
.header__logo
  margin: 0 auto
  border-radius: 50%
  overflow: hidden
  img
    scale: 1.6
    border-radius: 50%
    width: 100%
    height: 100%
    object-fit: cover
</style>