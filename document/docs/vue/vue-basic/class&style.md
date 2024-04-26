# Class 与 Style 绑定

## 绑定 Class

### 绑定对象

给 `:class` 传递一个对象来动态切换 class

```html
 <style>
      .red {
        width: 100px;
        height: 100px;
        background-color: red;
        margin-bottom: 20px;
      }

      .active {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div class="red" :class="{active: isActive}" @click="active"></div>
    </div>

    <script>
      const app = Vue.createApp({
        data() {
          return {
            isActive: false,
          };
        },
        methods: {
          active() {
            this.isActive = !this.isActive;
          },
        },
      });

      app.mount("#app");
    </script>
  </body>
```

上面的语法表示 `active` 是否存在取决于数据属性 `isActive` 的真假值。通过绑定点击事件来切换 `isActive` 的状态。

绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：

```html
<body>
  <div id="app">
    <!-- 绑定内联字面量 -->
    <div class="red" :class="{active: isActive}" @click="active"></div>
    <!-- 绑定对象 -->
    <div class="red" :class="classObject" @click="active"></div>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          isActive: false,
          classObject: { active: false },
        };
      },
      methods: {
        active() {
          this.isActive = !this.isActive;
          this.classObject.active = !this.classObject.active;
        },
      },
    });

    app.mount("#app");
  </script>
</body>
```

**绑定一个返回对象的计算属性**是最好的做法

```html
<body>
  <div id="app">
    <!-- 绑定内联字面量 -->
    <div class="red" :class="{active: isActive}" @click="active"></div>
    <!-- 绑定对象 -->
    <div class="red" :class="classObject" @click="active"></div>
    <!-- 计算属性 -->
    <div class="red" :class="show" @click="active"></div>
  </div>

  <script>
    const app = Vue.createApp({
      data() {
        return {
          isActive: false,
          classObject: { active: false },
        };
      },
      methods: {
        active() {
          this.isActive = !this.isActive;
          this.classObject.active = !this.classObject.active;
        },
      },
      computed: {
        show() {
          return { active: this.isActive };
        },
      },
    });

    app.mount("#app");
  </script>
</body>
```
