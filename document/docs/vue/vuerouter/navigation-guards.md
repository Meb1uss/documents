# 导航守卫

作用：通过跳转或取消的方式守卫导航

## 全局前置守卫

进入每个路由组件都会触发此函数

```js
router.beforeEach((to, from) => {});
```

每个守卫方法接受两个参数：

- `to`:即将要进入的目标
- `from`:当前导航正要离开的路由

```javascript
router.beforeEach((to, from) => {
  //...
  // 返回 false 以取消导航
  return false;
});
```

可以返回的值

- `false` 取消当前导航
- 一个路由地址，重定向到新的路由地址，如同调用 `router.push()`
- 没有返回值和 `undefined` 或 `true`，则跳转成功

## 路由元信息

在 `routes` 中的数组对象可配置 `meta` 字段，将任意信息附加到路由上。
用于判断是否需要鉴权。 `meta` 是一个对象。

```javascript
routes = [
  {
    path: '',
    component: ,
    meta:{isAuth: true}
  }
]
```

## 全局后置守卫

```js
router.afterEach((to, from) => {});
```

一般用于在导航成功后，更改页面标题等功能。

## 路由独享的守卫

在路由配置上定义 `beforeEnter`
