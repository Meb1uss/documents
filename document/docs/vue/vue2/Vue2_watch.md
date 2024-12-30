# watch

监视某个属性的变化

配置项 `watch` 是一个对象，监视的属性也是一个对象
其中包含

- `handler(newVal, oldVal)` 函数，在被监视的属性发生变化时调用，可接受两个参数
  - 第一个参数为改变后的新值
  - 第二个参数为改变前的值
- `immediate` 布尔值，为 true 时，初始化时立马执行一次 `handler`
- `deep` 布尔值，为 true 时，开启深度监视，监视对象中的属性的变化

```html
<div id="app">
  <input type="text" v-model="user.name" />

  <h1>{{ user.name }}</h1>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      user: {
        name: "",
      },
    },
    // watch
    watch: {
      user: {
        // 深度监视
        deep: true,
        // 立即执行
        immediate: true,
        // handler
        handler(newVal, oldVale) {
          console.log(newVal, oldVale);
          console.log("name已改变");
        },
      },
    },
  });
</script>
```

## 简写形式

被监视的属性不需要 `immediate` 和 `deep` 时，可以简写为函数形式，函数名为监视属性名，函数体即为 `handler`

```html
<div id="app">
  <input type="text" v-model="name" />

  <h1>{{ name }}</h1>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      name: "",
    },
    // watch 简写
    watch: {
      name(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
    },
  });
</script>
```

## 对比 computed

`watch` 中可以开启异步任务
