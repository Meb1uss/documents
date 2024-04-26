---
sidebar: auto
sidebarDepth: 3
---

# CSS 杂项

## 文字超出部分不换行并显示 ...

```css
div {
  /* 强制不换行 */
  white-space: nowrap;
  /* 超出部分隐藏 */
  overflow: hidden;
  /* 文字超出显示 ... */
  text-overflow: ellipsis;
}
```

## box-sizing: border-box

<img style="display: block; margin: 0 auto;" src="./images/boder-box.jpg" alt="" />
