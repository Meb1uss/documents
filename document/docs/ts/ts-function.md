# TypeScript 中的函数

## 基本

函数的类型声明，需要在声明函数时，对参数的类型和返回值的类型做出注解

```ts
function sum(a: number, b: number): number {
  return a + b;
}

sum("1", "2"); // 类型“string”的参数不能赋给类型“number”的参数。
```

上面函数表示，接收两个 `number` 类型的参数，且返回值是 `number` 类型

箭头函数写法：

```ts
const sum = (a: number, b: number): number => a + b;
```

## 可选参数

如果某个参数可忽略，则在参数名后面使用 `? `表示其为可选参数。

```ts
function foo(x?: number) {}

foo(1);
foo();
```

可选参数只能在参数列表的尾部

```ts
function sum(x?: number, y: number): number {
  return x + y;
}
// 报错：必选参数不能位于可选参数后
```

如果前面的参数可能为空，则只能使用联合类型注明

```ts
function sum(x: number | undefined, y: number): number {
  return x + y;
}
```

使用可选参数，需要判断其值是否为 `undefined`

```ts
function sum(x: number, y?: number): number {
  return x + y; // “y”可能为“未定义”
}
```

```ts
function sum3(x: number, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}
```
