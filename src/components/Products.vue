<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

    <div>
        <p class="text-2xl mb-8">GUITARS</p>
        <h1 class="text-5xl font-bold">EXPLORE THE DRUM RANGE</h1>
    </div>
    <div class="grid grid-cols-4 gap-8 p-12">
        <div v-for="(product, index) in products" :key="index" class="hover:bg-neutral-300 bg-neutral-200 hover:scale-105 duration-300 p-4 w-full h-96 rounded-xl flex flex-col justify-between">
            <img :src="product.source" alt="">
            <div>
                <h1 class="text-2xl">{{product.title}}</h1>
                <h1 class="text-2xl font-semibold">{{product.price}}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
    const products = [
        {
            id:1,
            title:"HI-HAT TALDRIK",
            price:"400$",
            source:"../src/assets/hat-1.png"
        },
        {
            id:2,
            title:"HI-HAT TALDRIK",
            price:"400$",
            source:"../src/assets/hat-2.png"
        },
        {
            id:3,
            title:"HI-HAT TALDRIK",
            price:"400$",
            source:"../src/assets/hat-3.png"
        },
        {
            id:4,
            title:"HI-HAT TALDRIK",
            price:"400$",
            source:"../src/assets/hat-3.png"
        }
    ]
</script>