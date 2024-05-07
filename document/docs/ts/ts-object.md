# TypeScript 中的对象

## 基本

最基本的使用方式就是个对象的每个属性和方法声明类型

```ts
let user: {
  name: string;
  age: number;
  sayHi(): void;
};

user = {
  name: "张三",
  age: 18,
  sayHi() {
    console.log(`我叫${this.name}, 今年${this.age}岁`);
  },
};

user.sayHi();
```

一旦声明类型，对象赋值时，不能缺少指定的属性，也不能拥有多余的属性。

```ts
let user: {
  name: string;
  age: number;
};

user = { name: "张三" }; // 错误
user = { name: "张三", age: 18, gender: "female" }; // 错误
```

此外，也不能删除类型声明中存在的属性

```ts
let user: {
  name: string;
  age: number;
} = {
  name: "张三",
  age: 18,
};

delete user.name; // 错误
```

## 可选属性

如果某个属性可被忽略，则在属性名后添加 `?`

```ts
let user: {
  name: string;
  age: number;
  gender?: string;
};

user = {
  name: "张三",
  age: 18,
};
```

等同于

```ts
let user: {
  name: string;
  age: number;
  gender: string | undefined;
};

user = {
  name: "张三",
  age: 18,
  gender: undefined,
};
```

所以使用可选属性，需判断其值是否为 `undefined`

```ts
let user: {
  name: string;
  age: number;
  gender?: string;
} = {
  name: "张三",
  age: 18,
  gender: "男",
};

if (user.gender) {
  console.log(`我的性别是${user.gender}`);
}
```

## 只读属性

属性名前加上 `readonly` 关键字，则这个属性为只读属性

```ts
const user: {
  readonly id: string;
} = {
  id: "001",
};

user.id = "002"; // 无法为“id”赋值，因为它是只读属性。
```

只读属性只能在初始化期间赋值，此后无法修改

## 属性名的索引类型

当无法确定对象有哪些属性时使用

```ts
let user: {
  [property: string]: string;
};

user = {
  name: "张三",
  gender: "男",
};
```

上面代码中 ` [property: string]` 表示属性名为 `string`，其中 `property` 表示属性名，可以随便起名。

```ts
let user: {
  [shuxingming: string]: string | number;
};

user = {
  name: "张三",
  gender: "男",
  age: 18,
};
```

上面代码表示属性名为 `string` ，属性值为 `string` 或 `number` 则符合类型声明
