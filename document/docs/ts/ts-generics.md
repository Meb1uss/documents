# 泛型

假设有个函数，返回其参数，参数是什么类型，返回值就是什么类型

```ts
function fn(a) {
  return a;
}
```

由于不确定参数类型，所以只能写成下面这样

```ts
function fn(a: any): any {
  return a;
}
```

但如此一来就失去了使用 TypeScript 的意义。

泛型用来解决此问题。泛型，可以理解为 “类型参数”

```ts
function fn<T>(a: T): T {
  return a;
}
```

类型参数写在尖括号 `<>` 中，放置在函数名后，在调用函数时传入具体的参数类型

```ts
console.log(fn<string>("TypeScript")); // "TypeScript"
```

上面代码在函数调用时给出类型参数的值为 `string`

泛型也可以使用联合类型

```ts
function fn<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const arr = fn<string | number>([1, 2], ["hello"]);
console.log(arr);
```

类型参数可以是多个，一般取名为 `T` (type) 及后续字母 `U`,`V`。多个类型参数之间用逗号分隔

```ts
function fn<T, U>(a: T, b: U): T {
  console.log(a, b);
  return a;
}

fn<number, string>(123, "hello");
```
