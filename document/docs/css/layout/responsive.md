# 响应式布局

## rem

`rem` 表示根元素（`<html>`）的字体大小 （root element's font-size），浏览器默认的根元素字体大小为 `16px`，即 `1rem = 16px`。

于是，改变根元素字体大小，可以让使用 `rem` 单位的样式自动改变长度。

::: tip
为方便计算，通常希望 `1rem = 10px`。所以可以在使用 `rem` 前设置 html 的文字大小

```css
html {
  font-size: 10px;
}
```

:::
但是这样，用户设置字体大小会失效，所以最好的做法是将字体大小设置为百分比，`10px` 除以默认大小 `16px`

```css
html {
  font-size: 62.5%;
  /* 10px/16px = 62.5% */
}
```

## 媒体查询

### 原理

通过监视浏览器视口宽度来应用不同的样式

`@media (max-width: 600px)` 表示当前样式适用于视口宽度小于等于 `600px`时，若宽度超过 `600px` 则样式不适用。

```css
/* 视口宽度小于等于 1200px 时，应用下面样式 */
@media (max-width: 1200px) {
  .box {
    background: #fcdca1;
  }
}

/* 视口宽度小于等于 600px 时，应用下面样式 */
@media (max-width: 600px) {
  .box {
    background: #282c34;
  }
}
```

当视口宽度小于等于 `600px` 时，同时符合两个条件，但位于下方的样式会覆盖上方的，此时颜色为 `#282c34`。

```css
@media (max-width: 600px) {
  .box {
    background: #282c34;
  }
}

@media (max-width: 1200px) {
  .box {
    background: #fcdca1;
  }
}
```

如果调换位置，颜色为 `#fcdca1`

::: warning
` <meta name="viewport" content="width=device-width, initial-scale=1.0" />` 使用媒体查询需要此行
:::

### 媒体查询中的 rem

::: warning

- 媒体查询条件中，**`rem` 和 `em` 不再依赖于根元素字体大小**， `1rem = 1em =16px` 是固定的。
- `rem` 在媒体查询中条件易出现 bug， 所以用 `em` 为单位改写上方的媒体查询
  :::

```css
html {
  font-size: 62.5%;
  /* 10px/16px = 62.5% */
}
/* 1200/16 = 75 */
@media (max-width: 75em) {
  .box {
    background: #fcdca1;
  }
}
/* 500/16 = 37.5 */
@media (max-width: 37.5em) {
  .box {
    background: #282c34;
  }
}
```

但媒体查询内部的 `rem` 仍然被根元素大小影响

```css
html {
  font-size: 62.5%;
  /* 10px/16px = 62.5% */
}
/* 1200/16 = 75 */
@media (max-width: 75em) {
  .box {
    background: #fcdca1;
    /* 5rem * 10 = 50px */
    width: 5rem;
  }
}
```

在视口宽度为 `1200px` (`75em * 16`)时，将 `.box` 的宽度改为 `50px` (`50rem *10`)
