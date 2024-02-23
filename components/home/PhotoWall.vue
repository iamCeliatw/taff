<template lang='pug'>
.home__wrapper
  .home__container
    swiper(
      :space-between="65",
      :pagination="{ clickable: true }",
      :modules="modules",
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    )
      swiper-slide(v-for="(item, index) in slider_item", :key="index")
        img(:src="item.img", :alt="item.alt")
  .swiper-button-prev
  .swiper-button-next
</template>


<script  setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const modules = [Pagination, Navigation];
const slider_item = ref([
  { id: 1, img: "/slider_item.avif", alt: "photoWall" },
  { id: 2, img: "/slider_item2.avif", alt: "photoWall" },
  { id: 3, img: "/slider_item3.avif", alt: "photoWall" },
]);
</script>

<style lang='sass' scoped>
.home__wrapper
  position: relative
  width: 100%
  height: 100%
.swiper
  width: 100%
  height: calc(100% - 250px)
.swiper-slide
  img
    width: 100%
    height: 100%
    object-fit: cover
.swiper-button-next,
.swiper-button-prev
  top: 50%
  width: 10px
  color: #000
</style>
