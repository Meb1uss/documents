# 计算属性

`computed` 函数
vue3 中计算属性需要手动引入，且是一个函数。计算属性接受一个 `getter` 函数作为参数，返回值为一个计算属性 `ref` 对象。

```html
<script setup>
  import { ref, computed } from "vue";
  let firstName = ref("zhang");
  let lastName = ref("san");
  let fullName = computed(() => {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "_" +
      lastName.value.slice(0, 1).toUpperCase() +
      lastName.value.slice(1)
    );
  });
  console.log(fullName); //ComputedRefImpl {...}
</script>
```

上面案例将 `firstName`,`lastName` 首字母改成大写后拼接，并返回给 `fullName`。输出 `fullName` 可发现其为计算属性 `ref` 对象。同样，在模版中解析不需 `.value`

## 可写计算属性

同时传入 `getter` 和 `setter` 函数。

但是修改计算属性的本质，是通过 `setter` 的参数来改变计算属性的依赖值，使得计算属性重新计算得到结果，与直接修改计算属性的依赖是一样的

```html
<script setup>
  import { ref, computed } from "vue";
  let firstName = ref("zhang");
  let lastName = ref("san");

  let fullName = computed({
    get() {
      return firstName.value + "_" + lastName.value;
    },
    set(newValue) {
      [firstName.value, lastName.value] = newValue.split("_");
      console.log(newValue);
    },
  });

  function changeFullName() {
    fullName.value = "li_si";
  }
</script>
```
