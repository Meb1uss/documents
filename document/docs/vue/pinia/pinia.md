# Pinia 基本使用

## 快速使用

`npm i pinia`

`main.js` 中

- 引入 pinia

```js
import { createPinia } from "pinia";
```

- 创建 pinia

```js
const pinia = createPinia();
```

- 安装 pinia

```js
app.use(pinia);
```

## 存储数据

- `src` 文件夹下新建 `store` 文件夹，在此文件夹下管理数据

- `store` 中新建 `xxx.js` 文件，其中文件名对应使用该数据的组件名。
  如 `User.vue` 组件中的数据，则 pinia 管理路径为 `src/store/user.js`

- user.js 文件中，引入 `defineStore` 创建并暴露 `store`

  ```js
  import { defineStore } from "pinia";
  // 变量名标准为 use文件名Store
  export const useUserStore = defineStore("user", {
    state() {
      return {
        userName: "zhang-san",
        age: 20,
        gender: "male",
      };
    },
  });
  ```

  `defineStore` 接收两个参数

- 第一个参数为 id，是一个字符串
- 第二个参数为一个配置对象
  - `state` 状态，为一个返回对象的函数。是真正存储数据的地方

## 读取数据

```js
//引入
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

console.log(useStore.userName.value); // undefined
// 拿到数据
console.log(useStore.userName); // "zhang-san"
console.log(useStore.$state.userName); // "zhang-san"
```

::: warning

reactive 对象的 ref 属性，在使用时不需要再加上 `.value`

:::

## 修改数据

修改数据有三种方式

- 直接修改，适合修改单独数据
  - `userStore.age++;`
- 批量修改，适合修改多个数据
  - 使用 `$patch` 方法， `$patch` 接收一个对象，以对象属性赋值的方式修改
- 使用 `action`

```js
function incrementAge() {
  // 直接修改
  userStore.age++;
  // $patch
  userStore.$patch({
    userName: "li-si",
    age: 30,
    gender: "female",
  });
}
```

使用 `action` 首先需要在定义 `store` 的地方配置 `actions` 选项。类似于 选项式 API 中的 `methods`，`this` 指向 `sotre` ，所以可以通过 `this.xxx` 访问 `state` 中的数据

```js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      userName: "zhang-san",
      age: 20,
      gender: "male",
    };
  },
  // 配置 actions
  actions: {
    addAge() {
      //this 是当前的 store
      this.age++;
    },
  },
});
```

再在使用数据的地方调用

```js
import { useUserStore } from "@/store/user.js";

const userStore = useUserStore();

function incrementAge() {
  userStore.addAge();
}
```

<!-- ## `storeToRefs`

代码中使用 `store` 中的数据需要 `store.xxx`的方式，`<h1>{{ userStore.userName }}</h1>`

直接解构会使数据丧失响应式，使用 `toRefs` 会将整个 `store` 里的所有属性都变为响应式，包括一些方法。

使用 `storeToRefs` 完美解决上面问题，`storeToRefs` 只关注 `store` 中的数据，不会对方法进行 `ref` 包裹

```js
import { useUserStore } from "@/store/user.js";
// 引入 storeToRefs
import { storeToRefs } from "pinia";

const userStore = useUserStore();
// 解构
const { userName, age, gender } = storeToRefs(userStore);
```

这样 `<h1>{{ userStore.userName }}</h1>` 就可以改成
` <h1>{{ userName }}</h1>` -->

## getters

store 的配置项 `getters` 类似于 vue 中的计算属性

```js
export const useUserStore = defineStore("user", {
  state() {
    return {
      userName: "zhang-san",
      age: 20,
      gender: "male",
    };
  },
  actions: {
    addAge() {
      this.age++;
    },
  },
  getters: {
    // 可以直接使用 this
    // upperName() {
    //   return this.userName.toUpperCase();
    // },
    // 也可以传递一个 state 参数
    // upperName(state) {
    //   return state.userName.toUpperCase();
    // },
    // 不使用 this 则可写成箭头函数
    upperName: (state) => state.userName.toUpperCase(),
  },
});
```

```html
<template>
  <h1>{{ upperName }}</h1>
</template>

<script setup>
  import { useUserStore } from "@/store/user.js";
  // 引入 storeToRefs
  import { storeToRefs } from "pinia";

  const userStore = useUserStore();
  // 解构
  const { upperName } = storeToRefs(userStore);
</script>
```

## `$subscribe`

`$subscribe` 类似于 vue3 中的 watch，但它不需要在 store 里配置

```js
userStore.$subscribe(() => {
  console.log("数据变化");
});
```

`$subscribe` 接收两个参数，第一个 `mutata`,表示此次修改的信息，`state` 是修改后的数据

```js
function incrementAge() {
  userStore.addAge();
}

userStore.$subscribe((mutate, state) => {
  console.log(mutate, state);
});
```

## store 组合式写法

选项式

```js
export const useUserStore = defineStore("user", {
  state() {
    return {
      userName: "zhang-san",
      age: 20,
      gender: "male",
    };
  },
  actions: {
    addAge() {
      this.age++;
    },
  },
});
```

组合式写法，`defineStore` 第二个参数从对象变为一个函数

```js
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
  //state 如同 vue3 data 的组合式写法
  let userName = ref("zhang-san");
  let age = ref(20);
  let gender = ref("male");

  //actions 写为正常函数，
  function addAge() {
    //不能使用 this，但上面已经定义了变量
    age++;
  }

  // return 这些数据
  return { userName, age, gender, addAge };
});
```
