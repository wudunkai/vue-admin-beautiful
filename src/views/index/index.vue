<template>
  <div class="index-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert
          title="作者寄语：世间本无事，庸人自扰之，框架发布以来，免不了质疑和嘲笑，但我从未放弃，我只是一条略懂前端的咸鱼，可我一直怀揣着改变世界的梦想，希望我们每个人，不管过程怎样，结局都是美好的"
          type="success"
        >
          <a
            target="_blank"
            href="https://github.com/chuzhixin/vue-element-admin-beautiful"
          >
            <img
              style="height: 100%;"
              src="https://img.shields.io/github/stars/chuzhixin/vue-admin-beautiful?style=social"
            />
          </a>
        </el-alert>
        <br />
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card shadow="never">
          <div slot="header">
            <span>访问量</span>
          </div>
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="fwl"
          />
          <div class="bottom">
            <span
              >日均访问量:

              <byui-count
                :start-val="config1.startVal"
                :end-val="config1.endVal"
                :duration="config1.duration"
                :separator="config1.separator"
                :prefix="config1.prefix"
                :suffix="config1.suffix"
                :decimals="config1.decimals"
              />
            </span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card shadow="never">
          <div slot="header">
            <span>授权数</span>
          </div>
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="sqs"
          />
          <div class="bottom">
            <span
              >总授权数:
              <byui-count
                :start-val="config2.startVal"
                :end-val="config2.endVal"
                :duration="config2.duration"
                :separator="config2.separator"
                :prefix="config2.prefix"
                :suffix="config2.suffix"
                :decimals="config2.decimals"
            /></span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card shadow="never">
          <div slot="header">
            <span>词云</span>
          </div>
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="cy"
            @zr:click="handleZrClick"
            @click="handleClick"
          />
          <div class="bottom">
            <span
              >词云数量:<byui-count
                :start-val="config3.startVal"
                :end-val="config3.endVal"
                :duration="config3.duration"
                :separator="config3.separator"
                :prefix="config3.prefix"
                :suffix="config3.suffix"
                :decimals="config3.decimals"
            /></span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>销售量/签单量</span>
          </div>
          <byui-chart
            :autoresize="true"
            theme="byui-echarts-theme"
            :options="xsl"
          />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>版本信息</span>
            <div style="float: right;">部署时间:{{ updateTime }}</div>
          </div>
          <table class="table">
            <tr>
              <td>@vue/cli版本</td>
              <td>{{ devDependencies["@vue/cli-service"] }}</td>
            </tr>
            <tr>
              <td>vue版本</td>
              <td>{{ dependencies.vue }}</td>
            </tr>
            <tr>
              <td>vuex版本</td>
              <td>{{ dependencies.vuex }}</td>
            </tr>
            <tr>
              <td>vue-router版本</td>
              <td>{{ dependencies["vue-router"] }}</td>
            </tr>
            <tr>
              <td>element-ui版本</td>
              <td>{{ dependencies["element-ui"] }}</td>
            </tr>
            <tr>
              <td>axios版本</td>
              <td>{{ dependencies.axios }}</td>
            </tr>
          </table>
          <div class="bottom-btn">
            <a @click="handleChangeTheme">
              <el-button type="primary">修改主题和布局</el-button>
            </a>
            <a
              target="_blank"
              href="https://github.com/chuzhixin/vue-element-admin-beautiful"
            >
              <el-button type="primary">
                github下载源码点star
              </el-button>
            </a>
            <a target="_blank" href="https://ext.dcloud.net.cn/plugin?id=1476">
              <el-button type="primary"
                >国内源码下载通道（记得给个好评）
              </el-button>
            </a>
            <a
              target="_blank"
              href="https://chu1204505056.gitee.io/byui-bookmarks/guide/"
            >
              <el-button type="primary">文档</el-button>
            </a>
            <el-popover placement="top" width="250" trigger="hover">
              <el-image :src="require('@/assets/ewm.png')"></el-image>
              <a
                slot="reference"
                target="_blank"
                href="//shang.qq.com/wpa/qunwpa?idkey=00db5d4f8037fb577d128c2654de0bef68d32e55a41431b07a08a1d4446bb587"
              >
                <el-button type="warning">官方讨论群</el-button>
              </a>
            </el-popover>
            <el-popover placement="top" width="250" trigger="hover">
              <el-image :src="require('@/assets/wx_ewm.png')"></el-image>
              <p>
                添加好友时请附带，付款人名称信息，我一定努力让你觉得物超所值，当然一切都是在你自愿的基础上
              </p>
              <p>QQ:1204505056</p>
              <p>微信:chu1204505056</p>
              <a slot="reference" target="_blank">
                <el-button type="warning">一对一问题解答（量力而行）</el-button>
              </a>
            </el-popover>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>更新日志</span>
          </div>
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <div slot="header">
            <span>浏览器信息</span>
          </div>
          <el-alert :closable="false" :title="userAgent" type="success">
          </el-alert>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ByuiChart from "@/plugins/echarts";
import ByuiCount from "@/plugins/byuiCount";
import { dependencies, devDependencies } from "../../../package.json";
import { getList } from "@/api/changeLog";

export default {
  name: "Index",
  components: {
    ByuiChart,
    ByuiCount,
  },
  data() {
    return {
      updateTime: process.env.VUE_APP_UPDATE_TIME,
      nodeEnv: process.env.NODE_ENV,
      dependencies: dependencies,
      devDependencies: devDependencies,
      config1: {
        startVal: 0,
        endVal: 43,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },
      config2: {
        startVal: 0,
        endVal: 82,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },
      config3: {
        startVal: 0,
        endVal: 12,
        decimals: 0,
        prefix: "",
        suffix: "",
        separator: ",",
        duration: 3000,
      },

      //访问量
      fwl: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "访问量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22],
            smooth: true,
            areaStyle: {},
          },
        ],
      },
      //授权数
      sqs: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            /*boundaryGap: false,*/
            data: ["0时", "4时", "8时", "12时", "16时", "20时", "24时"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "授权数",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 20, 33, 39, 33, 22],
          },
        ],
      },
      //词云
      cy: {
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 15,
            sizeRange: [12, 40],
            rotationRange: [0, 0],
            width: "100%",
            height: "100%",
            textStyle: {
              normal: {
                color() {
                  const arr = [
                    "#1890FF",
                    "#36CBCB",
                    "#4ECB73",
                    "#FBD437",
                    "#F2637B",
                    "#975FE5",
                  ];
                  let index = Math.floor(Math.random() * arr.length);
                  return arr[index];
                },
                /*color: function() {
                                                                                          return `rgb(
                                                                                          ${Math.round(
                                                                                              Math.random() * 255
                                                                                          )} , ${Math.round(
                                                                                              Math.random() * 255
                                                                                          )} , ${Math.round(Math.random() * 255)} )`;
                                                                                      }*/
              },
            },
            data: [
              {
                name: "XXXX",
                value: 15000,
              },
              {
                name: "byui",
                value: 10081,
              },
              {
                name: "beautiful",
                value: 9386,
              },

              {
                name: "国防白皮书",
                value: 6500,
              },
              {
                name: "创新",
                value: 6000,
              },
              {
                name: "民主革命",
                value: 4500,
              },
              {
                name: "文化强国",
                value: 3800,
              },
              {
                name: "国家主权",
                value: 3000,
              },
              {
                name: "武装颠覆",
                value: 2500,
              },
              {
                name: "领土完整",
                value: 2300,
              },
              {
                name: "安全",
                value: 2000,
              },
              {
                name: "从严治党",
                value: 1900,
              },
              {
                name: "现代化经济体系",
                value: 1800,
              },
              {
                name: "国防动员",
                value: 1700,
              },
              {
                name: "信息化战争",
                value: 1600,
              },
              {
                name: "局部战争",
                value: 1500,
              },
              {
                name: "教育",
                value: 1200,
              },
              {
                name: "职业教育",
                value: 1100,
              },
              {
                name: "兵法",
                value: 900,
              },
              {
                name: "一国两制",
                value: 800,
              },
              {
                name: "特色社会主义思想",
                value: 700,
              },
            ],
          },
        ],
      },
      //销售量
      xsl: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
          },
        },
        grid: {
          top: "4%",
          left: "2%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "销售量",
            type: "line",
            data: [10, 52, 20, 33, 39, 33, 22, 10, 22, 23, 13, 29],
            smooth: true,
            areaStyle: {},
          },
          {
            name: "签单量",
            type: "line",
            data: [20, 12, 30, 23, 31, 13, 32, 12, 12, 13, 13, 29],
            smooth: true,
            areaStyle: {},
          },
        ],
      },
      //更新日志
      reverse: true,
      activities: [],
      //浏览器信息
      userAgent: navigator.userAgent,
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {},
  methods: {
    handleClick(e) {
      this.$baseMessage(`点击了${e.name},这里可以写跳转`);
    },
    handleZrClick(e) {},
    handleChangeTheme() {
      this.$baseEventBus.$emit("theme");
    },
    fetchData() {
      getList().then((res) => {
        this.activities = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  ::v-deep {
    .el-card__body {
      min-height: 200px;

      .echarts {
        width: 100%;
        height: 140px;
      }
    }
  }

  .card {
    ::v-deep {
      .el-card__body {
        min-height: 390px;
        height: auto;
        .echarts {
          width: 100%;
          height: 350px;
        }
      }
    }
  }

  .bottom {
    margin-top: 5px;
    height: 40px;
    padding-top: 20px;
    border-top: 1px solid $base-border-color;
    text-align: left;
    color: #595959;
  }

  .table {
    width: 100%;
    background-color: #fff;
    color: #666;
    border-collapse: collapse;

    td {
      border-width: 1px;
      border-style: solid;
      border-color: #e6e6e6;
      position: relative;
      padding: 9px 15px;
      min-height: 20px;
      line-height: 20px;
      font-size: 14px;

      &:first-child {
        text-align: right;
        width: 50%;
      }
    }
  }

  .bottom-btn {
    float: right;
    margin-top: 5px;

    button {
      margin: 5px 0 5px 10px;
    }
  }
}
</style>
