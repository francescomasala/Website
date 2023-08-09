<script lang="ts" setup>

</script>

<template>
  <div class="text-center">
    <p> Bottles! </p>
    <div class="flex flex-row flex-nowrap justify-center">
      <div class="px-64 basis-1/3">
        <SidebarProjects/>
      </div>
      <div class="basis-1/2 self-center">
        <div class="justify-center text-center">
          <h1 class="text-purple-400"> Bottles </h1>
          <br/>
          <p> Bottles is a Linux application that allows you to easily run Windows programs on Linux. </p>
          <p> It's a new way of using Wine, the Windows emulator, that doesn't require any configuration. </p>
          <p> It's based on the Flatpak technology, so it's easy to install and it's sandboxed. </p>
          <p> My purpose within the project is to manage the entire IT infrastructure, from the mirrors scattered around
            the world (Canada, Japan, Italy, Europe, and many others) to creating a software that is responsible for
            making the redirect to the nearest mirror in less than 5 milliseconds. </p>
          <p> I also take care of the website and the forum :p </p>
          <br/>
          <p> If you are interested in the project, you can find more information on the <a class="text-purple-400"
                                                                                            href="https://usebottles.com">official
            website</a> or on the <a class="text-purple-400" href="https://github.com/bottlesdevs">GitHub
            organization</a>. </p>
        </div>
      </div>
    </div>
  </div>
</template>
