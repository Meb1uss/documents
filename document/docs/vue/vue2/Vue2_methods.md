# methods

`methods` 配置项存放 Vue 实例用到的方法，`methods` 是一个对象

```js
const vm = new Vue({
  data() {
    console.log(this);
    return {
      msg: "hello, vue",
    };
  },
  methods: {
    upper() {
      this.msg = this.msg.toUpperCase();
    },
  },
});

vm.$mount("#app");
```

`methods` 中方法的 `this` 指向 Vue 实例。所以不应该使用箭头函数定义方法

## v-on

使用 `v-on` 监听 DOM 事件

```html
<div id="app">
  <h1 v-on:click="upper">{{ msg }}</h1>
</div>
<script>
  const vm = new Vue({
    data() {
      console.log(this);
      return {
        msg: "hello, vue",
      };
    },
    methods: {
      upper() {
        this.msg = this.msg.toUpperCase();
      },
    },
  });

  vm.$mount("#app");
</script>
```

- `v-on:` 可简写为 `@`

```html
<h1 @click="upper">{{ msg }}</h1>
```

- 当事件的回调函数没有参数时，回调函数会默认接受一个参数为 `event` 对象

```html
<div id="app">
  <!-- 没有参数 -->
  <h1 @click="upper">{{ msg }}</h1>
</div>
<script>
  const vm = new Vue({
    data() {
      console.log(this);
      return {
        msg: "hello, vue",
      };
    },
    methods: {
      // event 对象
      upper(event) {
        console.log(event.target); // <h1>HELLO, VUE</h1>
        this.msg = this.msg.toUpperCase();
      },
    },
  });

  vm.$mount("#app");
</script>
```

- 当事件回调有参数时，使用 `$event` 占位

```html
<div id="app">
  <!-- 使用 `$event` 占位 -->
  <h1 @click="upper($event, 22)">{{ msg }}</h1>
</div>
<script>
  const vm = new Vue({
    data() {
      console.log(this);
      return {
        msg: "hello, vue",
      };
    },
    methods: {
      // event 对象
      upper(event, number) {
        console.log(event.target, number); // <h1>HELLO, VUE</h1>  22
        this.msg = this.msg.toUpperCase();
      },
    },
  });

  vm.$mount("#app");
</script>
```

## 事件修饰符

- `.prevent` 阻止默认事件
- `.stop` 阻止事件冒泡
- `.once` 事件只触发一次
- `.capture` 事件捕获模式
  修饰符可以链式调用

## 键盘事件

键盘事件 `keyup` 和 `keydown` 有时会有按下某个键触发的需求，Vue 提供了别名

- `.enter` 回车
- `.delete` 退格或 delete
- `.esc` esc
- `.space` 空格
- `.tab` 换行
- `.up` 上
- `.down` 下
- `.left` 左
- `.right` 右

```html
<div id="app">
  <input type="text" @keyup.enter="show" />
</div>
<script>
  const vm = new Vue({
    methods: {
      show(e) {
        console.log(e.target.value);
      },
    },
  });

  vm.$mount("#app");
</script>
```

`.tab` 必须配合 `keydown` 事件配合

未提供别名的按键，可通过按键原始的 `key` 值绑定事件，但必须转换为 kebab-case 命名方式

```html
<div id="app">
  <input type="text" @keyup.caps-lock="show" />
  <input type="text" @keyup.home="show" />
</div>
<script>
  const vm = new Vue({
    methods: {
      show(e) {
        console.log(e.target.value);
      },
    },
  });

  vm.$mount("#app");
</script>
```

`ctrl`, `alt`, `shift`, `meta` 配合 `keydown` 事件使用
