# 条件渲染

## `v-if`

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值时才被渲染。

```html
  <style>
    .box {
      width: 100px;
      height: 100px;
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="box" v-if="isShow"></div>
    <button @click="shift">切换</button>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          isShow: true,
        };
      },

      methods: {
        shift() {
          this.isShow = !this.isShow;
        },
      },
    });

    app.mount("#app");
  </script>
</body>
```

## `v-else`

你也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”。

```html
<body>
  <div id="app">
    <div class="box1" v-if="isShow"></div>
    <div class="box2" v-else></div>
    <button @click="shift">切换</button>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          isShow: true,
        };
      },

      methods: {
        shift() {
          this.isShow = !this.isShow;
        },
      },
    });

    app.mount("#app");
  </script>
</body>
```

一个 `v-else` 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则它将不会被识别。

## `v-else-if`

顾名思义，`v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用：

```html
<body>
  <div id="app">
    <div class="box1" v-if="isShow>0 &&isShow<3"></div>
    <div class="box2" v-else-if="isShow>3 &&isShow<6"></div>
    <div class="box3" v-else></div>

    <button @click="shift">切换</button>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          isShow: 10,
        };
      },

      methods: {
        shift() {
          this.isShow = Math.random() * 10;
          console.log(this.isShow);
        },
      },
    });

    app.mount("#app");
  </script>
</body>
```

## `v-show`

`v-show` 与 `v-if` 用法一致

## `v-if` vs. `v-show`

`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，**条件区块内的事件监听器和子组件都会被销毁与重建**。

`v-if` 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。

总的来说，v-if 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，**如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。**
