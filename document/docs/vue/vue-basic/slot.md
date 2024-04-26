## 插槽 slots

### 基本使用

插槽类似于组件内的占位符，表示父组件提供的插槽内容在哪里渲染

```html
<!-- 子组件 -->
<template>
  <h2>我是content组件内容</h2>
  <slot></slot>
</template>
```

插槽内容可以是任意合法的模板内容，不局限于文本。例如我们可以传入多个元素，甚至是组件：

```html
<!-- 父组件多次使用插槽 -->
<template>
  <content>
    <button>插槽使用1</button>
    <h2>插槽使用2</h2>
    插槽使用3
  </content>
</template>
```

### 渲染作用域

插槽在哪个组件中使用，就只能访问该组件的作用域。
插槽内容可以访问到父组件的数据作用域，无法访问子组件的数据。

```html
<!-- 子组件 -->
<script>
  export default {
    data() {
      return {
        msg: "子组件数据",
      };
    },
  };
</script>
```

```html
<!-- 父组件 -->
<template>
  <content>{{ msg }}</content>
</template>

<script>
  import Content from "./components/Content.vue";

  export default {
    data() {
      return {
        msg: "父组件数据",
      };
    },
    components: {
      Content,
    },
  };
</script>
```

页面显示父组件中的数据。

### 插槽的默认内容

在没有提供内容时，插槽的默认内容将会被渲染，（在使用具名插槽且没使用 `v-slot` 指令时，也会渲染默认内容）

子组件提供默认内容

```html
<h2>
  <slot>插槽默认内容</slot>
</h2>
```

在父组件没有提供内容时

```html
<content></content>
```

插槽默认内容将会被渲染，等同于

```html
<h2>插槽默认内容</h2>
```

而父组件提供内容时，渲染父组件内容

### 具名插槽

给插槽设置 `name` 属性，在父组件使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令，
`v-slot:`后的值不需要引号 ：

```html
<template>
  <slot name="button"></slot>
  <slot name="h2"></slot>
</template>
```

父组件：

```html
<template>
  <content>
    <template v-slot:button>
      <button>具名插槽</button>
    </template>
    <template v-slot:h2>
      <h2>具名插槽</h2>
    </template>
  </content>
</template>
```

`v-slot:` 可简写为 `#` ：

```html
<template>
  <content>
    <template #button>
      <button>具名插槽</button>
    </template>
    <template #h2>
      <h2>具名插槽</h2>
    </template>
  </content>
</template>
```

未提供 `name` 属性的 `<slot\>` 会隐式地命名为 `"default"`

```html
<template>
  <slot name="button"></slot>
  <slot name="h2"></slot>
  <slot></slot>
</template>
```

```html
<content>
  <template #h2>
    <h2>具名插槽h2</h2>
  </template>
  <template #default> 默认为default </template>
  <template v-slot:button>
    <button type="button">具名插槽button</button>
  </template>
</content>
```

### 作用域插槽

在父组件中，如需使用子组件的内容，则可使用作用域插槽。
类似于 `props` 传值，给 `slot` 添加属性。在父组件中使用 `v-slot` 接收一个 `props` 对象：

子组件

```html
<template>
  <slot name="h2" :msg="msg"></slot>
</template>

<script>
  export default {
    data() {
      return {
        msg: "子组件数据",
      };
    },
  };
</script>
```

父组件

```html
<template>
  <content>
    <template v-slot:h2="slorProps">
      <h2>{{ slorProps.msg }}</h2>
    </template>
  </content>
</template>
```
