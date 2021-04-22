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
    <div v-show="isShowBackTop" class="go-top"><van-icon name="back-top" size="40"/></div>
  </div>
</template>

<script>
import { ref, watch, onMounted, nextTick, } from 'vue';
import { useRouter } from 'vue-router'
import { Tabs, Tab, Icon } from 'vant';
import CusFooter from './components/CusFooter.vue';
import { getUrlRelativePath } from './utils/helps';

export default {
  name: 'App',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Icon.name]: Icon,
    CusFooter,
  },
  setup() {
    let router = new useRouter();
    let active = ref("");
    let isShowBackTop = ref(false);

    watch(active, (active, prevActive) => {
      router.push({
        path: active || "/",
      });
    });
    
    let currrentUrl = getUrlRelativePath();    
    // '' -- 首页   front--前端  admin--后端 about--关于
    if(['', 'front', 'admin', 'about'].includes(currrentUrl)) {
      active.value = currrentUrl;
    }
    
    const isShowBackTopHandle = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      // 当滑动的距离草果1/3屏幕的高度就隐藏
      if(scrollTop > (window.outerHeight / 3)) {
        isShowBackTop.value = true;
      } else {
        isShowBackTop.value = false;
      }
    }

    onMounted(() => {
      nextTick(() => {
        window.addEventListener('scroll', isShowBackTopHandle, true);
      });
    })

    return {
      active,
      isShowBackTop,
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
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .menu-wrap {
    height: 44px;
    .van-tab__text {
      font-size: 18px;
    }
  }
  
  .container-wrap {
    flex: 1;
  }
  .footer-wrap {
    height: 60px;  // 此处是布局，修改需要主要components/CusFooters中的样式
  }

  .go-top {
    @w: 40px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: @w;
    height: @w;
    background-color: rgba(223, 223, 223, 0.6);
  }
}
</style>

