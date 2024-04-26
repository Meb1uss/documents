# 组件基本使用

## 组件的好处

传统方式的问题

- 依赖混乱，不好维护
- 代码复用率不高

组件使用分三步

- 创建组件
- 注册组件
- 使用组件

## 创建组件

<!-- #### 非单文件组件

一个文件中包含有多个 Vue 组件

vue2

```js
const Hello = Vue.extend({
  data(){
    return{
      msg: "Hello, World!";
    }
  },
  template: `
  <template>
    <p>{{msg}}</p>
  </template>`
});

``` -->

### 单文件组件

将 Vue 组件单独定义在一个 `.vue` 文件中
使用大驼峰命名或者`-`分割单词

```html
<template>
  <p>{{msg}}</p>
</template>

<script>
  export default {
    data() {
      return {
        msg: "Hello, World!";
      }
    },
  };
</script>
```

一个 Vue 组件以一个包含 Vue 特定选项的 JavaScript **对象**来定义。
上面的例子使用默认导出的方式导出了它自己。

## 注册组件

### 全局注册

使用 Vue 实例的 `.component` 方法注册。

```js
import { createApp } from "vue";
// 导入组件
import MyComponent from "./App.vue";

const app = createApp({});
// 全局注册
app.component("MyComponent", MyComponent);
```

全局注册的组件，再任意地方都可以使用，不需要再导入。

### 局部注册

使用一个子组件之前，需要在父组件中导入它，假如上例的组件被放入 `components` 文件夹中的 `Gretting.vue` 中，在父组件中使用时:

- 首先需要导入组件

```html
<script>
  //导入组件
  import Greeting from "./components/Greeting.vue";
</script>
```

- 然后需要在父组件的 `components` 选项上注册组件，
  `components` 选项为一个对象：

```html
<script>
  import Greeting from "./components/Greeting.vue";

  export default {
    //注册组件
    components: {
      Gretting,
      // es6 语法，等价于 Gretting: Gretting
      // 其中 key 是组件的名， value 是创建组件时决定的（文件名
    },
  };
</script>
```

## 使用组件

```html
<script>
  import Greeting from "./components/Greeting.vue";

  export default {
    //注册组件
    components: {
      Gretting,
      // es6 语法，等价于 Gretting: Gretting
    },
  };
</script>

<template>
  <Gretting></Gretting>
</template>
```

在单文件组件中，推荐为子组件使用 `PascalCase` 的标签名

::: tip
`PascalCase` 与驼峰命名法类似。驼峰命名法首字母小写，而 `PascalCase` 首字母大写

`firstsecond`

- `firstSecond` —— 驼峰命名法
- `FirstSecond` —— `PascalCase`

:::

<!-- ## 组件传值

### prop

### 自定义事件

### -->

<!-- #### prop

使用 `props` 可以在父组件向子组件传递数据

```html
<template>
  <Gretting :msg="msg"></Gretting>
  <Gretting msg="Hey"></Gretting>
</template>

<script>
  import Greeting from "./components/Greeting.vue";

  export default {
    //注册组件
    components: {
      Gretting,
      // es6 语法，等价于 Gretting: Gretting
    },
    data() {
      return {
        msg: "Hello, World!",
      };
    },
  };
</script>
```

::: tip

- `<Gretting :msg="msg"></Gretting>` 向组件中动态的传递 `props`传递的为 `data` 中的 `msg`
- `<Gretting msg="Hey"></Gretting>` 则是传递字符串 `"Hey"`

:::

子组件中需要 `props` 选项来接收数据，它可以是一个包含所有数据名的数组

```html
<script>
  export default {
    props: ["msg"],
  };
</script>
```

也可以使用对象的方式：

```html
<script>
  export default {
    props: {
      msg: String,
    },
  };
</script>
```

其中，对象的键是变量名，值为期待接收数据的数据类型。

#### 监听事件

子组件可以通过 `$emit` 方法来自定义事件，该方法接收一个字符串作为自定义事件名

```html
<template>
  <p>我今年 {{ age }} 岁了</p>
  <button @click="addAge">长大了</button>
</template>

<script>
  export default {
    props: {
      age: Number,
    },
    methods: {
      addAge() {
        // 定义一个 change-age 事件
        this.$emit("change-age");
      },
    },
  };
</script>
```

这时父组件中可以通过自定义事件来调用函数

```html
<template>
  <user :age="age" @change-age="addAge"></user>
</template>

<script>
  import User from "./components/User.vue";

  export default {
    components: {
      User,
    }
    data() {
      return {
        age: 20,
      }
    }
    methods: {
      addAge() {
        this.age++;
      }
    }
  };
</script>
```

#### $refs

父组件访问子组件还可以通过 ref

1. 父组件中，给需要访问的子组件标签加上 `ref` 属性

```html
<template>
  <ref-test ref="msg"></ref-test>
  <button @click="showRef">点击</button>
</template>
```

2. 通过 `this.$refs.ref属性值.子组件变量名` 来获取子组件数据

```javascript
showRef() {
  console.log(this.$refs.msg.message);
},
``` -->
