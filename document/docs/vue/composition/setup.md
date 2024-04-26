## setup 概述

`setup` 是 vue3 中一个新的配置项，值是一个 _函数_。组件所需的数据、方法、计算属性、监视器等等，均配置在 `setup` 中

选项式 API

```js
export default {
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    addAge() {
      this.age++;
    },
  },
};
```

组合式 API

```js
export default {
  setup() {
    //数据
    let age = 20;
    //方法
    function addAge() {
      console.log(this); //undefined
      age++;
    }

    //return {age:age, addAge:addAge}
    return { age, addAge };
  },
};
```

组合式 API 的特点：

- `setup` 中的数据、方法等需要 `return` 才能使用
- `setup` 中的 `this` 为 `undefined`
- `setup` 中的数据不是响应式的
- `setup` 的生命周期在 `beforecreate` 之前

`setup` 和选项式 `API` 中的 `data`、`methods`

- `data` 和 `methods` 能与 `setup` 同时存在
- `data` 可以读取 `setup` 中的数据

```html
<template>
  <h2>{{ a }}</h2>
  <h2>{{ b }}</h2>
</template>
<script>
  export default {
    data() {
      a: 'data中的数据',
      b: this.c
    },
    setup() {
      let c = 'setup中的数据';
      return {c};
    }
  }
</script>
```

- `setup` 无法读取 `data` 中的数据
  - 因为 `setup` 中的 `this` 为 `undefined`

## setup 语法糖

在 `<script>` 标签中写上 `setup` ,等于 `setup()` 且会自动 `return`

```html
<script>
  export default {
    setup() {
    let name='张三';
    age = 18;

    function addAge(){
      agg++;
    }
  }

    return {name, age, addAge}
  }
</script>
```

等价于

```html
<script setup>
  let name = "张三";
  let age = 18;

  function addAge() {
    age++;
  }
</script>
```
