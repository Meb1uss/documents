# ref 和 reactive

## ref 基本类型的响应式数据

`vue2` 中 `data` 的数据，会被 `vue` 拿去做数据劫持、数据代理通过 `getter/setter` 变为响应式数据。
`vue3` 中，通过 `ref` 函数使基本数据类型变为响应式

- 从 Vue 中引入 `ref`
- 将需要响应式的数据值用 `ref` 函数的括号包裹
  - `let xxx = ref(初始值);`

```html
<script setup>
  import { ref } from "vue";

  let name = "张三";
  let age = ref(18);
  cconsole.log(name); //'张三'
  console.log(age); // RefImpl{...,value:18}

  function addAge() {
    age++;
  }
</script>
```

因为只更改 age 属性，所以仅对 age 使用 ref 函数。

- 被 `ref()` 包裹的数据会从基本数据类型变为一个对象（`RefImpl` 实例对象），对象的 `value` 属性是响应式的。
- 在 html 中展示上面的 `age` 时，可以使用 `age` 而无需 `age.value`
- 而在 `script` 标签中修改时，需要使用 `age.value`

```html
<script setup>
  import { ref } from "vue";

  let name = "张三";
  let age = ref(18);
  console.log(name); //'张三'
  console.log(age); // RefImpl{...,value:18}

  function addAge() {
    //age.value 而不是 age
    age.value++;
  }
</script>
```

## reactive 引用类型的响应式

`reactive` 与 `ref` 语法差不多，但**只能用于引用类型数据**

- 语法： `let obj = reactive({...})`

- 数据并不会被包装成 `RefImpl` 而是 `proxy` 对象，因此在改变数据时不需要加上 `.value`
- 当更改整个对象而不仅是改变其属性时，响应式失效

  - 因为原对象改变其指向后，新的对象并没有被 `proxy` 包装，故失去响应式

  ```javascript
  function changeUser() {
    // 有效
    // user.name = "zhao_si";
    // user.age = 20;
    // 无效
    user = { name: "zhao_si", age: 20 };
    console.log(user);
  }
  ```

  - 可以使用 `Object.assign()` 方法替换原对象

  ```javascript
  function changeUser() {
    // 无效
    //user = { name: "zhao_si", age: 20 };
    // 有效
    user = Object.assign(user, { name: "zhao_si", age: 20 });
  }
  ```

## ref 引用类型的响应式

`ref` 也可用作引用类型的响应式

```javascript
let user = ref({
  name: "张三",
  age: 18,
});

function changeUser() {
  console.log(user); //RefImpl 对象
  console.log(user.value); //Proxy 对象
  user.value.name = "zhang_san";
  user.value.age = 20;
}
```

因为 `ref` 用作引用数据类型时，会调用 `reactive` ，输出 `user` 会发现它还是一个 `RefImpl` 对象。但 `user.value` 已经是一个 `Proxy` 对象了。

```javascript
function changeUser() {
  user.value = { name: "zhang_san", age: 20 };
}
```

所以这样改变对象是不会使其丢失响应式。

::: tip

## ref 对比 reactive

- `ref` 既可用作基本类型，也可用作引用类型。`reactive` 只能用作引用类型
- `ref` 修改数据需要通过 `.value`, `reactive` 不用。
- `reactive` 改变原对象指向时，会失去响应式，`ref` 使用 `.value` 则不会。

:::

## toRef 和 toRefs

将一个响应式对象的每一个属性转换为 `ref` 对象

使用 `reactive` 将对象变为响应式对象 `Proxy` ，但每个属性并不是响应式的，如果使用解构赋值，得到的变量失去响应式。

```html
<script setup>
  import { reactive } from "vue";

  let person = reactive({
    name: "张三",
    age: 18,
  });
  let { name, age } = person;
  console.log(name, age); // '张三' 18
  function changeName() {
    name += "~";
  }
  function changeAge() {
    age += 1;
  }
</script>
```

输出 `name`， `age` 得到是基本类型数据，所以它们不是响应式的。
使用 `toRefs` 将响应式对象的每个属性变为 `ref` 对象

```html
<script setup>
  import { reactive, toRefs } from "vue";

  let person = reactive({
    name: "张三",
    age: 18,
  });
  let { name, age } = toRefs(person);
  console.log(toRefs(person)); //{name: ObjectRefImpl, age: ObjectRefImpl}
  console.log(name, age); // ObjectRefImpl{}, ObjectRefImpl{}
  function changeName() {
    name.value += "~";
  }
  function changeAge() {
    age.value += 1;
  }
</script>
```

此时 `name`， `age` 为 ref 对象，具有响应式，js 中更改需要 `.value`

而 `toRef` 则是将单个属性转换为 `ref` 对象。
