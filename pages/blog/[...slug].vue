<template>
    <ContentDoc path="/content">
      <template #not-found>
        <div class="bg-black text-white font-mono text-center">
          <h2>Yeah, uhmm, sorry but I did not found that document in this server</h2>
          <h3>Better luck next time uh?</h3>
          <br/>
          <nuxt-link to="/" class="text-blue-500 hover:text-blue-800">Let's go to home -> </nuxt-link>
          <br/>
          <br/>
        </div>
      </template>
      <template #empty>
        <div class="bg-black text-white font-mono text-center">
          <h2>Yeah, uhmm, how can I say it, ehmm that document is empty (wtf?)</h2>
          <h3>Better luck next time uh?</h3>
          <br/>
          <nuxt-link to="/" class="text-blue-500 hover:text-blue-800">Let's go to home -> </nuxt-link>
          <br/>
          <br/>
        </div>
      </template>
    </ContentDoc>
</template>

<script setup lang="ts">
</script>
