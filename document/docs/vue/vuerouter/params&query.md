# 动态路由匹配

## 带参数动态路由匹配

### query 传参

在 `<router-link>` 的 `to` 属性中直接传递参数，路径中使用 `?` 后以 `参数名=参数值` 的格式传入参数，多个参数之间使用 `&` 分隔。

`query` 传参： `xxxxxxxx/xxxx/xxx?参数名1=参数值1&参数名2=参数值2&参数名3=参数值3`

```html
<router-link to="/about/message/detail?id=001&msg=消息001">点我</router-link>
```

上面案例向 `detail` 路由组件传递参数，

选项式 API 中使用 `this.$route.query` 获得参数

```html
<script>
  export default {
    mounted() {
      console.log(this.$route.query); //{ id: '001', msg: '消息001'}
    },
  };
</script>
```

组合式 API `detail` 路由组件中使用 `useRoute().query` 获得参数

```html
<script setup>
  // 引入 useRoute
  import { useRoute } from "vue-router";
  import { onMounted } from "vue";

  onMounted(() => {
    console.log(useRoute().query); // {id: '001', msg: '消息001'}
  });
</script>
```

#### 动态参数

传递动态参数，首先需要在 `to` 属性前加上 `:`，两种写法:

1. 反引号 ` `` ` + `${}`， 反引号中使用 `${}` ，`${}`中为表达式

```html
<router-link :to="`/about/message/detail?id=${item.id}&msg=${item.msg}`"
  >{{ item.msg }}
</router-link>
```

2. 对象形式，将一个以 `path` 和 `query` 为属性的对象赋值给 `to`

```html
<router-link
  :to="
  {
    path: '/about/message/detail',
    query: { id: item.id, msg: item.msg },
  }"
  >{{ item.msg }}</router-link
>
```

`query` 传参无需在路由表上修改配置。

### params

路径参数：在 `path` 中添加，使用 `:` 表示

```js
{
  // name 属性
  name: 'detail'
  // params 参数
  path: "detail/:id/:title",
  component: Detail,
},
```

选项式 `$router`：表示当前活跃的路由对象，可通过 `this.$route.params` 获得当前路径参数

```html
<script>
  export default {
    mounted() {
      console.log(this.$route.params);
    },
  };
</script>
```

组合式引入 `useRoute` 函数

```html
<script setup>
  import { useRoute } from "vue-router";
  console.log(useRoute().params);
</script>
```

#### 动态参数

与 `query` 一样有两种写法

1. 反引号

```html
<router-link :to="`/about/message/detail/${item.id}/${item.msg}`"
  >{{ item.msg }}
</router-link>
```

2. 对象形式

```html
<router-link
  :to="{
          // path 无效，需使用 name
          // path: '/about/message/detail' //无效
          name: 'detail',
          params: { id: item.id, msg: item.msg },
        }"
  >{{ item.msg }}</router-link
>
```

- 使用对象形式传递 `params` 时，无法使用 `path` ，需使用 `name` 属性代替。而 `query` 可以使用 `path` 也可以使用 `name`
- `params` 需要在路由表中修改 `path` ，`query` 不需要
- 格式
  - `query`: `xxx/xxxx?参数1=xxx&参数2=xxx`
  - `params`: `xxx/xxxx/:参数1/:参数2`

#### params 可选参数

配置路由时，`path` 的参数占位符后加上 `?`，可使参数变为可选参数

```js
const routes = [
  {
    // name 属性
    name: 'detail'
    // params 参数
    path: "detail/:id?/:title?",
    component: Detail,
  },
];
```
