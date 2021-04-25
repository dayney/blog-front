<template>
  <div class="article-detail">
    <div class="title"><h3>此处是文章的title</h3></div>
    <div class="article-info">
      <span>2021-04-31</span>
      <span class="author">krui</span>
      <span>阅读&nbsp;120&nbsp;</span>
    </div>
    <van-divider :style="{ borderColor: '#000' }"/>
    <div class="article-content">
      这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,这里是文章的主体,
    </div>
    
    <van-divider :style="{ borderColor: '#000' }"/>

    <div class="tag-wrap">
      <div class="tag-des">标签:</div>
      <div class="tag-list">
        <van-tag>标签</van-tag>
        <van-tag>标签</van-tag>
        <van-tag>标签</van-tag>
        <van-tag>标签</van-tag>
        <van-tag>标签</van-tag>
      </div>
    </div>
     
    <div class="pagination-group">
      <van-button round type="primary" size="small">上一页</van-button>
      <van-button round type="primary" size="small">下一页</van-button>
    </div>
    
    <div class="about-artitle-cell">
      <div class="about-artitle-cell-title">相关文章</div>
      <about-artitle-cell v-for="i in 3" :key="i"></about-artitle-cell>
    </div>
  </div>
  
</template>

<script>
import { Divider, Icon, Tag, Button, List, Cell, } from "vant";
import AboutArtitleCell from "../components/AboutArtitleCell.vue";


export default {
  name: 'articleDetail',
  components: {
    [Divider.name]: Divider,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [List.name]: List,
    [Cell.name]: Cell,
    AboutArtitleCell
  },
  setup() {
    console.log('进入文章详情页面');
  }
}
</script>

<style lang="less">
.article-detail {
  padding: 15px;
  .title {
    @h: 32px;
    width: 100%;
    height: @h;
    line-height: @h;

    h3 {
      @h: 32px;
      width: 100%;
      height: @h;
      line-height: @h;
      font-size: 16px;
      text-align: center;
    }
  }
  .article-info {
    width: 100%;
    display: flex;
    font-size: 14px;

    .author {
      padding: 0 10px;
    }
  }

  .article-content {
    margin: 10px 0;
    font-size: 12px;
  }

  .tag-wrap {
    line-height: 14px;
    .tag-des {
      display: inline-block;
      font-size: 12px;
      margin-right:4px;
    }

    .tag-list {
      display: inline-block;
      .van-tag {
        color: #000;
        &.van-tag--default {
          background-color: #fff;
        }
      }
    } 
  }

  .pagination-group {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .van-button {
      width: 46%;
    }
  }
  
  .about-artitle-cell {
    width: 100%;

    .about-artitle-cell-title {
      @h: 24px;
      height: @h;
      line-height: @h;
      color: #999;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
}  
</style>