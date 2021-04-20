<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <article-cell v-for="item in list" :key="item" :article="item"></article-cell>
  </van-list>
</template>

<script>
import { ref } from 'vue';
import { List, Cell } from 'vant';
import ArticleCell from '../components/ArticleCell.vue';

export default {
  name: 'Front',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    ArticleCell
  },
  setup() {
    let loading = ref(false);
    let finished = ref(false);
    let list = ref([]);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 13; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    }

    return {
      loading,
      finished,
      list,
      onLoad,
    }
  }
}
</script>

<style lang="less">
</style>
