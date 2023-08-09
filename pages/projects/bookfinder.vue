<script lang="ts" setup>

</script>

<template>
  <div class="text-center">
    <p> Bookfinder (2.0?) </p>
    <div class="flex flex-row flex-nowrap justify-center">
      <div class="px-64 basis-1/3">
        <SidebarProjects/>
      </div>
      <div class="basis-1/2 self-center">
        <div class="justify-center text-center">
          <h1 class="text-purple-400"> Bookfinder </h1>
          <br/>
          <p> Bookfinder is a project that I started in 2019, when I was still in high school. </p>
          <p> It is a web app written in kotlin that deals with the exchange of school books among multiple high schools
            in the province of trento. This web app uses MongoDB as its database and leverages the OAuth 2 protocol to
            provide a very simple and intuitive method of login.</p>
          <br/>
          <p>Alas, I was never able to fully publish the application but the code is public and everyone can <a
              class="text-purple-400" href="https://github.com/Spoilers-TN/Bookfinder"> Contribute </a> to it!</p>
          <br/>
          <p>Ps: Me and my friends are still working on it, so stay tuned! </p>
        </div>
      </div>
    </div>
  </div>
</template>
