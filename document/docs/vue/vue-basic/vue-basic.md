# Vue 基础

## 创建

### 应用实例

使用 `const app = Vue.createApp()` 创建 Vue 实例

```js
const app = Vue.createApp({
  // 根组件选项
});
```

### 挂载应用

应用实例使用 `.mount()` 挂载到 html。该方法接受一个参数，为 css 选择器字符串或一个实际的 DOM 元素

```html
<div id="app"></div>
```

```js
const app = Vue.createApp({
  //根组件选项
});
app.mount("#app");
```

## 配置项

### data

`Vue.createApp()` 接收一个对象作为配置选项，选项 `data` **函数**返回一个新对象，Vue 实例对象中用到的数据定义在 `data` 中

```js
const app = Vue.createApp({
  data: function () {
    return {
      count: 0,
    };
  },
});
```

可使用 ES6 语法简写

```js
const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
});
```

#### `{{}}` 模板字符串/插值表达式

- 使用 `{{}}` ，可以向挂载 vue 的 html 中传递动态的数据，**但只适用于开始标签和结束标签之中**，**不适用于标签的属性**

```html
<div id="app">{{ count }}</div>
```

```js
const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
});

app.mount("#app");
```

- `{{}}` 中可以是任何表达式

```html
<div id="app">{{ count + 1 }}</div>
```

#### v-bind

`v-bind` 用于响应式地绑定一个属性：（将数据动态的绑定到标签属性上）

```html
<img v-bind:src="url" />
```

`v-bind` 将 `img` 的 `src` 属性与组件中的 `url` 属性保持一致，绑定的值改变，图片也随之改变。

##### 简写

`v-bind` 可简写为 `:`

```html
<img :src="url" />
```

#### v-html

v-html 将内容解释为 html 而不是纯文本输出

### 方法 methods

选项 `methods` 是一个**对象**，对象中存放 Vue 实例用到的方法

```js
const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
  },
});
```

- Vue 自动为 `methods` 中的方法绑定了永远指向组件实例的 `this`。这确保了方法在作为事件监听器或回调函数时始终保持正确的 `this`。
- 不应该在定义 `methods` 时使用箭头函数，因为箭头函数没有自己的 `this` 上下文。
- 可使用 `{{}}` 直接调用方法，但在 `{{}}` 中调用的方法，在组件的每次更新时都会被重新调用
- 方法多用于 DOM 事件

#### v-on

`v-on` 用于监听 DOM 事件

- `v-on:` 可简写为 `@`

```html
<button v-on:click="alertMsg">click me!</button>

<!-- 简写 -->
<button @click="alertMsg">click me!</button>
```

- 当函数不传入参数时，事件会有默认的 `event` 对象

```html
<button @click="alertMes">click me!</button>

<script>
  const app = Vue.createApp({
    methods: {
      alertMes(e) {
        alert("HI");
        console.log(e);
      },
    },
  });

  app.mount("#app");
</script>
```

- 当函数传参时，使用 `$event` 来获取 `event` 对象

```html
<button @click="alertMes(msg, $event)">click me!</button>

<script>
  const app = Vue.createApp({
    data() {
      return {
        msg: "hi",
      };
    },
    methods: {
      alertMes2(msg, e) {
        alert(msg);
        console.log(e);
      },
    },
  });

  app.mount("#app");
</script>
```

### 计算属性 computed

`{{}}` 中的逻辑如果过于复杂，会显得臃肿。
使用**计算属性**来描述依赖响应式状态的复杂逻辑。

**计算属性**拿着已有的属性去加工计算得出一个全新的属性，且

- **计算属性有缓存，当依赖的数据没出现变化时，计算属性不会重新调用**，这也是尽管 `methods` 可以完成这个功能，但是我们仍需要计算属性的原因。

```js
const app = Vue.createApp({
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
});
```

::: tip

计算属性中的函数类似于原生 JS 中的访问器属性 `getter`。
:::

### 侦听器 watch

`watch` 在每次响应式属性发生变化时触发一个函数。

```js
export default{
  data() {
    return {
      count： 0;
    }
  },
  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log('count已经改变');
      }
    }
  },
  methods: {
    add() {
      this.count++;
    }
  }
}
```

当侦听的变量为引用类型时，由于引用类型属性值的改变并不会使得引用改变。所以并不会使侦听器运行。可以在侦听器中配置 `deep` 属性，属性值为 `true`。此时便可深层侦听。

```js
const app = Vue.createApp({
  data() {
    return {
      count: {
        a: 0,
        b: 0,
      },
    };
  },
  methods: {
    add() {
      this.count.a++;
    },
  },

  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log("count已经改变");
      },
      deep: true, //深度监视
    },
  },
});
```

配置属性 `immediate` 可使 watch 立即执行一次

```js
const app = Vue.createApp({
  data() {
    return {
      count: {
        a: 0,
        b: 0,
      },
    };
  },
  methods: {
    add() {
      this.count.a++;
    },
  },

  watch: {
    count: {
      handler(newValue, oldValue) {
        console.log("count已经改变");
      },
      deep: true, //深度监视
      immediate: true, // 立即执行一次
    },
  },
});
```

不需要其他配置项，只需要 `handler` 时，可使用简写方式

```js
export default{
  data() {
    return {
      count： 0;
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log('count已经改变');
    }
  },
  methods: {
    add() {
      this.count++;
    }
  }
}
```

::: tip
`watch`中的函数类似于原生 JS 中的访问器属性 `setter`。
:::

## 总结

- `Vue` 配置项
  - `data`
    - 返回一个对象的函数，vue 实例用到的数据存放在返回的对象中。
  - `methods`
    - 存放 vue 实例用到的方法
  - `computed`
    - 拿着已有属性，加工出的属性
  - `watch`
    - 监测已有数据的辩护
- `vue` 指令
  - `{{}}` 类似于反引号中的 `${}`
  - `v-bind`：响应式的给元素绑定属性，简写为 `:`
  - `v-on`：给元素绑定事件，简写为 `@`
  - `v-html`:将内容解释为 html 而不是纯文本输出
