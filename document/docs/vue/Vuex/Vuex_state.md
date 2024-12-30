# State

## 基本

`state` 类似于 Vue 实例中的 `data`，用于存放数据，或者说是应用的数据源

## 获取 state

一般使用 `computed` 获取 `state`

```js
export default {
  name: "ChildComponet",
  computed: {
    msg() {
      return this.$store.state.msg;
    },
  },
};
```

这样每当 `store.state.msg` 发生改变时，计算属性重新计算，更新 DOM

## mapState

当获取多个 `state` 时，就要写多个 `this.$store.state`

```js
export default {
  name: "ChildComponet",
  data() {
    return {
      msg1: "我是来自子组件的数据",
    };
  },
  mounted() {
    this.$emit("test", this.msg1);
  },
  computed: {
    msg() {
      return this.$store.state.msg;
    },
    name() {
      return this.$store.state.name;
    },
    id() {
      return this.$store.state.id;
    },
    gender() {
      return this.$store.state.gender;
    },
  },
};
```

使用 `mapState` 能更加方便

### 参数

当计算属性名和 `state` 数据名不一致时，可使用对象写法

```js
mapState({
  message: "msg",
  userName: "name",
  userId: "id",
  gender: "gender",
});
```

其中键为计算属性名，值为 `state` 数据名。返回值为 `{message: ƒ, userName: ƒ, userId: ƒ, gender: ƒ}`。

当计算属性名和 `state` 数据名一致时，可简写为数组形式

```js
mapState(["msg", "name", "id", "gender"]);
```

使用 `...` 拓展运算符，将返回值的由对象变为一个个函数。

```js
 computed: {
    // msg() {
    //   return this.$store.state.msg;
    // },
    // name() {
    //   return this.$store.state.name;
    // },
    // id() {
    //   return this.$store.state.id;
    // },
    // gender() {
    //   return this.$store.state.gender;
    // },
    ...mapState(["msg", "name", "id", "gender"]),
  },
```
