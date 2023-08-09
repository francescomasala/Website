<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "index"
})
</script>

<template>
  <div class="text-center">
    <p> AS212539 - Francesco Masala </p>
    <div class="flex flex-row flex-nowrap justify-center">
      <div class="px-64 basis-1/3">
        <SidebarAs/>
      </div>
      <div class="basis-1/2 self-center">
        <div class="justify-center text-center">
          <p> So, AS212539 is a small Autonomous System registered in the RIPE NCC database that I use to study and test BGP and other networking stuff. </p>
          <p> I have a few peers, some of them are listed in the <nuxt-link class="text-purple-400" href="/as212539/peering">Peering</nuxt-link> page, other than that AS212539 is not used for any production purpose. </p>
          <p> If you are curious you can check my upstreams on the <nuxt-link class="text-purple-400" href="/as212539/upstreams">Upstreams</nuxt-link> page, and the subnets that I use on the <nuxt-link class="text-purple-400" href="/as212539/subnets">Subnets</nuxt-link> page. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
