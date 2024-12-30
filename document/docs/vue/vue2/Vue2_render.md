# render

选项 `render` 是使用 JS 的方式创建虚拟 DOM 的函数

`render` 函数接收一个函数（`createElement()`）作为参数，并返回这个函数

```js
render(createElement) {
  return createElement(...)
}
```

使用 `render` 函数创建 `h1` 标签

```html
<div id="app"></div>

<script>
  new Vue({
    render(createElement) {
      return createElement("h1", "Hello,Vue");
    },
  }).$mount("#app");
</script>
```

## createElement 返回值

`createElement` 返回一个虚拟 DOM 节点，简称为 “VNode”

## createElement 参数

`createElement` 接收三个参数

- 第一个参数可以是一个 HTML 标签，组件选项对象，或者是 `resolve` 上面之一的 `async` 函数，必填项
- 第二个参数是一个配置对象，可选
- 第三个参数是子级虚拟 DOM 元素（VNodes），可选

用 `render` 函数实现 `v-for`

```html
<div id="app"></div>

<script>
  new Vue({
    data() {
      return {
        person: [
          { id: "001", name: "张三" },
          { id: "002", name: "李四" },
          { id: "003", name: "王五" },
        ],
      };
    },
    render(createElement) {
      return createElement(
        "ul",
        {},
        this.person.map((item) =>
          createElement("li", { key: item.id }, `${item.name}`)
        )
      );
    },
  }).$mount("#app");
</script>
```
