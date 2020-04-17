<template>
  <el-scrollbar
    :class="{ 'side-bar-container': true, 'is-collapse': collapse }"
  >
    <logo />
    <el-menu
      :background-color="variables.menuBackground"
      :text-color="variables.menuText"
      :active-text-color="variables.menuTextAcive"
      :default-active="activeMenu"
      :collapse="collapse"
      :collapse-transition="false"
      :default-openeds="defaultOpen"
      unique-opened
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :base-path="route.path"
        :item="route"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import path from "path";
import Logo from "@/layouts/components/Logo";
import SidebarItem from "./SideBarItem";
import variables from "@/styles/variables.scss";
import { version } from "@/settings";
import { mapGetters } from "vuex";

export default {
  components: { SidebarItem, Logo },
  data() {
    return { version: version };
  },
  computed: {
    ...mapGetters(["collapse", "routes"]),
    defaultOpen() {
      const list = this.$store.getters.routes;
      let arr = list.map((item) => {
        return path.resolve(item.path);
      });
      /*只默认展开除了首页,登录,404,重定向以外的第一级*/
      arr = this.$baseLodash.pull(
        arr,
        "/",
        "/*",
        "/login",
        "/404",
        "/redirect"
      );
      return arr;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style lang="scss" scoped>
.side-bar-container {
  transition: width 0.28s;
  width: $base-left-menu-width;
  height: 100vh;
  background: $base-menu-background;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  ::v-deep {
    .el-menu {
      border: 0;
    }

    .svg-inline {
      &--fa {
        width: 1rem;
      }
    }

    .el-menu-item {
      height: 46px !important;
      line-height: 46px !important;

      &:hover {
        background-color: $base-menu-active-background !important;
      }

      &.is-active {
        background-color: $base-menu-active-background !important;
      }
    }

    .nest-menu {
      .el-menu-item {
        height: 46px !important;
        line-height: 46px !important;

        &.is-active {
          background-color: $base-menu-active-background !important;
        }
      }
    }

    .el-submenu {
      .el-menu-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.is-active {
          background-color: $base-menu-active-background !important;
        }
      }
    }
  }

  &.is-collapse {
    width: $base-left-menu-width-min;
    border-right: 0 !important;

    ::v-deep {
      .title {
        display: none;
      }

      .el-menu--collapse {
        border-right: 0 !important;

        .el-submenu__icon-arrow {
          right: 10px;
          margin-top: -3px;
        }

        .el-submenu__title {
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
