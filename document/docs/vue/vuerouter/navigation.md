# 编程式导航

## `<router-link>`

### push

通过 `<router-link>` 的 `to` 属性跳转，默认为 `push` 模式，即每一次跳转都会往历史记录这个栈中压入当前域名。有一个指针指向历史记录栈中的当前页面域名，点击后退时，指针向后移动，点击前进时，指针向前移动

### replace

`<router-link :replace="true">`可简写为 `<router-link replace>` 开启 `replace` 模式， `replace` 模式下，每次跳转都会用跳转域名替代当前域名，浏览器无法根据历史记录前面后退。

## 跳转

使用 router 实例的方法，而不是 `<router-link>` 进行跳转。

可以通过 `$router` 访问路由实例，
组合式 API 中， `useRouter()` 返回路由器实例。相当于在模板中使用 `$router`。

```js
import { useRouter } from "vue-router";

const router = useRouter();

function gotoDetail(item) {
  router.push({
    name: "detail",
    params: {
      id: item.id,
      msg: item.msg,
    },
  });
}
```

::: tip

- `$router` —— 路由实例，包含路由的跳转、返回等方法
- `$route` —— 当前活跃路由对象，包含路径、参数等属性
  :::

## 替换

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
