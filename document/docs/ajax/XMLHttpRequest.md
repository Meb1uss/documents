# XMLHttpRequest

1. 创建 `XMLHttpRequest` 对象
2. 初始化
3. 发送
4. 绑定事件接受结果

## XMLHttpRequest 基本使用

### 创建对象

```js
// 创建 xhr 对象
const xhr = new XMLHttpRequest();
```

其中 `xhr` 不是必须名

### 初始化

```js
xhr.open(method, URL, [async, user, password]);
```

- `method` —— HTTP 方法。通常是 `"GET"` 或 `"POST"`。
- `URL` —— 要请求的 URL，通常是一个字符串
- `async` —— 如果显式地设置为 `false`，那么请求将会以同步的方式处理。
- `user，password` —— HTTP 基本身份验证（如果需要的话）的登录名和密码。

### 发送请求

```js
xhr.send([body]);
```

- 可选参数 `body` 包含了请求体。 （POST 会使用到）

### 绑定事件

- `load` —— 当请求完成（即使 HTTP 状态为 400 或 500 等），并且响应已完全下载
- `readystatechange` —— 当 XMLHttpRequest 实例的`readeyState` 属性发生改变时触发
  - `0` 表示初始化状态
  - `1` open 方法被调用
  - `2` 接收到响应头
  - `3` 服务端返回了部分结果
  - `4` 服务端返回了所有结果（请求完成）
- `error` —— 当无法发出请求，例如网络中断或者无效的 URL。
- `progress` —— 在下载响应期间定期触发，报告已经下载了多少。

一旦服务器有了响应，我们可以在 XMLHttpRequest 实例中接收以下结果

- `status` —— HTTP 状态码（一个数字）：200，404，403 等，如果出现非 HTTP 错误，则为 0
- `statusText` —— HTTP 状态消息（一个字符串）：状态码为 200 对应于 OK，404 对应于 Not Found，403 对应于 Forbidden。
- `response` 或 `responseText` —— 服务器 response body。

## get

```js
// 创建对象
const xhr = new XMLHttpRequest();

// 初始化
xhr.open("GET", "http://127.0.0.1:8000/server");

// 发送请求
xhr.send();

// 绑定事件，处理结果
xhr.addEventListener("load", () => {
  console.log(xhr.status);
  console.log(xhr.statusText);
  console.log(xhr.response);
  console.log(xhr.responseText);
});
```

### 带参数

在 url 后拼接 `?key1=value1&key2=value2`
多个参数之间使用 `&` 分隔

```js
xhr.open("GET", "http://127.0.0.1:8000/server?a=1&b=2");
```

## post 设置请求体

post 请求参数写在请求体中，类型要求并不严格，只要后端能处理即可(一般为字符串或 JSON)

```js
// 初始化
xhr.open("POST", "http://127.0.0.1:8000/server");

// 发送请求
xhr.send(
  JSON.stringify({
    name: "zhangsan",
    age: 18,
  })
);
```

## 设置请求头

设置请求体写在 `open` 方法后

```js
xhr.setRequestHeader("key", "value");
```

该方法接收两个字符串作为参数，第一个参数为请求体的名，第二个为请求体的值

```js
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
```

## `responseType`

设置 `XMLHttpRequest` 实例的 `responseType` 属性，可以自动转换响应体的内容。

假如响应体是个 JSON，我们可以手动转换 JSON

```js
const xhr = new XMLHttpRequest();

xhr.open("GET", "http://127.0.0.1:8000/server");

xhr.send();

xhr.addEventListener("load", () => {
  let res = JSON.parse(xhr.response);
  console.log(res);
});
```

也可以设置 `responseType` 属性

```js
const xhr = new XMLHttpRequest();

xhr.open("GET", "http://127.0.0.1:8000/server");
// 小写的 json
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
```

## 请求超时

设置 `XMLHttpRequest` 实例的 `timeout` 属性，若在 `timeout` 时间内没有得到响应，则取消请求。
`timeout` 值为数字，单位是 ms
同时可以绑定 `timeout` 事件回调

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8000/server");
xhr.send();
xhr.timeout = 3000;

xhr.addEventListener("timeout", () => {
  alert("网络请求超时");
});
```

## 取消请求

`XMLHttpRequest` 实例的 `abort` 方法，手动取消请求。

在有重复请求时，取消请求

```js
const btns = document.querySelectorAll(".btn");

let isSending = false;
let xhr = null;

btns[0].addEventListener("click", () => {
  if (isSending) {
    xhr.abort();
  }
  xhr = new XMLHttpRequest();
  isSending = true;
  xhr.open("GET", "http://127.0.0.1:8000/server");
  xhr.send();
  xhr.addEventListener("load", () => {
    isSending = false;
    console.log(xhr.response);
  });
});
```
