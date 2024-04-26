# 组件通信

## props

### props 父传子

父组件中通过给子组件标签添加属性来传递数据

```html
<MyList :todoList="todoList" :isDone="isDone"></MyList>
```

上面例子中父组件给 `MyList` 组件传递 `todoList` 和 `isDone` 两个数据，`:` 表示响应式的传递数据

子组件中，通过 `props` 选项接收数据。

```js
export default {
  props: ["todoList", "isDone"],
};
```

`props` 还可以写成对象形式，键名表示预期接收的 `props` 名，值为预期接收的 `props` 数据类型

```js
export default {
  props: {
    todoList: Array,
    isDone: Boolean,
  },
};
```

组合式 API 中，
子组件中通过 `defineProps()` 接收数据，`definePros` 接收一个数组，数组元素为字符串形式的待接收数据名。

```js
const props = defineProps(["todoList", "isDone"]);
```

在 html 中可以直接通过变量名使用数据，js 中则需要 `props.` 来访问变量

### props 子传父

父组件给子组件传递一个函数，子组件适当的时候调用函数，并将需要传递的数据作为函数参数。

```html
<script>
  import Child from "./components/Child.vue";

  export default {
    components: {
      Child,
    },
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      childToParent(e) {
        console.log(`${e}是子组件传递给父组件的数据`);
      },
    },
  };
</script>

<template>
  <!-- /* 给子组件传递一个函数 */ -->
  <Child :childToParent="childToParent"></Child>
</template>
```

子组件中接收函数，调用函数时，将需要传递给父组件的数据作为参数。

```html
<template>
  <button @click="childToParent(msg)">向父组件传递数据</button>
</template>
<script>
  export default {
    data() {
      return {
        msg: "子组件中的数据",
      };
    },
    props: ["childToParent"],
  };
</script>
```

## $attrs

当组件层层嵌套时，若祖先组件要想给孙子组件传递数据，使用 `props` 需要层层传递
祖先传递给子组件，子组件接收再传递给孙子组件。
使用 `$attrs` 可省略了子组件接收的过程，子组件不接受的数据都会被存放在子组件的 `$attrs` 中

```html
<!-- 祖先组件 -->
<template>
  <!-- 向子组件传递 test -->
  <Child :test="test"></Child>
</template>

<script setup>
  import { ref } from "vue";

  let test = ref("祖先组件数据");
</script>
```

```html
<!-- 子组件 -->
<template>
  <h2>{{ $attrs }}</h2>
  <Grandson></Grandson>
</template>

<script setup>
  import Grandson from "./Grandson.vue";

  //子组件不使用 defineProps 接收数据
</script>
```

页面显示 `{ "test": "祖先组件数据" }`
这时，子组件再将 `$attrs` 通过 `v-bind="$attrs"` 传递给孙子组件

```html
<!-- 子组件 -->
<template>
  <h2>{{ $attrs }}</h2>
  <Grandson v-bind="$attrs"></Grandson>
  <!-- 使用 v-bind -->
</template>

<script setup>
  import Grandson from "./Grandson.vue";
</script>
```

孙子组件正常接收 `props`

```html
<!-- 孙子组件 -->
<template>
  <h1>{{ test }}</h1>
</template>
<script setup>
  defineProps(["test"]);
</script>
```

孙子传递给祖先同理，祖先传递一个函数给孙子，孙子调用函数并传递数据

## 自定义事件 （子传父）

通过自定义事件实现子组件向父组件传递数据。

子组件中，定义’自定义事件‘，使用 `$emit` 触发自定义事件。其中 `$emit` 的第一个参数为自定义事件名称，后面的参数为自定义事件所需要的参数

```html
<template>
  <button @click="sendMsg">点我向父组件传递msg</button>
</template>

<script>
  export default {
    data() {
      return {
        msg:'子组件数据'
      }
    },
    methods{
      sendMsg() {
        this.$emit('customEvent', this.msg)
      }
    }
  }
</script>
```

父组件中，子组件标签上绑定自定义事件，及事件触发时调用的函数

```html
<template>
  <my-component @customEvent="myFunction"></my-component>
</template>
```

子组件中，通过 `$emit` 触发自定义事件
父组件中，绑定自定义事件，触发自定义事件时调用的回调函数，自定义事件和触发的回调可以重名

::: tip
子组件中（传递数据方）

- 定义自定义事件
  - `const emit = defineEmits(['事件名']);`
    - `defineEmits` 接收一个数组作为参数，数组元素为事件名的字符串形式
    - 事件名为多个单词时，推荐使用 `first-second` 的事件名 kebab-case
- 触发自定义事件
  - `emit('事件名')`

父组件中（接收数据方）

- 绑定自定义事件
  - 类似于绑定普通事件 `<子组件 @事件名=‘回调函数’></子组件>`
- 声明自定义事件的回调函数
  :::

## mitt

外部库，自定义事件加强版，可任意组件中通信

- 安装 `mitt`： `npm i mitt`
- 新建文件夹 `tools`
- `tools` 文件夹下新建 `emitter.js`
- `emitter.js` 中

  - 引入 `mitt`: `import mitt from 'mitt';`
  - 调用 `mitt`: 得到 emitter `const emitter = mitt();`
  - 暴露 `emitter`: `export default emitter`

- 使用前引入 `emitter`
- emitter

  - `emitter.on('事件名', 事件触发的回调函数)` 绑定事件，接受一个字符串作为参数，哪个组件接收数据，就在哪里绑定事件。
  - `emitter.emit('事件名', 参数...)` 触发事件，哪个组件传递数据，就在哪里触发事件。
  - `emitter.off`('事件名') 解绑事件
  - `emitter.all`

- 同自定义事件一样
  - 传递数据方 触发事件，将数据传递
  - 接受数据方 绑定事件。
