<script lang="ts" setup>

</script>

<template>
  <div class="text-center">
    <p> Fra's Tech Stack </p>
    <div class="flex flex-row flex-nowrap justify-center">
      <div class="px-64 basis-1/3">
        <SidebarPortfolio/>
      </div>
      <div class="basis-2/3 self-center">
        <div>
          <h1 class="text-purple-400 text-center">Programming Languages:</h1>
          <p class="px-2">• Java: Version 8, 11 and 17 | Mostly Web (JSP, Servlets) and CLI</p>
          <p class="px-2">• Python: Version 3 | Web, CLI and Microservices</p>
          <p class="px-2">• C#: Version 9 | CLI and Microservices</p>
          <p class="px-2">• Kotlin | Web (Backend), CLI and Microservices </p>
          <p class="px-2">• Typescript / Javascript | Web (Frontend and Backend)</p>
          <p class="px-2">• NuxtJS | Web (Frontend and Backend)</p>
        </div>
        <br/>
        <div>
          <h1 class="text-purple-400 text-center">Hardware that I've used:</h1>
          <p class="px-2">• Mikrotik / Cisco / Ubiquiti | Router, Switches and APs</p>
          <p class="px-2">• Lidars and small sensors | Integrated with RabbitMQ and Python</p>
        </div>
        <br/>
        <div>
          <h1 class="text-purple-400 text-center">Various stuff that I know:</h1>
          <p class="px-2">• Proxmox, ESXi | For lovely VMs and LXC Containers</p>
          <p class="px-2">• Dynamic Routing Protocols | BGP, RIP and OSPF </p>
          <p class="px-2">• Caddy | For L4 and HTTP Reverse Proxy and generic web server stuff</p>
          <p class="px-2">• Docker, K8s</p>
          <p class="px-2">• RabbitMQ, MQTT</p>
          <p class="px-2">• Git</p>
        </div>
      </div>
    </div>
  </div>
</template>
