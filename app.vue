<template>
  <div>
    <div id="console">
      <nuxt-page/>
    </div>
  </div>
</template>

<style>
:root {
  background-color: #000 !important;
}

body {
  background-color: #000
}

#console {
  font-family: courier, monospace;
  color: #fff;
  width: 750px;
  font-size: 14px;
}

a {
  color: #0bc;
  text-decoration: none;
}

@keyframes change {
  0% {
    color: #0f0;
  }
  50% {
    color: #0f0;
  }
  99% {
    color: black;
  }
}
</style>
