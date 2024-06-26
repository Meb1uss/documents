# 生命周期

- 数据代理完成前后：

  - `beforeCreate`
    - 在组件实例初始化完成之后立即调用。
    - 此时无法访问 data ，methods
  - `created`
    - 在组件实例处理完所有与状态相关的选项后调用。
    - 此时可以访问 data ，methods

- 解析模板，生成虚拟 DOM ，页面还不能显示解析好的内容

- 组件被挂载前后

  - `beforeMount`
    - 在组件被挂载之前调用。
    - 当这个钩子被调用时，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。
  - `mounted`
    - 在组件被挂载之后调用。
    - 页面呈现的是经过 Vue 编译的 DOM
    - 此时对 DOM 的操作有效

- 数据更新前后

  - `beforeUpdate`
    - 在组件即将因为一个响应式状态变更而更新其 DOM 树之前调用。
  - `updated`
    - 在组件因为一个响应式状态变更而更新其 DOM 树之后调用。

- 组件实例被卸载前后
  - `beforeUnmount`
    - 在一个组件实例被卸载之前调用。
  - `unmounted`
    - 在一个组件实例被卸载之后调用。
