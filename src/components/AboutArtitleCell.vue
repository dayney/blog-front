<template>
  <div class="about-article-cell">
    <div class="article-cell-img"><img src="../assets/images/logo.jpeg" alt="" /></div>
    <div class="article-cell-info">
      <div class="article-cell-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</div>
      <p class="article-cell-des">
        文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述文章简述
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutArtitleCell",
  setup() {},
};
</script>

<style lang="less">
.about-article-cell {
  width: 100%;
  padding: 15px;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  border-top: 1px #ddd solid;
  &:last-child {
    border-bottom: 1px #ddd solid;
  }

  .article-cell-img {
    @w: 60px;
    width: @w;
    height: @w;
    img {
      width: @w;
      height: @w;
    }
  }
  .article-cell-info {
    padding-left: 10px;

    .article-cell-title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; // 控制多行的行数
      -webkit-box-orient: vertical;
    }
    .article-cell-des {
      width: 100%;
      line-height: 15px;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; // 控制多行的行数
      -webkit-box-orient: vertical;
    }
  }
}
</style>
