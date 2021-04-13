<template>
  <div class="paper container">
    <div class="row flex-center">
      <div class="text-center">
        <h2>l4d2 Tools</h2>
      </div>
    </div>
    <div class="row flex-center">
      <router-link class="paper-btn margin" to="/maps">地图下载</router-link>
      <router-link class="paper-btn margin" to="/mods">RCON命令</router-link>
      <router-link class="paper-btn margin" to="/settings">设置</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>

</style>