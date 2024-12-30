# mixin

把多个组件共用的配置提取成一个混入对象

```js
// mixin.js
export const myMixin = {
  mounted() {
    console.log("mounted");
  },
  methods: {
    sayHello() {
      alert(`我是${this.name}组件，但我来自于mixin`);
    },
  },
};
```

子组件中引入混入对象，配置项 `mixins` 以数组形式接收混入对象

```html
<template>
  <button @click="sayHello">点我</button>
</template>

<script>
  // 引入混入对象
  import { myMixin } from "../mixin.js";

  export default {
    data() {
      return {
        name: "ChildOne",
      };
    },
    // 配置项 minxins 接收混入对象
    mixins: [myMixin],
  };
</script>
```

## 冲突

当混入对象与组件有命名冲突时，以组件优先

```js
// mixin.js
export const myMixin = {
  data() {
    return {
      name: "mixin",
    };
  },
};
```

```html
<!-- ChildOne.vue -->
<template>
  <h1>{{ name }}</h1>
</template>

<script>
  import { myMixin } from "../mixin.js";

  export default {
    data() {
      return {
        name: "ChildOne",
      };
    },
    mixins: [myMixin],
  };
</script>
```

页面显示 `ChildOne`。

同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。

```js
export const myMixin = {
  mounted() {
    console.log("来自混入对象的钩子");
  },
};
```

```html
<template>
  <div></div>
</template>

<script>
  import { myMixin } from "../mixin.js";

  export default {
    mixins: [myMixin],
    mounted() {
      console.log("来自组件的钩子");
    },
  };
</script>
```

控制台依次输出 “来自混入对象的钩子” “来自组件的钩子”

## 全局混入

```js
// main.js
import Vue from "vue";
import { myMixin } from "../mixin.js";

Vue.mixin(myMixin);
```

一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。
