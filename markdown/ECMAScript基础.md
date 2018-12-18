## ECMAScript 基础

**变量和常量**

```javascript
var foo1 = 100;    // 普通声明
let foo2 = 200;    // ES2015 块级声明，防止声明提前
const FOO_3 = 300; // 常量声明，防止误修改
```
**数据类型**

1. 基本类型
```javascript
var foo;                 // undefined
var foo = null;          // null
var foo = true;          // boolean
var foo = 100;           // number
var foo = 'hello';       // string
```

2. 引用类型

*ES对象*
```javascript
var o = new Object();    // Object
var f = new Function();  // Function
var a = new Array();     // Array
var m = new Date();      // Date
var r = new RegExp();    // RegExp
var e = new Error();     // Error
// ... more 
```

*BOM对象*
```javascript
console.log(window);
console.log(frames);
console.log(navigator);
console.log(location);
console.log(history);
console.log(screen);
console.log(event);
console.log(document);
```

*DOM对象*
```javascript
// Element
// Node
// Attr
```

3. 自定义
```javascript
// 自定义构造函数
var Flies = function (name, color='white') {
  this.name = name;
  this.color = color;
};
// 声明一个实例
var myFly = new Flies('air', 'red');  
```