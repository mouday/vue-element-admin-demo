import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/tool",
    component: Layout,
    redirect: "/tool/schema2code",
    name: "Tool",
    meta: { title: "工具", icon: "el-icon-s-help" },
    children: [
      {
        path: "schema2code",
        component: () => import("@/views/schema2code/index.vue"),
        meta: { title: "schema2code", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "Example", icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "Table", icon: "table" }
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "Tree", icon: "tree" }
      },
      {
        path: "crop",
        name: "Crop",
        component: () => import("@/views/crop"),
        meta: { title: "图片裁剪", icon: "tree" }
      },
      {
        path: "paste",
        name: "Paste",
        component: () => import("@/views/paste"),
        meta: { title: "图片粘贴", icon: "tree" }
      },
      {
        path: "markdown",
        name: "Markdown",
        component: () => import("@/views/markdown/index"),
        meta: { title: "Markdown", icon: "tree" }
      },
      {
        path: "notify",
        name: "Notify",
        component: () => import("@/views/notify/index"),
        meta: { title: "Notify通知", icon: "tree" }
      },
      {
        path: "save-file",
        name: "SaveFile",
        component: () => import("@/views/save-file/index"),
        meta: { title: "保存文件", icon: "tree" }
      },
      {
        path: "clipboard",
        name: "Clipboard",
        component: () => import("@/views/clipboard/index"),
        meta: { title: "点击复制", icon: "tree" }
      },
      {
        path: "qr-code",
        name: "QRCode",
        component: () => import("@/views/qr-code/index"),
        meta: { title: "二维码", icon: "tree" }
      },

      {
        path: "html-to-image",
        name: "html-to-image",
        component: () => import("@/views/html-to-image/index.vue"),
        meta: { title: "网页截图", icon: "tree" }
      },

      {
        path: "ityped",
        name: "ityped",
        component: () => import("@/views/ityped/index"),
        meta: { title: "输入动画", icon: "tree" }
      },

      {
        path: "css3",
        name: "Css3",
        component: () => import("@/views/css3/index"),
        meta: { title: "css3", icon: "tree" }
      },
      {
        path: "captcha",
        name: "captcha",
        component: () => import("@/views/captcha/index"),
        meta: { title: "验证码", icon: "tree" }
      }
    ]
  },

  {
    path: "/curd",
    component: Layout,
    redirect: "/curd/list",
    name: "curd",
    meta: { title: "CURD", icon: "el-icon-s-help" },
    children: [
      {
        path: "/curd/list",
        name: "curd-list",
        component: () => import("@/views/curd/list/index.vue"),
        meta: { title: "CURD-list", icon: "form" }
      },

      {
        path: "/curd/edit",
        name: "curd-edit",
        component: () => import("@/views/curd/edit/index.vue"),
        meta: { title: "CURD-edit", icon: "form" }
      }
    ]
  },

  {
    path: "/doc",
    name: "doc",
    component: Layout,
    meta: {
      title: "文档",
      icon: "form"
    },
    redirect: "/doc/article",
    children: [
      {
        path: "article",
        name: "article",
        component: () => import("@/views/article/index.vue"),
        meta: { title: "好文收录", icon: "form" }
      },
      {
        path: "/doc/learing-note",
        name: "learing-note",
        component: () => import("@/views/iframe/index"),
        meta: { title: "学习笔记", icon: "form" },
        props: {
          src: "https://mouday.github.io/LearningNote/"
        }
      },
      {
        path: "/doc/panjiachen",
        name: "panjiachen",
        component: () => import("@/views/iframe/index"),
        meta: { title: "vue-element-admin", icon: "form" },
        props: {
          src: "https://panjiachen.gitee.io/vue-element-admin-site/zh/"
        }
      }
    ]
  },

  {
    path: "/editors",
    component: Layout,
    redirect: "/editors/wang-editor",
    name: "Editors",
    meta: { title: "Editors", icon: "el-icon-s-help" },
    children: [
      {
        path: "/editors/wang-editor",
        name: "WangEditor",
        component: () => import("@/views/editors/wang-editor/index"),
        meta: { title: "WangEditor", icon: "form" }
      },
      {
        path: "/editors/ck-editor",
        name: "CKEditor",
        component: () => import("@/views/editors/ck-editor/index"),
        meta: { title: "CKEditor", icon: "form" }
      }
    ]
  },
  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "Form", icon: "form" }
      }
    ]
  },

  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "Menu1-1" }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "Menu1-3" }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Menu2",
        meta: { title: "menu2" }
      }
    ]
  },

  // {
  //   path: "external-link",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "https://panjiachen.github.io/vue-element-admin-site/#/",
  //       meta: { title: "External Link", icon: "link" }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
