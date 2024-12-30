# directives

配置项 `directives` 用于自定义指令，`directives` 是一个对象

## 对象式

自定义指令的配置对象式写法，可以更准确的配置指令被调用的时机。(钩子)

- `bind` —— 指令与元素成功绑定时调用
- `inserted` —— 指令所在元素被插入页面时调用
- `update` —— 指令所在的模板被重新解析时

钩子中的参数

- `element`：指令所绑定的元素，可以用来直接操作 DOM。
- `binding`：一个对象，包含一些跟指令相关的信息
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点
- `oldVnode`：上一个虚拟节点

```html
<div id="app">
  <input type="text" v-fbind="n" />
  <button @click="n++">n++</button>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      n: 1,
    },
    directives: {
      fbind: {
        // 指令与元素成功绑定时调用
        bind(element, binding) {
          element.value = binding.value;
        },
        // 指令所在元素被插入页面时调用
        inserted(element, binding) {
          element.focus();
        },
        // 指令所在的模板被重新解析时
        update(element, binding) {
          element.value = binding.value;
        },
      },
    },
  });
</script>
```

## 函数式

自定义的指令可以是函数形式，函数名为指令名，函数可以接受两个参数：

- 第一个参数为绑定指令的真实 DOM
- 第二个参数为一个对象，包含一个 `value` 属性

```html
<div id="app">
  <h1 v-big="n"></h1>
  <button @click="n++">n++</button>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      n: 1,
    },
    directives: {
      big(element, binding) {
        element.innerText = binding.value * 10;
      },
    },
  });
</script>
```

给 `h1` 绑定 `v-big` 自定义指令，指令的作用是将 `n` 放大十倍展示。
指令被调用的时机：

- 指令与元素成功绑定时
- 指令所在的 vue 模板被重新解析时

## 模拟 v-model

```html
<div id="app">
  <input type="text" v-my-model:value="name" />
</div>

<script>
  new Vue({
    data: {
      name: "",
    },
    directives: {
      "my-model"(el, binding, vnode) {
        const { context } = vnode;
        // 修改name时，更改 input 中的value值
        el.value = context[binding.expression];
        // input 输入时，更改name
        el.oninput = (e) => {
          const { value } = e.target;
          context[binding.expression] = value;
        };
      },
    },
  }).$mount("#app");
</script>
```

## 注意

- 多个单词的指令名用 `-` 连接 `v-first-second`
- 定义多个单词的指令名时，加上 `""`
- 指令回调中的 `this` 指向 `window`
