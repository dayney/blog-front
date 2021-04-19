<template>
  <div class="footer-wrap">
    Copyright © 2021 <router-link to="/about">蓝色天齐</router-link>
  </div>
</template>

<script>
export default {
  name: 'CusFooter'
}
</script>

<style lang="less">
.footer-wrap {
  @h: 30px;
  @c: #646566;
  margin-top: 20px;
  width: 100%;
  height: @h;
  line-height: @h;
  text-align: center;
  font-size: 12px;
  color: @c;

  a {
    color: @c;
  }
}  
</style>