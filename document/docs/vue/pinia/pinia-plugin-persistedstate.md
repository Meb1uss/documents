# Pinia 数据持久化

使用插件 `pinia-plugin-persistedstate` 实现 `Pinia` 的数据持久化

## 安装

安装依赖

```
npm i pinia-plugin-persistedstate

```

将插件添加到 pinia 实例上

```js
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
```

## 使用

创建 Store 时，将 `persist` 选项设置为 `true`。

```js
import { defineStore } from "pinia";

import { loginAPI } from "@/apis/user";
export const UseUserStore = defineStore("user", {
  state() {
    return {
      userInfo: {
        name: "张三",
      },
    };
  },
  // 将 `persist` 选项设置为 `true`
  persist: true,
});
```

此时，pinia 会将数据持久化在 `localStorage` 中
