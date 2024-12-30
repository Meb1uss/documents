## 创建 Vue 实例

使用 `Vue` 函数创建 `vue` 实例

```js
const vm = new Vue({
  //...
  el: "#app",
});
```

`Vue` 函数接受一个配置对象作为参数， `el` 表示将当前 vue 实例挂载到哪个容器，值通常为 css 选择器字符串。上面代码将 `vm` 挂载到 `id` 为 `app` 的 `html` 标签上

## data

配置项 `data` 可以写成一个对象，用于存放数据，供挂载的容器使用

```js
const vm = new Vue({
  el: "#app",
  data: {
    msg: "hello, world",
  },
});
```

## {{}}

在页面中，可以使用 `{{  }}` 展示数据

```html
<div id="app">
  <h1>{{ msg }}</h1>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      msg: "hello, world",
    },
  });
</script>
```

使用 `{{}}` ，可以向挂载 vue 实例 的 html 中传递动态的数据，但只适用于开始标签和结束标签之中，不适用于标签的属性
`{{}}` 中可以是任何 JS 表达式

## v-bind

动态绑定标签内的属性

```html
<div id="app">
  <a v-bind:href="url">点我</a>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      url: "https://meb1uss.github.io/documents/",
    },
  });
</script>
```

`v-bind` 将 `a` 标签的 `href` 属性与实例中的 `url` 保持一致，绑定的值改变，跳转网页也随之改变。

- `v-bind:` 可简写为 `:`
- `v-bind` 是单向绑定

```html
<a :href="url">点我</a>
```

## v-model

双向绑定，`v-bind` 将标签内的属性绑定到实例的 `data` 中，改变 `data` 中的数据，`v-bind` 绑定的属性随之改变，但改变 `v-bind` 的属性，data 中的数据不会改变

```html
<div id="app">
  <input type="text" :value="msg" />
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      msg: "单向绑定",
    },
  });
</script>
```

上面案例中，改变输入框内容，`data` 中的 `msg` 并不会随之改变

```html
<div id="app">
  <input type="text" v-model:value="msg" />
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      msg: "双向绑定",
    },
  });
</script>
```

`v-model` 是双向绑定，改变其中一方，另一方随之改变。 `v-model` 只能应用于表单输入绑定。
`v-model` 默认绑定 `value` 属性，所以上面代码可以忽略 `:value` 简写为

```html
<input type="text" v-model="msg" />
```

## el 和 data

- 配置项 `el` 可以使用 `vm.$mount()` 方式写在配置对象外，这样的方式更为灵活

```js
const vm = new Vue({
  data: {
    msg: "hello, world",
  },
});

vm.$mount("#app");
```

- `data` 也可以写成函数返回一个对象的形式，`data` 函数的 `this` 指向 vue 实例，所以不能写成箭头函数

```html
<div id="app">
  <h1>{{ msg }}</h1>
</div>

<script>
  const vm = new Vue({
    data() {
      console.log(this);
      return {
        msg: "Hello, Vue",
      };
    },
  });

  vm.$mount("#app");
</script>
```

在使用组件时，为了让组件中的 `data` 有独立的作用域，必须写成函数形式
