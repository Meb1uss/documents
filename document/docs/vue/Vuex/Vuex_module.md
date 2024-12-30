# Module

## 基本

为避免臃肿，将 `store` 分成多个模块，每个模块有自己的 `state`, `mutation`, `action`

```js
const personStore = {
  namespaced: true,
  state: {
    name: "zhangsan",
    age: 20,
  },
  mutations: {
    toUpperCase(state) {
      state.name = state.name.toUpperCase();
    },
  },
};

const aboutStore = {
  namespaced: true,
  state: {
    msg: "欢迎使用 Vuex",
    count: 0,
  },
  actions: {
    increment(context, payload) {
      const { state, commit } = context;
      if (state.count < 10) {
        commit("increment", payload);
      }
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
};

export default new Vuex.Store({
  modules: {
    personStore,
    aboutStore,
  },
});
```

## 命名空间

使用命名空间，能让 Vue 知道你需要的是哪个模块的数据

```js
const personStore = {
  // 命名空间
  namespaced: true,
  state: {
    name: "zhangsan",
    age: 20,
  },
  mutations: {
    toUpperCase(state) {
      state.name = state.name.toUpperCase();
    },
  },
};
```

## 模块化使用 state

`mapState` 第一个参数变为模块名

```js
...mapState("personStore", ["name", "id", "age"]),
...mapState("aboutStore", ["count", "msg"]),
```

手动引入 `.state` 后加上 `.模块名`

```js

name() {
  return this.$store.state.personStore.name;
},
id() {
  return this.$store.state.personStore.id;
},
age() {
  return this.$store.state.personStore.age;
},
count() {
  return this.$store.state.aboutStore.count;
},
  msg() {
  return this.$store.state.aboutStore.msg;
},

```

## 模块化调用 mutation

`mapMutations` 第一个参数变为模块名

```js
...mapMutations("personStore", ["toUpperCase"]),
...mapMutations("aboutStore", ["increment"]),
```

手写，第一个参数为 `模块名/mutation` 的字符串

```js
increment() {
  this.$store.commit("aboutStore/increment", { amount: 3 });
  // 或
  this.$store.commit({
    type: "aboutStore/increment",
    amount: 3,
  });
},
```

## 模块化调用 action

与 `mutation` 一致，只需将 `commit` 改为 `dispatch`
