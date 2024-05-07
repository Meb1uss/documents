# interface 接口

## 基本

对对象进行类型声明的坏处是如果有多个同结构的对象，需要多次类型声明

```ts
const zhangsan: {
  name: string;
  age: number;
} = {
  name: "张三",
  age: 18,
};

const lisi: {
  name: string;
  age: number;
} = {
  name: "李四",
  age: 29,
};
```

interface 接口可以用来解决此问题，接口可以被视作一个对象模板。

```ts
interface User {
  name: string;
  age: number;
}

const zhangsan: User = {
  name: "张三",
  age: 18,
};

const lisi: User = {
  name: "李四",
  age: 29,
};
```

接口与对象一样，可以声明可选属性，只读属性，方法

```ts
interface User {
  name: string;
  readonly id: string;
  gender?: string;
  sayHi(): void;
}

const zhangsan: User = {
  name: "张三",
  id: "001",
  sayHi() {
    console.log(`我叫${this.name}`);
  },
};
```

## interface 继承

interface 可以通过关键字 `extends` 继承其他的 interface

```ts
interface Person {
  name: string;
  age: number;
}

interface User extends Person {
  id: string;
}

const zhangsan: User = {
  name: "张三",
  age: 23,
  id: "001",
};

console.log(zhangsan); // { name: '张三', age: 23, id: '001' }
```

## interface 合并

两个同名的 interface 会合并

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  id: string;
}

const user: User = {
  name: "张三",
  age: 12,
  id: "001",
};

console.log(user); // { name: '张三', age: 12, id: '001' }
```

上面代码等同于

```ts
interface User {
  name: string;
  age: number;
  id: string;
}
```

同名接口中出现相同的属性，类型不能冲突（后面的不会覆盖之前的）

```ts
interface User {
  name: string;
  id: string;
}

interface User {
  age: number;
  id: number; // 后续属性声明必须属于同一类型。属性“id”的类型必须为“string”，但此处却为类型“number”。
}
```
