# Action

## 基本

action 与 mutation 类似，但是

- action 不能直接修改 state，而是通过 mutation 修改 state
- action 可以包含异步操作

所以一般将逻辑操作写在 action 中，而对数据的更改写在 mutation 中。
假如只有在 `count < 100` 时才执行 ` state.count += payload.amount;`

```js
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    },
  },
  actions: {
    increment(context) {
      const { state, commit } = context;
      if (state.count < 100) {
        commit({
          type: "increment",
          amount: 10,
        });
      }
    },
  },
});
```

`action` 函数接受一个与 store 实例具有相同方法和属性的 `context` 对象，可以调用 `context.commit` 来调用 `mutation`

## dispatch

使用 `store.dispatch` 方法来调用 `actions` 中的函数

```js
this.$store.dispatch("increment");
```

与 `store.commit` 方法一样，可以载荷和对象方式

```js
this.$store.dispatch({
  type: "increment",
  amount: 10,
});
```

## mapActions

同 `mapMutations`
