# watch

`watch` 监视四种数据的变化

- `ref` 定义的数据
- `reactive` 定义的数据
- `getter` 函数
- 一个包含上述内容的数组

一般会出现五种场景

## 场景一：ref 定义的基本类型数据

`setup` 中，`watch` 为一个函数，第一个参数为监听目标，第二个参数是一个回调函数。当监听目标发生变化时调用回调，回调函数接受两个参数 `newValue` 和 `oldValue`

```html
<script setup>
  import { ref, watch } from "vue";
  let count = ref(0);

  watch(count, (newValue, oldValue) => {
    console.log("count++了", newValue, oldValue);
  });
</script>
```

`watch` 有一个返回值，调用该返回值可以取消监听

```html
<script setup>
  import { ref, watch } from "vue";
  let count = ref(0);

  let stopWatch = watch(count, (newValue, oldValue) => {
    console.log("count++了", newValue, oldValue);
    if (newValue >= 5) {
      // newValue 大于等于 5 时取消监听
      stopWatch();
    }
  });
</script>
```

## 场景二：ref 定义的引用类型数据

当 `watch` 监听 `ref` 定义的引用类型数据时，默认监视的是引用，即修改对象的属性并不会触发回调，仅仅在改变引用时会触发

```js
let person = ref({
  name: "张三",
  age: 18,
});

function changeName() {
  // 不触发回调
  person.value.name = "zhang_san";
}
function changeAge() {
  // 不触发回调
  person.value.age = 30;
}
function changePerson() {
  // 触发回调
  person.value = { name: "李四", age: 33 };
}

watch(person, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
```

这时使用 `watch` 的第三个参数可以开启深层监听，第三个参数为一个对象，配置 `deep: true` 即可打开深层监听，大白话就是监听对象属性的变化。

```html
<script setup>
  import { ref, watch } from "vue";

  let person = ref({
    name: "张三",
    age: 18,
  });

  function changeName() {
    //触发回调
    person.value.name = "zhang_san";
  }
  function changeAge() {
    //触发回调
    person.value.age = 30;
  }
  function changePerson() {
    //触发回调，newValue, oldValue 不同
    person.value = { name: "李四", age: 33 };
  }

  watch(
    person,
    (newValue, oldValue) => {
      console.log(newValue, oldValue);
    },
    { deep: true } // 深层监听开启
  );
</script>
```

但由于修改对象的属性并没有改变整个对象（未改变 `person` 指向），所以 `newValue` 和 `oldValue` 此时相同，均为修改属性后的对象。
替换整个对象（改变 `person` 指向，指向一个新的对象），`newValue` 与 `oldValue` 不同

## 场景三：reactive 定义的引用类型数据

监听 `reactive` 定义的引用类型数据，`watch` 会自动开启深层监听，且无法手动关闭 (`deep: false` 无效)。因为 `reactive` 并不能直接替换整个对象，所以 `newValue` 与 `oldValue` 相同

```html
<script setup>
  import { reactive, watch } from "vue";

  let person = reactive({
    name: "张三",
    age: 18,
  });

  function changeName() {
    // 触发回调
    person.name = "zhang_san";
  }
  function changeAge() {
    // 触发回调
    person.age = 30;
  }
  function changePerson() {
    // 本质并没有修改 person 指向，故 newValue, oldValue 相同
    Object.assign(person, { name: "李四", age: 33 });
  }

  watch(person, (newValue, oldValue) => {
    console.log(newValue, oldValue);
  });
</script>
```

## 场景四：监视 ref/reactive 定义的引用类型数据里的某个属性

监听响应式对象的属性分为两种情况

1. 该属性为基本类型
2. 该属性为引用类型

如果监听基本类型的属性，第一个参数为 `getter` 函数，通俗点，就是将这个属性作为返回值的函数

```js
watch(
  () => student.name, // 如果是 ref 对象，则为 student.value.name
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);
```

如果为引用类型属性，可以直接监听而不使用函数

```js
import { ref, watch } from "vue";

let student = ref({
  name: "张三",
  grade: {
    Math: "A+",
    English: "A+",
  },
});

function changeMath() {
  student.value.grade.Math = "B";
}

function changeGrade() {
  // 不会触发回调
  student.value.grade = {
    Math: "C",
    English: "C",
  };
}

watch(student.value.grade, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});
```

这时会发现，`changeMath` 会被监听，而 `changeGrade` 不会被监听。
使用 `getter` 函数则相反

```js
import { ref, watch } from "vue";

let student = ref({
  name: "张三",
  grade: {
    Math: "A+",
    English: "A+",
  },
});

function changeMath() {
  // 不会触发回调
  student.value.grade.Math = "B";
}

function changeGrade() {
  student.value.grade = {
    Math: "C",
    English: "C",
  };
}

watch(
  () => student.value.grade,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);
```

这时使用 `deep: true` 可解决此问题

```js
import { ref, watch } from "vue";

let student = ref({
  name: "张三",
  grade: {
    Math: "A+",
    English: "A+",
  },
});

function changeMath() {
  // 触发回调
  student.value.grade.Math = "B";
}

function changeGrade() {
  // 触发回调
  student.value.grade = {
    Math: "C",
    English: "C",
  };
}

watch(
  () => student.value.grade,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
  { deep: true }
);
```

所以监听响应式对象的属性，建议使用 `getter` 函数，如果需要监听对象属性中的属性变化，开启深层监听。

## 场景五：监视上述多个数据

使用数组包裹

## watchEffect

接收一个参数作为回调，立即运行回调，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数
`watch` 对比 `watchEffect`

- `watchEffect` 不用明确指出监视的数据，回调中用到哪些数据，就监视哪些数据
