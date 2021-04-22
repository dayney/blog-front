<template>
  <div @click="goArticleDetail" class="article-cell">
      <div class="title">这里是文章的标题这里是文章的标题这里是文章的标题这里是文章的标题这里是文章的标题这里是文章的标题</div>
      <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="文章的小细节" class="article-img"/>
      <div class="instroduce">这里是描述，这里是描述，这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述，这里是描述，这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述</div>
      <div class="footer">
        <ul class="tag-list">
          <li>#Chrome</li>
          <li>#inspect</li>
          <li>#node</li>
        </ul>

        <span><em>1230</em>&nbsp;&nbsp;|&nbsp;&nbsp;<em>2020-02-04</em></span>
      </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'ArticleCell',
  props: ['article'],
  setup() {
    const router = new useRouter();
    const goArticleDetail = () => {
      console.log('enter goArticleDetail ...');
      router.push({
        path: 'articleDetail',
        query: {
          id: 111,
        }
      })
    };


    


    return {
      goArticleDetail,
    }
  }
}
</script>

<style lang="less">
.article-cell {
  padding: 15px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
  
  .mb-6 {
    margin-bottom: 6px;
  }

  .title {
    @h: 24px;
    width: 100%;
    font-size: 16px;
    line-height: @h;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; // 控制多行的行数
    -webkit-box-orient: vertical;
    .mb-6;
  }
  .article-img {
    width: 100%;
    height: ~"calc((100vw - 16px) * 0.618)";
    .mb-6;
  }
  .instroduce {
    width: 100%;
    font-size: 12px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // 控制多行的行数
    -webkit-box-orient: vertical;
    .mb-6;
  }
  .footer {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #999;
    .tag-list {
      display: inline-block;
      list-style: none;
      flex: 1;
      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
    span {
      em {
        font-style: normal;
      }
    }
  }
}  
</style>