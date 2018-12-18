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

3. 自定义对象类型
```javascript
// 自定义构造函数
var Flies = function (name, color='white') {
  this.name = name;
  this.color = color;
};
// 声明一个实例
var myFly = new Flies('air', 'red');  
```

**类型自动转换**
> 加号运算中，各类型间发生转换

```javascript
console.log(1 + '2');     // '12'
console.log(1 + true);    // 2
console.log('2' + true);  // '2true'
console.log(true + true); // 2
```

**String 字符串**
> 所有字符串API都无权修改原字符串,只能返回新的字符串

```javascript
var char = str[i];    // 返回指定下标的字符
var len = str.length; // 返回字符串长度

var char = str.charAt(i); // 获取指定位置的字符, 默认i为0
var upper =	str.toUpperCase(); // 返回一个大写字符串
var lower =	str.toLowerCase(); // 返回一个小写字符串

// 汉字的Unicode码的范围:"\u4e00"~"\u9fa5"
var unicode = str.charCodeAt(i); // 获取指定位置字符的unicode号;
var char = String.fromCharCodu(unicode); // 将Unicode号转换为对应文字

str.slice(start,end+1); // 截取子字符串;
str.substring(start,end+1); // 截取子字符串,不支持负数参数
str.substr(start,n); // 截取子字符串,n指截取数量
  
// 查找一个固定的关键词出现的位置
var i = str.indexOf(keywords, i); // 返回keywords开始的下标;若无,返回-1
var i = str.lastIndexOf(keywords); // 查找最后一个关键词开始的位置

// 判断是否包含敏感词
var i = str.search(/正则表达式/); // 找到第一个敏感词的位置

// 查找所有敏感词的内容 i:不区分大小写, g:匹配多个
var arr = str.match(/正则表达式/ig); // 返回一个多个敏感词的数组,若无返回null;
var array = /正则表达式/.exec(str); // 查找所有关键词的内容及其位置, 若无返回null

// 将所有敏感词都替换为统一的新内容
str = str.replace(/正则表达式/ig, "新内容");
str = str.replace(/正则表达式/ig, kw => kw +',');
str = str.replace(/正则表达式/ig, ""); // 删除敏感词

// 切割字符串, 返回数组
var arr = str.split(",");
var arr = str.split(/正则表达式/);
```

*模板字符串*
```javascript
var name = 'xiao ming';
var str = `Hello, ${name}. Nice to see you! `;
console.log(str); // Hello, xiao ming. Nice to see you!
```

**RegExp 正则表达式**
> 最简单的正则表达式就是关键词原文

*字符集* 
> 格式：[备选字符列表]

```
  [\u4e00-\u9fa5] 一位汉字	
  [0-9]           一位数字    
  [a-z]           一位小写字母    
  [A-Z]           一位大写字母   
  [A-Za-z]        一位字母     
  [0-9A-Za-z]     一位字母或数字  
  [^×××]          非xxx
```

*预定义字符集*
```
  \d     一位数字
  \w     一位字母,数字或下划线
  \s     一个空字符
```

*量词*
> 只修饰前面一个字符集

```
  {m,n}	 至少m次,最多n次
  {m,}   至少m次,多了不限
  {m}	 必须m次
  *      可有可无,多了不限
  +      至少一次,多了不限
  ?      可有可无,最多一次
```

*特殊位置*
```
  ^     匹配字符串开头  	
  $     匹配字符串结尾	 
  \b    单词边界
```

*分组*
> 将多个字符集用()包裹在一起成为一组, 放在()后的量词修饰整个分组

```javascript
var str = '13131313';
console.log(/^(13)+$/.test(str)); // true

// 中国大陆手机号 (+86|0086)?\s+1[34578]\d{9}
// 身份证号 \d{15}(\d{2}[0-9Xx])?
```

*创建对象*
```javascript
var reg = /\S+love\b/ig; 
// 需要动态拼接规则时，使用下面方式声明
var reg = new RegExp('\S+love\b', 'ig');
```

*API*
> exec 在str中查找下一个符合reg要求的关键词的内容和位置

```javascript
var str = '小明先吃苹果然后喝可乐，果然拉肚子了';
var reg = /果(然)/ig;
var arr = null;
while (null != (arr = reg.exec(str))) {
  console.log(arr);
  console.log('查找关键词：'+ arr[0]);
  console.log('分组1：'+ (arr[1] || '未设置'));
  console.log('本次查找结束位置：'+ arr.index);
  console.log('下次开始查找位置：'+ reg.lastIndex);
}
```

> test 验证str的格式是否符合规则

```javascript
console.log(/\d/.test('10086')); // true
```


**Math 数学对象**
> 不是构造函数，无需实例化

```javascript
Math.ceil(num);          // 上取整
Math.floor(num);         // 下取整
Math.round(num);         // 四舍五入
Math.pow(a, n);          // 乘方 a^n
Math.sqrt(num);          // 开平方
Math.max(...array);      // 找数组中的最大值
Math.min(...array);      // 找数组中的最小值
Math.random();           // 随机生成一个0-1之间的小数

// 随机生成任意min~max之间的整数 
parseInt(Math.random()*(max-min+1)+min); 
```

**Date 日期时间对象**

*创建对象*
```javascript
var now = new Date(); // 自动获得客户端当前系统时间

var date = new Date(1545123210000); // 将一个毫秒数转换为日期对象
var date = new Date("2018/12/18 16:53:30"); // 获得自定义时间点
```

*API*
```javascript
var date = new Date();

// 时间格式化
var myTime = {
  timestamp: date.getTime(),
  year: date.getFullYear(),
  month: date.getMonth() + 1, // 月份取值是0-11
  date: date.getDate(),
  day: date.getDay(),
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
  milliseconds: date.getMilliseconds(),

  formate () {
    return `现在的时间是 ${this.year}年${this.month}月${this.date}日 周${this.day} ${this.hours}时${this.minutes}分${this.seconds}秒${this.milliseconds}毫秒 `;
  }
};
console.log(myTime.formate());

// 其他
date.toString()               // 转为当地时间的完整格式
date.toLocaleString()         // 转为当地时间的简版格式
date.toLocaleDateString()     // 保留日期部分
date.toLocaleTimeString()     // 保留时间部分
date.toGMTString()            // 转为0时区标准时间

date.setFullYear(2020);       // 用set修改日期中任意单位的值

// JS中能存储的最大时间(ms)为 Number.MAX_VALUE
```

**Error 错误对象**

*属性*
> name 保存错误的类型, message 保存错误的提示信息

```javascript
try {
  // 手动执行错误
  JSON.parse({msg: '不是JSON字符串'});
} catch (err) {
  // 捕获到错误对象
  console.log(err.name);    // SyntaxError
  console.log(err.message); // Unexpected token o in JSON at position 1
}
```

*错误类型*
```javascript
SyntaxError     // 语法错误
ReferenceError  // 引用错误, 找不到对象
TypeError       // 类型错误, 错误地使用了类型或错误地调用了类型的方法
RangeError      // 范围错误, 参数超出范围
URIError        // url格式错误
EvalError       // eval错误
```

*主动抛出错误*
```javascript
throw new Error('this is a error!');
```