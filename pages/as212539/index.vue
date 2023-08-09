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
      <div class="shrink basis-2/3">
        <p> Middle </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
