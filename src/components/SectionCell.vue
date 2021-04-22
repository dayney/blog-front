<template>
   <section class="section-cell">
    <h3 class="main-title">{{item.moduleName}}<span @click="viewMore(alias)">查看更多<van-icon name="arrow" /></span></h3>
    <ul>
      <li v-for="cell in item.list" :key="cell.id">
        <div>
          <h4 class="second-title">{{cell.title}}</h4>
          <div class="instroduce">{{cell.instroduce}}</div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { Icon } from "vant";
export default {
  name: 'SectionCell',
  props: {
    item: Object,
    alias: String,
  },
  components: {
    [Icon.name]: Icon,
  },
  setup(prop, { emit }) {

    const viewMore = (moduleName) => {
      console.log("=====");
      console.log(moduleName);
      console.log("=====");
      emit('selectModuleName', moduleName);
    }
    console.log('enter SectionCell ...');

   


    return {
      viewMore,
    }
  }
}
</script>

<style lang="less">
.section-cell {
  margin-top: 15px;

  .main-title {
    @th: 36px;
    width: 100%;
    height: @th;
    line-height: @th;
    font-size: 16px;
    span {
      display: inline-block;
      float: right;
      font-size: 12px;
      color: #999;
      font-weight: 400;
    }
  }

  li {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .second-title {
    font-size: 16px;
    font-weight: 400;
    color: 666;
  }
  .instroduce {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; // 控制多行的行数
    -webkit-box-orient: vertical;
    font-size: 12px;
    color: 999;
  }
}  
</style>
