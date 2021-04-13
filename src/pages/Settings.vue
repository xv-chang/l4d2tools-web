<template>
  <div class="section">
    <div class="form-group">
      <label>游戏路径</label>
      <input type="text" placeholder="GAME PATH" />
    </div>
    <div class="form-group">
      <label>访问密码</label>
      <input type="text" placeholder="VISIT PASSWORD" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>