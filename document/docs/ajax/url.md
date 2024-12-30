# URL

<img style="display: block; margin: 0 auto;" src="./img/url.png" alt="" />

## 协议

`http` 是协议。表面浏览器使用何种协议，一般为 `HTTP` 或 `HTTPS` 中的一种。是 url 中必须的。

## 域名

`www.example.com` 为域名。表明请求的服务器，也可以直接使用 ip 地址，但是不方便。

## 端口

`:80` 表示端口，HTTP 默认端口为 80， HTTPS 的默认端口为 443。使用默认端口时可以忽略端口号。

## 资源路径（path）

`/path/to/myfile.html` 是服务器上资源的路径。

## 查询字符串（query 参数）

`?key1=value1&key2=value2` 为传递给服务器的参数

## 锚点

`#SomewhereInTheDocument` 为资源本身的锚点。

## 绝对 URL 和相对 URL

### 绝对 URL

绝对路径可靠性更强，且更容易理解

绝对 URL 的几种写法

| 形式                                                          | 特点                                                       |
| ------------------------------------------------------------- | ---------------------------------------------------------- |
| 完整形式：`https://meb1uss.github.io/documents/ajax/url.html` | 直接向目标资源发送请求，容易理解。网站的外链一般会用此形式 |
| 省略协议：`//meb1uss.github.io/documents/ajax/url.html`       | 浏览器会使用当前页面的协议与之拼接成一个完整的 URL         |
| 省略域名： `/documents/ajax/url.html`                         | 浏览器会使用当前页面的协议、域名、端口与之拼接成完整 URL   |

### 相对 URL

相对 URL 会与当前页面 URL 计算得到完整 URL，然后发出请求
假如当前页面 URL 为 `https://meb1uss.github.io/documents/ajax`

| 形式                              | 完整 url                                                           |
| --------------------------------- | ------------------------------------------------------------------ |
| `./url.html` 和 `url.html`        | `https://meb1uss.github.io/documents/ajax/url.html`                |
| `../js/js-basic/01.variable.html` | `https://meb1uss.github.io/documents/js/js-basic/01.variable.html` |

- `./xx` 或`xx`皆表示当前目录下的 `xx`
- `../xx` 表示上一层目录下的 `xx`
