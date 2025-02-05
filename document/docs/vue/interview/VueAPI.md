# VueAPI

## 组件通信
### 父子通信
1. props
2. $emit
3. $on (Vue3 已废弃)
4. $parent
5. $children (Vue3 已废弃)
6. $refs
### 兄弟通信
1. $parent
2. $root
3. Vuex / pinia
### 跨级通信
1. provide/inject
2. Vuex / pinia
3. $attrs


## v-for 与 v-if 优先级
1. 实践中不应该同时使用 v-if 和 v-for
2. Vue2 中，v-for 优先级高于 v-if
3. Vue3 中，v-if 优先级高于 v-for
4. 两种场景下会错误的同时使用
   1. 为了避免渲染本应该隐藏的列表：`v-for="user in users" v-if="isShow"`，此时应将 v-if 移动到容器元素上：`<ul v-if="isShow"><li v-for="user in users"></li></ul>`
   2. 为了过滤列表中的项目：`v-for="user in users" v-if="user.isActive"`，此时应使用计算属性过滤列表后再进行循环：`<ul><li v-for="user in activeUsers"></li></ul>` 


## Vue的生命周期
| Vue2 | Vue3(选项式) | Vue3(组合式) | 描述 |
| --- | --- | --- | --- |
| beforeCreate | beforeCreate | setup() | 组件实例刚被创建，组件属性计算之前，如 data、computed、watch、methods 等不可被访问，常用于插件开发中，执行初始化任务 |
| created | created | setup() | 组件实例创建完成，属性已绑定，但 DOM 还未生成，可访问各种数据，常用于获取接口数据 |
| beforeMount | beforeMount | onBeforeMount | 模板编译/挂载之前 | 
| mounted | mounted | onMounted | 模板编译/挂载之后，此时对 DOM 的操作有效，常用于访问 DOM 元素、子组件 |
| beforeUpdate | beforeUpdate | onBeforeUpdate | 组件更新之前 |
| updated | updated | onUpdated | 组件更新之后 |
| beforeDestroy | beforeUnmount | onBeforeUnmount | 组件销毁之前 |
| destroyed | unmounted | onUnmounted | 组件销毁之后 |
| activated | activated | activated | 被 keep-alive 缓存的组件激活时调用 |
| deactivated | deactivated | deactivated | 被 keep-alive 缓存的组件停用时调用 |

