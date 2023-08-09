<template>
    <header class="bg-black text-white font-mono justify-center">
      <br/>
        <div class="flex flex-row flex-nowrap ">
            <div class="text-center basis-1/3 text-green-500">
                <p> /home/fmasala/website{{ $route.path }} </p>
            </div>
            <div class="basis-1/3">

            </div>
            <div class=" basis-1/3">
              <nuxt-link to="/" class="px-6 text-teal-400 hover:text-teal-600">Home</nuxt-link>
              <nuxt-link to="/projects" class="text-teal-400 hover:text-teal-600">Projects</nuxt-link>
              <nuxt-link to="/as212539" class="px-6 text-teal-400 hover:text-teal-600">AS212539</nuxt-link>
              <nuxt-link to="/blog" class="text-teal-400 hover:text-teal-600">Blog</nuxt-link>
            </div>
          </div>
      <p class="text-center text-green-400">
        -----------
      </p>
      <br/>
    </header>
</template>
<script setup lang="ts">
</script>
