# 基本使用

## 安装

Vue2 使用 Vuex3，Vue3 使用 Vuex4。

Vue2 安装 Vuex

```
npm i vuex@3
```

## 基本使用

`src` 目录下创建新目录 `store`, `store` 目录下创建 `index.js`

```
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    └── index.js          # 我们组装模块并导出 store 的地方
```

`index.js` 中使用 `new Vuex.Store()` 创建仓库。

```js
// index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "欢迎使用 Vuex",
  },
});
```

`main.js` 中，在 Vue 实例上配置新的配置项 `store`

```js
import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 新配置项 store，store:store 的简写
  store,
}).$mount("#app");
```

此时在组件中可以访问到 Vuex 中的数据

```js
<script>
export default {
  name: "ChildComponet",
  mounted() {
    console.log(this.$store.state.msg); // "欢迎使用 Vuex"
  },
};
</script>
```
