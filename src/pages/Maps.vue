<template>
  <div class="row flex-right">
    <input v-model="state.prefix" type="text" placeholder="地图名称" />
    <button class="btn" @click="searchMaps()">GAMEMAPS查询</button>
  </div>
  <div class="section">
    <h3>Result</h3>
    <div class="row">
      <ol>
        <li v-for="item in state.resultMaps" :key="item.url">
          {{ item.title }} <a href="" class="btn">下载</a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import http from './../utils/http'



const state = reactive({ prefix: "", resultMaps: [] })

const searchMaps = () => {
  http.post('/proxy', {
    url: 'https://www.gamemaps.com/search/searchlist',
    method: 'POST',
    contentType: 'application/x-www-form-urlencoded',
    data: {
      prefix: state.prefix,
    },
  }).then((res) => {
    const maps = [];
    const reg = new RegExp('<a href="(.*)">[\\s\\S]*?</a>', "g");
    res.data.match(reg).forEach(item => {
      /href="(.*)"/.exec(item);
      let url = RegExp.$1;
      /"title">(.*)<\/div>/.exec(item);
      let title = RegExp.$1;
      maps.push({ url, title });

    });
    state.resultMaps = maps;
  })
}

onMounted(() => {

})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
