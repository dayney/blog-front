<template>
  <van-swipe :autoplay="3000" lazy-render class="swipe-wrap">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
  <section-cell v-for="(item, name) in sectionList" :key="name" :item="item" :alias="name" @selectModuleName="selectModuleName"></section-cell>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router'
import { Swipe, SwipeItem } from "vant";
import SectionCell from "../components/SectionCell.vue";

export default {
  name: 'Index',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    SectionCell
  },
  setup() {
    let router = new useRouter();
    let images = ref([
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ]);

    let sectionList = reactive({
      article: {
        moduleName: "文章",
        list: [
          {
            id: 0,
            title: "文章标题1",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          },
          {
            id: 1,
            title: "文章标题2",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          },
          {
            id: 2,
            title: "文章标题3",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          }
        ]
      },
      front: {
        moduleName: "前端",
        list: [
          {
            id: 100,
            title: "前端1",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          },
          {
            id: 101,
            title: "前端2",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          },
          {
            id: 102,
            title: "前端3",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          }
        ]
      },
      admin: {
        moduleName: "后端",
        list: [
          {
            id: 1000,
            title: "前端1",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          },
          {
            id: 1001,
            title: "前端2",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          },
          {
            id: 1002,
            title: "前端3",
            instroduce: "文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介"
          }
        ]
      },
    });
    
    // 修改当前选中的表单
    

    const selectModuleName = (moduleName) => {
      router.push({
        path: moduleName,
      })
    }

    return {
      images,
      sectionList,
      selectModuleName,
    }
  }
}
</script>

<style lang="less">
.swipe-wrap {
  margin-top: 10px;
  width: 100%;
  height: ~"calc((100vw - 16px) * 2 / 3)";
  img {
    width: 100%;
    height: 100%;
  }
}

</style>
