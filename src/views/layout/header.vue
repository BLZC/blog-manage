<template>
  <div class="header">
    <el-row>
      <el-col :span="3"
              class="img-col">
        <el-tooltip class="item"
                    effect="dark"
                    :content="tipText"
                    placement="right">
          <img class="icon"
               :src="vicon"
               @click="changeSide" />
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    vicon () {
      return this.$store.state.home.icon;
    },
    tipText () {
      return this.$store.state.home.tipText;
    }
  },
  mounted () {

  },
  methods: {
    changeSide () {
      this.$store.commit('switchShow')
    }
  }
}
</script>
<style lang="scss" scope>
.header {
  .img-col {
    text-align: left;
    padding-left: 5px;
    .icon {
      height: 20px;
      width: 20px;
      text-align: left;
    }
  }
}
</style>