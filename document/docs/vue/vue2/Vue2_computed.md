# computed

计算属性，就是拿着已有的属性去加工计算得出一个全新的属性，
计算属性在初次读取时调用并缓存，随后只在依赖数据发生变化时调用。

`computed` 选项是一个对象。

计算属性的数据可以是一个对象，包含一个 `get` 函数和一个 `set` 函数，它们的 `this` 都指向 Vue 实例

```html
<div id="app">
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />

  <h1>{{ fullName }}</h1>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      firstName: "",
      lastName: "",
    },
    // 计算属性
    computed: {
      fullName: {
        get() {
          return this.firstName + " " + this.lastName;
        },
        set(val) {
          const arr = val.split(" ");
          this.firstName = arr[0];
          this.lastName = arr[1];
        },
      },
    },
  });
</script>
```

当读取 `fullName` 时，`get` 调用。修改 `fullName` 时，`set` 调用。
修改计算属性的本质，仍然是修改其依赖项，使之重新计算

## 简写

如果只是展示，而不修改计算属性，可使用简写为函数形式，函数即为 `get`

```html
<div id="app">
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />

  <h1>{{ fullName }}</h1>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      firstName: "",
      lastName: "",
    },
    // 计算属性简写
    computed: {
      fullName() {
        return this.firstName + " " + this.lastName;
      },
    },
  });
</script>
```
