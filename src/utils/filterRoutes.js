/**
 * @description 渲染路由
 * @param constantRoutes
 * @returns {*}
 */
export function filterRoutes(constantRoutes) {
  return constantRoutes.filter((route) => {
    if (route.component) {
      if (route.component === "Layout") {
        route.component = () => import("@/layouts");
      } else if (route.component === "EmptyLayout") {
        route.component = () => import("@/layouts/EmptyLayout");
      } else {
        const path = "views/" + route.component;
        route.component = () => import(`@/${path}`);
      }
    }
    if (route.children && route.children.length) {
      route.children = filterRoutes(route.children);
    }
    if (route.children && route.children.length === 0) {
      delete route.children;
    }
    return true;
  });
}
