<template>
  <div class="test-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <svg-icon icon-class="heat_map" />
            <span>交流学习群(愿者上钩)</span>
          </div>
          <img src="@/assets/ewm.png" />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card
          shadow="never"
          style="
            height: 335px;
            line-height: 30px;
            font-weight: bold;
            overflow-y: scroll;
          "
        >
          在这里你能学到更多的知识,包括eslint自动的修复而不是手动--fix(千万不要去掉规范,规范是每个人必备的技能),
          包括组件的快速搭建与入手,你的所有问题都会第一时间得到解答,你同时还可以获得一手的学习资料,不要去相信网上好几年前的教程,对技术没有任何的提升,
          这里有更多的注册码与激活工具,保证你的开发坏境实时保持最新,当然一切都是你的自愿原则,你来或者不来,我都会在那里,开源还是会继续,你还是可以享受到最新的开源代码,
          你相信吗?未来要和你共度一生的那个人,其实在与你相同的时间里,也忍受着同样的孤独,那个人一定也怀着满心的期待,拥着一腔孤勇,穿过茫茫人海,也要来与你相见.
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-tree-node__content {
    height: 46px;
  }

  .el-select {
    margin-left: 10px;
  }
}
</style>
