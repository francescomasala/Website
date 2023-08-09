<template>
    <footer class="bg-black text-white font-mono">
        <p class="text-center text-green-400">
            -----------
        </p>
      <br/>
      <div class="flex flex-row flex-nowrap ">
        <div class="text-center basis-1/3 text-green-500">
          <p> Copyright 2019 - {{ new Date().getFullYear() }} </p>
          <p> Francesco Masala - All Rights Reserved</p>
        </div>
        <div class="basis-1/3">
          <div class="text-center text-green-400">
            <p>Hosted By <a class="text-teal-400" href="https://hyperbit.it"> HyperBit SRLs</a></p>
          </div>
        </div>
        <div class="basis-1/3">
          <nuxt-link to="/" class="px-6 text-teal-400 hover:text-teal-600">Github</nuxt-link>
          <nuxt-link to="/projects" class="text-teal-400 hover:text-teal-600">Linkedin</nuxt-link>
          <nuxt-link to="/as212539" class="px-6 text-teal-400 hover:text-teal-600">Telegram</nuxt-link>
          <nuxt-link to="/blog" class="text-teal-400 hover:text-teal-600">Email</nuxt-link>
        </div>
      </div>
    </footer>
</template>
<script setup lang="ts">
</script>
