<template>
  <div class="datav" @keyup.esc.native="miniScreen">
    <dv-full-screen-container :class="dvClass">
      <dv-border-box-1>
        <dv-decoration-11 class="title">苏州农商行大屏</dv-decoration-11>
        <!-- <dv-decoration-5 class="titleLine" />" -->
        <!-- <dv-loading>Loading...</dv-loading> -->
        <div class="content">
          <!-- <dv-border-box-8 class="outterContent">
            <dv-decoration-9 class="innerContent">66%</dv-decoration-9>
          </dv-border-box-8> -->
          <dv-border-box-13 class="outterPond">
            <span>内存使用率</span>
            <dv-water-level-pond class="innerPond" :config="config1" />
          </dv-border-box-13>
          <dv-border-box-13 class="outterCpu">
            <span>cpu使用率</span>
            <dv-water-level-pond class="innerCpu" :config="config1" />
          </dv-border-box-13>
          <dv-border-box-8 class="outterBoard">
            <span>租户排行</span>
            <dv-scroll-board :config="config4" class="innerBoard" />
          </dv-border-box-8>
          <dv-flyline-chart :config="config2" class="innerChart" />
          <!-- <dv-active-ring-chart :config="config3" class="innerRing"/> -->
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dvClass: 'fullClass',
      config1: {
        data: [55],
        shape: 'round'
      },
      config2: {
        centerPoint: [0.48, 0.35],
        points: [
          {
            position: [0.52, 0.235],
            text: '新乡'
          },
          {
            position: [0.43, 0.29],
            text: '焦作'
          },
          {
            position: [0.59, 0.35],
            text: '开封'
          },
          {
            position: [0.53, 0.47],
            text: '许昌'
          },
          {
            position: [0.45, 0.54],
            text: '平顶山'
          },
          {
            position: [0.36, 0.38],
            text: '洛阳'
          },
          {
            position: [0.62, 0.55],
            text: '周口'
          },
          {
            position: [0.56, 0.56],
            text: '漯河'
          },
          {
            position: [0.37, 0.66],
            text: '南阳'
          },
          {
            position: [0.55, 0.81],
            text: '信阳'
          },
          {
            position: [0.55, 0.67],
            text: '驻马店'
          },
          {
            position: [0.37, 0.29],
            text: '济源'
          },
          {
            position: [0.20, 0.36],
            text: '三门峡'
          },
          {
            position: [0.76, 0.41],
            text: '商丘'
          },
          {
            position: [0.59, 0.18],
            text: '鹤壁'
          },
          {
            position: [0.68, 0.17],
            text: '濮阳'
          },
          {
            position: [0.59, 0.10],
            text: '安阳'
          }
        ]
      },
      config3: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        lineWidth: 15
      },
      config4: {
        header: ['列1', '列2', '列3'],
        data: [
          ['<span style="color:#37a2da;">行1列1</span>', '行1列2', '行1列3'],
          ['行2列1', '<span style="color:#32c5e9;">行2列2</span>', '行2列3'],
          ['行3列1', '行3列2', '<span style="color:#67e0e3;">行3列3</span>'],
          ['行4列1', '<span style="color:#9fe6b8;">行4列2</span>', '行4列3'],
          ['<span style="color:#ffdb5c;">行5列1</span>', '行5列2', '行5列3'],
          ['行6列1', '<span style="color:#ff9f7f;">行6列2</span>', '行6列3'],
          ['行7列1', '行7列2', '<span style="color:#fb7293;">行7列3</span>'],
          ['行8列1', '<span style="color:#e062ae;">行8列2</span>', '行8列3'],
          ['<span style="color:#e690d1;">行9列1</span>', '行9列2', '行9列3'],
          ['行10列1', '<span style="color:#e7bcf3;">行10列2</span>', '行10列3']
        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    };
  },
  methods: {
    miniScreen () {
      this.dvClass = 'dvClass';
    }
  }
};
</script>
<style lang="scss">
.datav {
  .dv-water-pond-level svg {
    left: 4px !important;
  }
  height: 500px;
  .fullClass {
    background: #030409;
    height: 80vh !important;
    .title {
      width: 300px;
      height: 70px;
      position: absolute;
      font-size: 24px;
      left: 50%;
      margin-left: -150px;
      margin-top: 20px;
      color: #fff;
      text-align: center;
    }
    // .titleLine {
    //   width: 300px;
    //   height: 40px;
    //   position: absolute;
    //   margin-top: 40px;
    //   left: 50%;
    //   margin-left: -150px;
    // }
    .content {
      position: absolute;
      margin-top: 70px;
    }
    .outterContent {
      width:200px;
      height:200px;
      position: absolute;
      margin-left: 25px;
      margin-top: 25px;
    }
    .innerContent {
      width:150px;
      height:150px;
      position: absolute;
      margin-left: 25px;
      margin-top: 25px;
    }
    .outterPond {
      width:200px;
      height:200px;
      padding: 20px 40px;
      position: absolute;
      margin-left: 25px;
      margin-top: 15px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
    .innerPond {
      width:120px;
      height:120px;
      margin-top: 10px;
      position: absolute;
    }
    .outterCpu {
      width:200px;
      height:200px;
      padding: 20px 40px;
      position: absolute;
      margin-left: 25px;
      margin-top: 230px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
    .innerCpu {
      width:120px;
      height:120px;
      margin-top: 10px;
      position: absolute;
    }
    .outterBoard {
      position: absolute;
      margin-left: 680px;
      margin-top: 100px;
      padding: 10px 25px;
      width: 550px;
      height: 300px;
      color: #fff;
      font-size: 16px;
    }
    .innerBoard {
      position: absolute;
      width: 500px;
      height: 250px;
      margin-top: 10px;
    }
    .innerChart {
      width:400px;
      height:400px;
      position: absolute;
      margin-left: 250px;
      margin-top: 25px;
    }
    .innerRing {
      width:250px;
      height:250px;
      position: absolute;
      margin-left: 700px;
      margin-top: 25px;
    }
  }
  .dvClass {
    position: absolute !important;
    background: #fafafa;
    width: 1000px !important;
    height: 430px !important;
    z-index: inherit !important;
  }
}
</style>
