# Vue-router 基本使用

## 基本概念

### 路由 vs 路由器

- 路由（`route`）：一个路由就是一组 `key-value` 的映射关系。
  - 对前端路由来说，`value` 是路由组件 (`component`)， `key` 是路径 (`path`)
- 路由器（`router`）：多个路由，需要路由器来管理。

## 路由基本使用

### 安装

`npm install vue-router@4` 或者使用 `vite`: `npm create vite@latest`，通过脚手架安装

### 使用

```
├─ src
│  ├─ views
│  │   ├── Home.vue
│  │   └── About.vue
│  └─ router
│      └─ index.js

```

1. `src` 文件夹下创建 `views` 文件夹（或 `pages` ），用于管理路由组件
2. `src` 文件夹下创建 `router` 文件夹，并创建 `index.js` 文件，用于管理路由器
3. `index.js` 中引入 `views` 中的路由组件

```js
// index.js
import Home from "../views/Home.vue";
import About from "../views/About.vue";
```

4. `index.js` 中创建路由表 `routes` ，`routes` 是一个对象数组，每一个路由为一个对象，分别有 `path` (路径) `component` （即引入的路由组件）两个键

```js
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];
```

5. `index.js` 中创建路由实例 `router` ，并传递 `routes` 配置

- 从 `vue-router` 中引入 `createRouter` 和 `createWebHashHistory`
- `createRouter` 接收对象作为参数
- 导出 `router`

```js
//首先从 vue-router 中引入 createRouter 和 createWebHashHistory
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(), //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  routes, // `routes: routes` 的缩写
});

export default router;
```

6. `main.js` 中引入 `router` 并挂载，先使用路由，再挂载 `app`

```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
```

## 嵌套路由

路由中 `children` 属性设置嵌套路由，同样为一个对象数组，子路由的 `path` 不要写上 `/`

```js
{
    path: "/parent",
    component: Parent,
    // 嵌套路由
    children: [
      {
        path: "styleOne",
        component: StyleOne,
      },
      {
        path: "styleTwo",
        component: StyleTwo,
      },
    ],
  },
```

`<router-link>` 中的 `to` 属性需要完整域名，不然无法匹配

```html
<router-link to="/parent/styleOne">styleOne</router-link>
<router-link to="/parent/styleTwo">styleTwo</router-link>
```

注意对比 `children` 中的 `path` 以及`<router-link>` 中的 `to`
