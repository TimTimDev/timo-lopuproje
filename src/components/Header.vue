<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

  <header class="h-48 font-['Dosis'] font-semibold bg-[#]">
    <div class="h-16 border-b-2 border-black flex justify-between">
      <div class="h-16 w-32 translate-y-1/2 flex justify-center items-center text-center ml-6 bg-white">
        <img src="../assets/logo.png" class="w-1/2" alt="logo">
      </div>
      <div class="h-full w-fit flex justify-center items-center gap-5 text-lg">
        <a href="" class="hover:text- h-16 items-center flex px-4 duration-500">LINK</a>
        <a href="" class="hover:text- h-16 items-center flex px-4 duration-500">LINK & WHATEVER</a>
      </div>
    </div>
    <div class="h-32 text-2xl grid grid-cols-12">
      <div class="col-span-1">

      </div>
      <div class="w-full flex justify-center items-center col-span-10 gap-10">
        <a href="" class="hover:bg-black hover:text-white p-4 duration-500">DRUMS</a>
        <a href="" class="hover:bg-black hover:text-white p-4 duration-500">WHATEVER</a>
        <a href="" class="hover:bg-black hover:text-white p-4 duration-500">WHATEVER X2</a>
      </div>
      <div class="flex items-center col-span-1 justify-center">
        <a href="" class="hover:bg-black hover:text-white p-4 duration-500"><ShoppingCartIcon class="w-8" /></a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/outline'
</script>