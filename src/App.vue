<template>
  <div class="wrap">
    <van-tabs v-model:active="active" animated class="menu-wrap">
      <van-tab title="首页" name=""></van-tab>
      <van-tab title="文章" name="article"></van-tab>
      <van-tab title="前端" name="front"></van-tab>
      <van-tab title="后端" name="admin"></van-tab>
      <van-tab title="关于" name="about"></van-tab>
    </van-tabs>
    <div class="container-wrap">
      <router-view />
    </div>
    <cus-footer></cus-footer>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Tabs, Tab } from 'vant';
import CusFooter from './components/CusFooter.vue'

export default {
  name: 'App',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    CusFooter,
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
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .menu-wrap {
    height: 44px;
  }
  
  .container-wrap {
    flex: 1;
  }
  .footer-wrap {
    height: 30px;
  }
}
</style>

