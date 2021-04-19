<template>
  <div class="wrap">
    <van-tabs v-model:active="active" animated>
      <van-tab title="首页" name=""></van-tab>
      <van-tab title="文章" name="article"></van-tab>
      <van-tab title="前端" name="front"></van-tab>
      <van-tab title="后端" name="admin"></van-tab>
      <van-tab title="关于" name="about"></van-tab>
    </van-tabs>
    <router-view />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from 'vue-router'
import { Tabs, Tab } from 'vant';

export default {
  name: 'App',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
  },
  setup() {
    let router = new useRouter();
    let active = ref("");

    watch(active, (active, prevActive) => {
      router.push({
        path: active || "/",
      });
    });
   
    router.beforeEach((to, from, next) => {
      active.value = to.path.split('/')[1];
      next();
    });

    return {
      active,
    }
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.wrap {
  padding: 8px;
}
</style>

