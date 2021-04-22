<template>
  <div class="about">
    <div class="logo">
      <img src="../assets/images/logo.jpeg" alt="logo" />
    </div>
    <div class="author">
      <p>Krui, 野生程序猿，喜爱和web开发相关的各种技术</p>
      <p>目前在学习研究javascript, VUE3.0, TypeScript等web相关技术</p>
      <p>希望通过这个博客认识更多的朋友</p>
      <p>Email: <a href="mailto:krui0728@gmail.com">krui0728@gmail.com</a></p>
      <p>Github: <a href="https://github.com/dayney">github.com/dayney</a></p>

      <p>由于水平有限，博客中难免有漏洞和错误，欢迎指正。</p>
      <p>博客内容非注明即为本人原创，欢迎转载，同时请注明来源并加上原文链接。</p>

      <p>如需交换链接，请直接留言并加上本站链接，我会及时给与回复。</p>
      <p>链接要求：</p>
      <p>计算机/互联网相关主题，系统运维，程序开发，网站优化与推广等</p>
      <p>内容原创度高，能为用户提供有价值信息，不接受内容聚合平台，自动生成内容等网站友链</p>
      <p>网站运行稳定，没有到博彩等不良网站的链接</p>
      <p>全站链接，对PR值没有要求</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  setup() {
    
  }
}
</script>

<style lang="less">
.about {
  padding: 10px;
  font-size: 14px;
  
  .logo {
    @w: 160px;
    width: @w;
    height: @w;
    margin: 0 auto;

    img {
      width: @w;
      height: @w;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .author {
    margin-top: 10px;
    p {
      margin-bottom: 10px;
    }
  }
}
</style>