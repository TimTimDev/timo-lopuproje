<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<template>
<swiper
    :centeredSlides="true"
    :autoplay="{
      delay: 4500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="max-h-full bg-black">
      <img class="absolute z-[1]" src="https://www.paiste.com/image/5772?ver=1593433699" alt="pic1">
      <div class="relative flex-row flex items-end h-1/2 content-between w-4/5 justify-center z-[3]">
        <h1 class="text-shadow uppercase font-light text-5xl text-white leading-tight text-left w-1/2">Signature Precision Ride</h1>
        <a class="text-shadow uppercase border-2 rounded text-white p-2 hover:bg-white hover:text-black" href="">view details</a>
      </div>
     
    </swiper-slide>
    <swiper-slide class="max-h-full bg-black">
      <img class="absolute z-[1]" src="https://www.paiste.com/image/5780?ver=1593434178" alt="pic2">
      <div class="relative flex-row flex items-end h-1/2 content-between w-4/5 justify-center z-[3]">
        <h1 class="text-shadow uppercase font-light text-5xl text-white leading-tight text-left w-1/2">Signature Precision Heavy Hi-Hat</h1>
        <a class="text-shadow uppercase border-2 rounded text-white p-2 hover:bg-white hover:text-black" href="">view details</a>
      </div>
    </swiper-slide>
    <swiper-slide class="max-h-full bg-black">
      <img class="absolute z-[1]" src="https://www.paiste.com/image/5192?ver=1592836198" alt="pic3">
      <div class="relative flex-row flex items-end h-1/2 content-between w-4/5 justify-center z-[3]">
        <h1 class="text-shadow uppercase font-light text-5xl text-white leading-tight text-left w-1/2">PST X Swiss Thin Crash</h1>
        <a class="text-shadow uppercase border-2 rounded text-white p-2 hover:bg-white hover:text-black" href="">view details</a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: 'Dosis', sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.text-shadow {
  text-shadow: 2px 2px black;
}
</style>
