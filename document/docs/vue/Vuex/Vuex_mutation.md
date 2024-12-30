# Mutation

## 基本

`mutation` 是 Vuex 中唯一改变 `state` 的方法。`mutation` 类似于 Vue 实例中的 `methods`

每个 `mutation` 接收 `state` 作为第一个参数

```js
export default new Vuex.Store({
  state: {
    name: "zhang-san",
  },
  mutations: {
    toUpperCase(state) {
      // 更改 state
      state.name = state.name.toUpperCase();
    },
  },
});
```

调用 `mutation` 使用 `this.$store.commit('toUpperCase')`

## 载荷

在 `commit` 中传入额外的参数，称为载荷（payload）

```js
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, n) {
      // 更改 state
      state.count += n;
    },
  },
});
```

```js
this.$store.commit("increment", 10);
```

官方推荐将载荷写成对象模式

```js
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      // 更改 state
      state.count += payload.amount;
    },
  },
});
```

```js
this.$store.commit("increment", {
  amount: 10,
});
```

## 对象式的 commit

```js
this.$store.commit({
  type: "increment",
  amount: 10,
});
```

这表示将 `type` 也作为载荷的一部分

```js
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      console.log(payload); // {type: 'increment', amount: 10}
      state.count += payload.amount;
    },
  },
});
```

## mapMutations

用法与 `mapState` 一致，载荷在调用时传入

```js
...mapMutations(["increment"]),
```

```html
<button @click="increment({ amount: 5 })">increment</button>
```

## Mutation 必须是同步函数
