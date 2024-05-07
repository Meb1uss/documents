# 类型

TypeScript 继承了 JavaScript 的数据类型的同时拓展了类型。

## 基本类型

声明时在变量名后面加上 `: 变量类型` 对变量进行类型注解

```typescript
let num: number = 123;
let big: bigint = 123n;
let str: string = "hello";
let isDone: boolean = true;
let u: undefiend = undefiend;
let n: null = null;
```

## any & unknown

- `any` 类似于原生 JS，关闭对变量的类型检测
  - 声明变量而不同时赋值，且也不进行类型注解，则默认为变量类型为 `any`
- `unknown` 表示未知类型

`any` 与 `unknown` 的区别

- 可以将 `any` 类型赋值给其他类型的变量，污染其他变量
- 不能将 `unknown` 类型变量直接赋值给其他类型变量，通过“类型缩小”，比如经过 `typeof` 运算才能赋值给其他类型变量

```typescript
// 变量 a 为 any 类型
let a: any = true;
// 变量 b 为 string 类型
let b: string = "Hello";

b = a; // string类型的 b 可以被赋值为 any 类型 b 变成了布尔值

// 变量 c 为 unknown 类型
let c: unknown = "Hi";
b = c; // 不能将类型“unknown”分配给类型“string”

// 类型缩小
if (typeof c === "string") {
  b = c;
}
```

## void & never

- `void` 表示没有类型，当一个函数没有返回值时，常常将其返回值类型设置为 `void`
- `never` 表示永不存在的值，多用于抛出错误或无限执行的函数 ——— 返回 `never` 的函数不能具有可访问的终结点

```typescript
function foo(): void {
  console.log("我没有返回值");
}

function foo2(): never {
  throw new Error("never");
}
```

## 数组

TypeScript 中数组的所有元素的类型必须相同。

两种方式定义数组，

- 元素类型后接上 `[]`
- `Array<数据类型>` （泛型）

```typescript
let list1: string[] = ["hello", "TypeScript"];

let list2: Array<string> = ["hello", "TypeScript"];
```

## 元组 Tuple

元组表示一个已知长度和元素类型的数组，每个元素的类型不必相同。但必须明确声明每个元素的类型。

```typescript
let list: [string, number];

list = ["hello", 10];
```

越界元素的类型为 `undefined`

```typescript
list[2] = 123; // 不能将123 分配给类型 undefined
```

## 枚举 enum

当一个变量的值是有限的几个值之一时，可以使用枚举。
比如性别为男性或女性。

```typescript
enum Gender {
  male,
  female,
}

let g = Gender.male;
```

默认情况下，枚举类里的成员从 `0` 开始编号，也可手动编号。

```typescript
enum Gender {
  male = 1,
  female = 2,
}
console.log(Gender.male); // 1
```

## 字面量类型（值类型）

```ts
let msg: "hello";

msg = "hello"; // 正确
msg = "hi"; // 不能将类型“"hi"”分配给类型“"hello"”
```

使用 const 声明变量并同时赋值，且不做类型注解，则会被 TypeScript 认为是字面量类型

```ts
const msg = "TS";
// 等价于
const msg: "TS" = "TS";
```

## 联合类型

联合类型 `A|B` 表示，只要类型属于 `A` 或 `B`，它就属于联合类型 `A|B`

```ts
let x: number | string;

x = 123; // 正确
x = "123"; // 正确
```

变量 `x` 就是联合类型，它的值既可以是数字，也可以是字符串

## 类型推断

如果没有对变量指定类型，则 TypeScript 会推断类型

```typescript
// 没有指定 count 类型，但因为给 count 赋值为 number，所以推断 count 是number 类型
let count = 20;
count = "count"; // 不能将类型“string”分配给类型“number”。
```

如果推断不出类型，则将变量的类型视为 `any`

```typescript
let count; // 视为 any
count = 20;
count = "hi";
```
