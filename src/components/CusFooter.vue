<template>
  <div class="footer-wrap">
    <p>Copyright © 2021 <router-link to="/about">蓝色天齐的独立博客</router-link></p>
    <p><a href="https://beian.miit.gov.cn/" rel="noopener" target="_blank" class="click">鄂ICP备2002415号-1</a></p>

  </div>
</template>

<script>
export default {
  name: 'CusFooter'
}
</script>

<style lang="less">
.footer-wrap {
  @c: #646566;
  display: block;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: @c;
  
  p {
    @h: 20px;
    height: @h;
    line-height: @h;
  }

  a {
    color: @c;
  }
}  
</style>