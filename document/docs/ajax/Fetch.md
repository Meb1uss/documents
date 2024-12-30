# Fetch

## 基本使用

### 发送请求

```js
let promise = fetch(url, [options]);
```

- `url` —— 要访问的 URL
- `options` —— 可选参数，一个包含 method，header 等的配置对象

如果不传第二个参数，则默认为 `GET` 请求

```js
fetch("http://127.0.0.1:8000/server");
```

### 解析响应头

当服务器返回响应后，检查请求是否成功。

- `status` —— HTTP 状态码
- `ok` —— 如果 HTTP 状态码为 200-299，为 `true`

```js
fetch("http://127.0.0.1:8000/server").then((response) => {
  console.log(response.ok);
  console.log(response.status);
});
```

### 获取响应体

根据不同的格式，使用不同的方法访问响应体

- `response.text()` —— 读取 `response`，并以文本形式返回 `response`
- `response.json()` —— 将 `response` 解析为 `JSON` 格式，
- `response.formData()` —— 以 `FormData` 对象的形式返回 `response，`
- `response.blob()` —— 以 `Blob`（具有类型的二进制数据）形式返回 `response，`
- `response.arrayBuffer()` —— 以 `ArrayBuffer`（低级别的二进制数据）形式返回 `response，`

读取 text 格式响应体

```js
fetch("http://127.0.0.1:8000/server")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.text();
    }
  })
  .then((result) => {
    console.log(result);
  });
```

### 获取响应头

响应头类似于 Map，需要使用 `get` 方法得到响应头

```js
fetch("http://127.0.0.1:8000/server")
  .then((response) => response.headers.get("Content-Type"))
  .then((result) => {
    console.log(result);
  });
```

## 设置请求头

使用 `fetch` 第二个参数中的 `headers` 选项设置请求头，`headers` 是一个对象

```js
fetch("http://127.0.0.1:8000/server", {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
```

## post

使用 `fetch` 第二个参数中的

- `method` —— 选项设置请求方法，
- `body` —— 选项设置请求体

```js
const user = {
  name: "zhang_san",
  age: 18,
};

fetch("http://127.0.0.1:8000/server", {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})
  .then((response) => response.text())
  .then((result) => console.log(result));
```
