# Vue 响应式原理

## Vue2 监测对象

Vue2 使用 [Object.defineProperty](../../js/js-object/01.property.md#修改属性标志) 修改[访问器描述符对象](../../js/js-object/02.getter&setter.md#访问器描述符)来实现响应式。

```js
const data = {
  name: "张三",
  age: 18,
};
// 以对象为参数的构造函数
function Observer(obj) {
  //将参数对象的所有属性名组成一个数组
  const props = Object.keys(obj);

  props.forEach((prop) => {
    Object.defineProperty(this, prop, {
      // 构造函数中的 this 指向实例对象
      // 将 obj 中的所有数据属性，以访问器属性的形式添加给实例对象
      get() {
        // 调用 getter 读取 obj 的属性
        return obj[prop];
      },
      set(val) {
        // 调用 setter 修改 obj 中的属性
        obj[prop] = val;
        console.log("重新解析模板");
      },
    });
  });
}

// 创建实例对象
const obs = new Observer(data);

// 调用 setter 修改 data 中的数据
obs.name = "李四"; // 重新解析模板
// 调用 getter 读取 data 中的数据
console.log(data.name); // "李四"

// 向 data 添加新的数据
data.num = 10;
console.log(obs.num); // undefined
```

此步骤被称为数据劫持。
但是问题是，`data` 中新添加的属性，并没有被劫持，所以无法响应式的更新数据。

Vue2 中使用 `Vue.set()` 来解决此问题

## Vue2 监测数组

`Object.defineProperty` 本身可以监控到数组下标变化，只是从性能/体验的性价比考虑，放弃了这个特性。

正确的方式是使用会改变原数组的方法，如 `push、pop、shift、unshift、splice、reverse、sort`。
当然使用 `Vue.set()` 也可以改变

## Vue3 响应式原理

Vue3 使用 [Proxy](../../js/js-object/03.proxy&reflect.md#proxy) 和 [Relflect](../../js/js-object/03.proxy&reflect.md#reflect)

`Proxy` 与 `Object.defineProperty` 的区别之一是，`Object.defineProperty` 是对对象的某一个属性来进行操作，而 `Proxy` 是对整个对象的代理。

所以 `Proxy` 并不需要通过循环来逐个进行数据劫持。

其次，`Proxy` 的拦截器不仅能拦截对目标对象的读取和写入，还可以拦截删除，甚至可以拦截目标对象的 `defineProperty`

```js
const data = {
  name: "张三",
  age: 20,
};

const obj = new Proxy(data, {
  get(target, prop) {
    return Reflect, get(target, prop);
  },
  set(target, prop, val) {
    return Reflect.set(target, prop, val);
  },
  deleteProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
  },
  defineProperty(target, prop) {
    return Reflect.deleteProperty(target, prop);
  },
});

obj.name = "李四";
console.log(data.name);

obj.num = 20;
console.log(data.num); // 20
```

不仅写法更简单，而且可以检测到属性的添加，所以 Vue3 不存在 Vue2 上的问题。

::: tip

### Proxy vs Object.defineProperty

- `Proxy` 是对整个对象的代理，而 `Object.defineProperty` 只能代理某个属性。
- 对象上新增属性，`Proxy` 可以监听到，`Object.defineProperty` 不能。
- 数组新增修改，`Proxy` 可以监听到，`Object.defineProperty` 不能。

:::
