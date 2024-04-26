# vue-router

## 编程式导航

### <router-link>

#### push

通过 `<router-link>` 的 `to` 属性跳转，默认为 `push` 模式，即每一次跳转都会往历史记录这个栈中压入当前域名。有一个指针指向历史记录栈中的当前页面域名，点击后退时，指针向后移动，点击前进时，指针向前移动

#### replace

`<router-link :replace="true">`可简写为 `<router-link replace>` 开启 `replace` 模式， `replace` 模式下，每次跳转都会用跳转域名替代当前域名，浏览器无法根据历史记录前面后退。

### 跳转

使用 router 实例的方法，而不是 `<router-link>` 进行跳转
可以通过 `$router` 访问路由实例，对比 `$route` 为当前活跃路由对象。
`$router` 中是跳转，返回等方法，而 `$route` 中是路径，参数等属性。
组合式 API 中， `useRouter()` 返回路由器实例。相当于在模板中使用 `$router`。

```js
import { useRouter } from "vue-router";

const route = useRouter();

function gotoDetail(item) {
  route.push({
    name: "detail",
    params: {
      id: item.id,
      msg: item.msg,
    },
  });
}
```

### 替换

```js
import { useRouter } from "vue-router";

const router = useRouter();

function gotoDetail(item) {
  router.replace({
    path: "/about/news/newsdetail",
    query: {
      id: item.id,
      msg: item.msg,
    },
  });
}
```

## 命名路由

给路由提供 `name` 属性以简化路由的跳转。

```javascript
 {
    path: "/about/message/detail:msg",
    // 提供 name 属性
    name: "detail",
    component: Detail,
  },
```

这时可以向 `<router-link>` 中 `to` 属性传递对象时用 `name` 属性替代 `path` ，此时 `to` 属性前加上 `:`

```html
<!-- 简化前 -->
<router-link :to=" {path: '/about/message/detail', query: {msg: '123'}}"
  >Go to detail</router-link
>
<!-- 简化后 -->
<router-link :to="{name: 'detail', query: {msg: '123'}}"
  >Go to detail</router-link
>
```

注意：使用对象形式传递 `params` 时，无法使用 `path` ，需使用 `name` 属性代替

## 命名视图

同时展示多个视图时，`component` 变为 `components` ，且变成一个对象，`default` 为默认展示的视图，`<router-view>` 默认展示其中的内容

```javascript
{
    path: "/page",
    components: {
      default: Main,
      Top, // Top: Top 简写
      // 与  `<router-view>` 上的 `name` 属性匹配
      Footer,
    },
  },
```

给 `<router-view>` 添加 `name` 属性，展示 `components` 中对应组件

```html
<router-view name="Top"></router-view>
<router-view></router-view>
<router-view name="Footer"></router-view>
```

## 重定向

重定向通过 `routes` 中的 `redirect` 属性来配置

```javascript
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
];
```

上面例子将 `/` 重定向到 `/home`。
重定向的目标也可以是命名路由：

```javascript
const routes = [
  {
    path: "/",
    redirect: { name: "user" },
  },
  {
    path: "/user/:id",
    // 提供 name 属性
    name: "user",
    component: User,
  },
];
```

也可以是一个方法，动态的返回重定向的目标。

### 取别名

通过 `routes` 中 `alias` 属性配置别名
alias `/ˈeɪ.li.əs/` 别名，化名

```js
const routes = [
  {
    path: "/home",
    component: Home,
    alias: "/",
  },
];
```

甚至可以使用数组提供多个别名

```js
const routes = [
  {
    path: "/",
    component: Home,
    alias: ["/home", "/index"],
  },
];
```

## props 传递给路由组件

### 布尔类型

将 `props` 作为 `routes` 的属性并配置为 `true`，此时 `params` 参数将以 `props` 的形式传递给路由组件
|| 只适用于 `params`

```javascript
const routes = [
  {
    path: "/user/:id",
    component: User,
    props: true,
  },
];
```

在路由组件中，如同子组件中获取 `props`，与使用 `$route` 对比

```html
<script>
  export default {
    props: ["id"],
    mounted() {
      console.log(this.id);
      console.log(this.$route.params.id);
    },
  };
</script>
```

组合式 API 中

```html
<script setup>
  import { useRoute } from "vue-router";
  console.log(useRoute().params.id);

  //---------------------
  const props = defineProps({
    id: String,
  });
  console.log(props.id);
</script>
```

### 对象形式

### 函数写法

可以同时将 params 参数，query 参数传递给路由组件

### 命名视图

命名视图中，props 为对象形式，且必须针对所有视图设置为 true 或者 false

```js
const routes = [
  {
    path: "/shop/:id",
    components: {
      dafault: ShopMain,
      ShopTop,
      ShopFooter,
    },
    props: { default: true, ShopTop: false, ShopFooter: false },
  },
];
```

## 路由懒加载

使用动态导入来代替静态导入

```js
// 静态导入
import User from "../views/User.vue";
// 动态导入, 将上面的代码替换为下面代码
const User = () => import("../views/User.vue");

const routes = [
  { path: "/user/:id", component: User },
  // 或在路由定义里直接使用它
  { path: "/user/:id", component: () => import("../views/User.vue") },
];
```

## hash 和 history
