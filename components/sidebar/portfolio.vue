<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "portfolio"
})
</script>

<template>
  <div class="text-center justify-center">
    <table>
      <tr>
        <td class="text-green-400">
          -------
        </td>
      </tr>
      <tr class="h-20">
        <td>
          <nuxt-link to="/" class="text-blue-500 hover:text-blue-800">Index</nuxt-link>
        </td>
      </tr>
      <tr>
        <td class="text-green-400">
          -------
        </td>
      </tr>
      <tr class="h-20">
        <td>
          <nuxt-link to="/contacts" class="text-blue-500 hover:text-blue-800">Contacts</nuxt-link>
        </td>
      </tr>
      <tr>
        <td class="text-green-400">
          -------
        </td>
      </tr>
      <tr class="h-20">
        <td>
          <nuxt-link to="/tech" class="text-blue-500 hover:text-blue-800">Tech Stack</nuxt-link>
        </td>
      </tr>
      <tr>
        <td class="text-green-400">
          -------
        </td>
      </tr>
      <tr class="h-20">
        <td>
          <nuxt-link to="/links" class="text-blue-500 hover:text-blue-800">Cool Links!</nuxt-link>
        </td>
      </tr>
      <tr>
        <td class="text-green-400">
          -------
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>
