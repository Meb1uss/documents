module.exports = {
  base: "/documents/",
  title: "∞",
  description: "技术博客",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  // theme: "reco",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "JavaScript",
        link: "/js/js-basic/01.variable",
        // items: [
        //   { text: "JavsScript基础", link: "/js/js-basic/01.variable" },
        //   { text: "对象基础", link: "/js/js-object-basic/01.objcet" },
        //   { text: "数据类型", link: "/js/js-types/01.number" },
        //   { text: "函数进阶", link: "/js/js-function/01.closure" },
        //   { text: "对象属性配置", link: "/js/js-object/01.property" },
        //   { text: "原型，继承", link: "/js/js-prototype/01.prototype" },
        //   { text: "类", link: "/js/js-class/01.class" },
        //   { text: "Promise", link: "/js/js-promise/01.promise" },
        // ],
      },
      {
        text: "CSS",
        link: "/css/layout/float",
        // items: [
        //   {
        //     text: "布局",
        //     items: [
        //       { text: "Float 父元素高度塌陷", link: "/css/layout/float" },
        //       { text: "Flex 基本使用", link: "/css/layout/flex" },
        //       { text: "Grid 基本使用", link: "/css/layout/grid" },
        //       { text: "响应式布局", link: "/css/layout/responsive" },
        //     ],
        //   },
        // ],
      },
      {
        text: "Vue",
        items: [
          {
            text: "Vue基础",
            items: [
              { text: "响应式原理", link: "/vue/vue-basic/reactivity" },
              { text: "Vue配置项", link: "/vue/vue-basic/vue-basic" },
              { text: "Class绑定", link: "/vue/vue-basic/class&style" },
              { text: "条件渲染", link: "/vue/vue-basic/v-if&v-show" },
              { text: "生命周期", link: "/vue/vue-basic/Vue-lifecycle" },
              { text: "组件基本使用", link: "/vue/vue-basic/component" },
              { text: "组件传值", link: "/vue/vue-basic/communication" },
            ],
          },
          {
            text: "Vue-router",
            items: [
              { text: "基本使用", link: "/vue/vuerouter/vue-router-basic" },
              { text: "动态路由匹配", link: "/vue/vuerouter/params&query" },
              { text: "编程式导航", link: "/vue/vuerouter/navigation" },
            ],
          },
          {
            text: "组合式API",
            items: [
              { text: "setup", link: "/vue/composition/setup" },
              { text: "响应式数据", link: "/vue/composition/ref&reactive" },
              { text: "computed", link: "/vue/composition/computed" },
              { text: "watch", link: "/vue/composition/watch" },
            ],
          },
          {
            text: "Pinia",
            items: [{ text: "pinia基本使用", link: "/vue/pinia/pinia" }],
          },
          {
            text: "Vuex",
            items: [
              { text: "Vuex安装", link: "/vue/Vuex/Vuex_install" },
              { text: "State", link: "/vue/Vuex/Vuex_state" },
              { text: "Mutation", link: "/vue/Vuex/Vuex_mutation" },
              { text: "Action", link: "/vue/Vuex/Vuex_action" },
              { text: "Module", link: "/vue/Vuex/Vuex_module" },
            ],
          },
        ],
      },
      {
        text: "TypeScript",
        link: "/ts/ts-type",
      },
      {
        text: "工具",
        link: "/tools/git",
      },
      {
        text: "AJAX",
        link: "/ajax/url",
      },
    ],
    sidebar: {
      "/ajax/": [
        {
          title: "AJAX",
          children: ["url", "XMLHttpRequest", "Fetch", "Axios"],
          collapsable: false,
        },
      ],
      "/ts/": [
        {
          title: "TypeScript",
          children: [
            "ts-type",
            "ts-function",
            "ts-object",
            "ts-interface",
            "ts-generics",
          ],
          collapsable: false,
        },
      ],
      "/tools/": [
        {
          title: "Git",
          children: ["git"],
          collapsable: false,
          sidebarDepth: 3,
        },
        {
          title: "包管理工具",
          children: ["package-manager"],
          collapsable: false,
          sidebarDepth: 3,
        },
      ],
      "/js/": [
        {
          title: "JavaScript基础",
          children: ["js-basic/01.variable", "js-basic/02.function"],
          collapsable: false,
        },
        {
          title: "对象基础",
          children: [
            "js-object-basic/01.objcet",
            "js-object-basic/02.object-copy",
            "js-object-basic/03.this",
            "js-object-basic/04.new",
          ],
          collapsable: false,
        },
        {
          title: "数据类型",
          children: [
            "js-types/01.number",
            "js-types/02.string",
            "js-types/03.array",
            "js-types/04.array-methods",
            "js-types/05.set&map",
            "js-types/06.destructuring",
            "js-types/07.rest&...",
            "js-types/08.for...of",
            "js-types/09.object.value",
          ],
          collapsable: false,
        },
        {
          title: "函数进阶",
          children: [
            "js-function/01.closure",
            "js-function/02.var",
            "js-function/03.call,apply,bind",
          ],
          collapsable: false,
        },
        {
          title: "对象属性配置",
          children: [
            "js-object/01.property",
            "js-object/02.getter&setter",
            "js-object/03.proxy&reflect",
          ],
          collapsable: false,
        },
        {
          title: "类",
          children: [
            "js-class/01.class",
            "js-class/02.class-extend",
            "js-class/03.class-static",
          ],
          collapsable: false,
        },
        {
          title: "Promise",
          children: [
            "js-promise/01.promise",
            "js-promise/02.promise-chgining",
            "js-promise/03.promise-methods",
            "js-promise/04.async&await",
          ],
          collapsable: false,
        },
      ],
      "/css/": [
        {
          title: "布局",
          children: [
            "layout/float",
            "layout/flex",
            "layout/grid",
            "layout/responsive",
          ],
          collapsable: false,
          sidebarDepth: 3,
        },
      ],
      "/vue/": [
        {
          title: "Vue基础",
          children: [
            "vue-basic/reactivity",
            "vue-basic/vue-basic",
            "vue-basic/class&style",
            "vue-basic/v-if&v-show",
            "vue-basic/Vue-lifecycle",
            "vue-basic/component",
            "vue-basic/communication",
          ],
          collapsable: false,
        },
        {
          title: "Vue2",
          children: [
            "vue2/Vue2_data",
            "vue2/Vue2_methods",
            "vue2/Vue2_computed",
            "vue2/Vue2_watch",
            "vue2/Vue2_mixin",
            "vue2/Vue2_render",
            "vue2/Vue3_directives",
          ],
          collapsable: false,
        },
        {
          title: "Vue-Router",
          children: [
            "vuerouter/vue-router-basic",
            "vuerouter/params&query",
            "vuerouter/navigation",
            "vuerouter/navigation-guards",
          ],
          collapsable: false,
        },
        {
          title: "组合式API",
          children: [
            "composition/setup",
            "composition/ref&reactive",
            "composition/computed",
            "composition/watch",
          ],
          collapsable: false,
        },
        {
          title: "Vuex",
          children: [
            "Vuex/Vuex_install",
            "Vuex/Vuex_state",
            "Vuex/Vuex_mutation",
            "Vuex/Vuex_action",
            "Vuex/Vuex_module",
          ],
          collapsable: false,
        },
        {
          title: "Pinia",
          children: ["pinia/pinia", "pinia/pinia-plugin-persistedstate"],
          collapsable: false,
        },
      ],
      tools: [],
    },
    logo: "/favicon.png",
  },
  markdown: {
    lineNumbers: true,
  },
};
