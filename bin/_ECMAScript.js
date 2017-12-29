/*变量和常量*/
	var 变量名=值(默认值:undefined);
	let 变量名=值; //防止声明提前
	coust 常量名=值;

/*数据类型*/
	基本类型
		string/number/boolean/null/undefined
	引用类型
		ES对象类型:Object/Function/Array/String/Math/Date/RegExp/Error/...
		BOM对象类型:window/document/frames/history/navigator/location/screen/event/...
		DOM对象类型:Node/Element/Attr/...
	用户自定义{}

/*类型自动转换*/
	数字+字符串=字符串
	数字+布尔=数字
	字符串+布尔=字符串
	布尔+布尔=数字

/*转义字符*/
	\n : 换行
	\t : 制表符
	\" : "
	\' : '
	\\ : \

/*String API*/
所有字符串API都无权修改原字符串,只能返回新的字符串;
	var char=str[i]; 返回指定下标的字符
	var n=str.length; 返回字符串长度
	str.toUpperCase();	返回一个大写字符串
	str.toLowerCase();	返回一个小写字符串
	str.charAt(i);	获取指定位置的字符;若不写下标i,默认为0.
	var unicode=str.charCodeAt(i);	获取指定位置字符的unicode号
			汉字的Unicode码的范围:"\u4e00"~"\u9fa5"
	var char=String.fromCharCodu(unicode);	将Unicode号转换为对应文字
	str.slice(start,end+1); 截取子字符串;
	str.substring(start,end+1);  截取子字符串,不支持负数参数
	str.substr(start,n);	截取子字符串,n指截取数量
	查找一个固定的关键词出现的位置
		var i=str.indexOf("关键词",开始下标); 若有,返回关键词开始的下标;若无,返回-1;忽略下标,默认为0;
		var i=str.lastIndexOf("关键词"); 查找最后一个关键词的位置
	判断是否包含敏感词
		var i=str.search(/正则表达式/); 只能找到第一个敏感词的位置,不能获取内容.
   查找所有敏感词的内容
		var kwords=str.match(/正则表达式/ig); 返回一个多个敏感词的数组,若无返回null //i:不区分大小写,g:匹配多个
	查找所有关键词的内容及其位置
		var array=regexp.exec(str); 若无返回null
	将所有敏感词都替换为统一的新内容
		str=str.replace(/正则表达式/ig,"新内容");
	根据不同的敏感词自动选择更新的内容
		str=str.replace(/正则表达式/ig,function(kw){
			return 值;
		});
	删除敏感词
		str=str.replace(/正则表达式/ig,"");
	按字符切割字符串
		var subs=str.split("分隔符"); 返回数组
	按正则表达式切割字符串
		var subs=str.split(/正则表达式/); 返回数组
/*模版字符串*/
	用反引号` `包裹字符串
	用${js表达式}生成JS内容
/*正则表达式*/
	最简单的正则表达式: 就是关键词原文
	字符集: [备选字符列表]
		eg:[\u4e00-\u9fa5] 一位汉字	
	    	[0-9]           一位数字    
	    	[a-z]           一位小写字母    
	    	[A-Z]           一位大写字母   
	    	[A-Za-z]        一位字母     
	    	[0-9A-Za-z]     一位字母或数字  
	    	[^×××]          除了	
	预定义字符集:
		\d     一位数字
		\w     一位字母,数字或下划线
		\s     一个空字符
	量词:只修饰前面一个字符集
		{m,n}	 至少m次,最多n次
		{m,}   至少m次,多了不限
		{m}	 必须m次
		*      可有可无,多了不限
		+      至少一次,多了不限
		?      可有可无,最多一次
	分组:将多个字符集用()包裹在一起成为一组,放在()后的量词修饰整个分组.
	选择:	规则1|规则2
	特殊位置:
		^	 匹配字符串开头  	
		$	 匹配字符串结尾	 
		\b	 单词边界
	中国大陆手机号: (+86|0086)?\s+1[34578]\d{9}
	身份证号:	    \d{15}(\d{2}[0-9Xx])?

/*RegExp*/
	创建对象
		var reg=/正则表达式/ig; 
			正则表达式是固定不变的;/ /中不支持JS语句,不能出现/,若需要就用\/
		var reg=new RegExp("正则表达式","ig");	
			正则表达式需要动态拼接而成;""不能出现\,若需要就用\\
	API
		在str中查找下一个符合reg要求的关键词的内容和位置.
			var arr=reg.exec(str); 找到,返回关键词的内容和位置的数组;没找到,返回null
				数组:{0:"找到的关键词",index:关键词位置}
		用reg验证str的格式是否符合规则
			var bool=reg.test(str); 返回true或false
				要求var reg=/^正则表达式$/ig;
			eg:var arr=null;
				while((arr=reg.exec(str))!=null){
				    arr[0] //完整关键词
				    arr[n] //第n个分组的子内容
				    arr.index //本次找到关键词的位置
				    reg.lastIndex //下次开始查找的位置
				}

/*Math API*/
	Math.ceil(num); 上取整
	Math.floor(num); 下取整
	Math.round(num); 四舍五入
		function round(num,d){num*=Math.pow(10,d);num=Math.round(num);return num/Math.pow(10,d);}
	Math.pow(底数,幂); 乘方
	Math.sqrt(num); 开平方
	Math.max(值1,值1,…,值n); 找最大值
	Math.min(值1,值1,…,值n); 找最小值
	Math.max(...array); 找数组中的最大值
	Math.min(...array); 找数组中的最小值
	Math.random(); 随机生成一个0~1之间的小数
	parseInt(Math.random()*(max-min+1)+min); 随机生成任意min~max之间的整数 
	parselnt(Math.random()*(max+1)); 随机生成任意0~max之间的整数

/*Date*/
	创建对象
		var now=new Date(); 自动获得客户端当前系统时间
		var date=new Date("年/月/日 时:分:秒"); 获得自定义时间点
		var now=new Date(ms); 将一个毫秒数转换为日期对象
		var ms=date.getTime(); 把日期对象转换为毫秒
		两个日期对象相减结果是毫秒差.
	API
		单位 : FullYear年/Month月/Date日/Day星期/Hours时/Minutes分/Seconds秒/Milliseconds毫秒
		var n=date.get单位(); 获得日期中指定单位的数值;
		date.set单位(num); 修改日期中指定单位的数值
		取值:
			Month:0~11  取值时+1,修改时-1
			Date:1~31
			Day:0~6
			Hours:0~23
			Minutes/Seconds:0~59
		tick.set单位(tick.get单位()+/-n); 对日期中任意一个单位进行加减
		日期格式化:
			date.toString()	  转为当地时间的完整格式
			date.toLocaleString()  转为当地时间的简版格式
			date.toLocaleDateString()  保留日期部分
			date.toLocaleTimeString()  保留时间部分
			date.toGMTString()	  转为0时区标准时间
		var max=Number.MAX_VALUE; JS中能存储的最大时间(ms)

/*Errer*/
	错误处理
		try{
			可能发生错误的正确代码
		}catch(err){   
			只有出错时才自动执行的错误处理代码
			(提示用户,保持进度,记录日志)
		}
		if(...){...}else{...}
	错误对象err
		属性:	name	保存错误的类型
				message	保存错误的提示信息
		类型:	SyntaxError		语法错误
				ReferenceError	引用错误,找不到对象
				TypeError		类型错误,错误地使用了类型或错误地调用了类型的方法
				RangeError		范围错误,参数超出范围
				URIError		   url格式错误
				EvalError	   eval错误
	主动抛出错误
		throw new Error("错误提示信息");

/*运算符*/
	算术运算符:		
		+,-,*,/,%,++,--
			eg: i++; <=> i=i+1;
	关系运算符:		
		<,<=,>,>=,==,!=,===,!==
	逻辑运算符:		
		&&,||,!
			eg: false=false&&boolean;
			    true=true||boolean;
	位运算符:			
		>>,<<,&,|,^
			eg:m>>n  相当于	m/2的n次方
				m<<n  相当于 	m*2的n次方
				判断奇偶数   if(数字&1==1){奇数} if(数字&1==0){偶数}
				向下取整     var int=小数|0;
				交换两个数字 a=a^b;b=b^a;a=a^b;
	赋值运算符:		
		=,+=,-=,*=,/=,%=
			eg: i+=j <=> i=i+j
	条件运算符:		
		boolean?true:false;

/*分支结构*/
	if(条件){语句块}
	if(条件){语句块1}else{语句块2}
	if(条件1){语句块1}else if(条件2){语句块2}else{语句块3}
	switch(值/表达式){case 值1: 语句块1; break; ... ; default: 语句块n;}
	switch(值/表达式){case 值1: case 值2: case 值3: 语句块1;}
	0,0.0,"",'',undefined,null,NaN => false
/*循环结构*/
	while(条件){循环主体}
	do{循环主体}while(条件);
	for(表达式1;表达式2;表达式3){循环主体}
	for(var elem of arr){循环体} 
		elem依次取出arr中的每个元素值
		无下标
		不能控制遍历的开始和结束,以及遍历的步调
		按值传递,不修改原数组.
	break 终止整个循环的运行
	continue 终止本次循环进行下一次循环

/*块级作用域*/
	if...else...
	switch...case...
	for... //有闭包效果
	while...
	do...while
	的{}内用let声明变量

/*预定义函数*/
	var float=num.toFixed(n); //保留小数点后n位数
	var type=typeof(变量); //检查变量的数据类型
	var result=变量.toString(); //将任意类型数据转换为字符串
	var result=parseInt(变量); //将任意类型数据转换为整数/NaN
	var result=parseFloat(变量); //将任意类型数据转换为小数/NaN
	var result=Number(变量); //将任意类型数据转换为number/NaN
	var result=isNaN(数据); //判断一个数据是否为非数字
	var uri=encodeURI(string); //将多字节字符串编码为单字节字符串
	var str=decodeURI(uri); //将URI解码返回字符串
	var uri=encodeURIComponent(string); //对特殊符号进行编码
	var str=decodeURIComponent(uri); //特殊符号解码@
	eval(string); //执行字符串中的JS代码
	console.log(...); //向控制台打印输出
	document.write(...); //向页面输出文本或html片段
	alert(...) //弹出提示框
	prompt(...); //弹出输入框,返回字符串

/*Function*/
	创建/调用:
		function 函数名(){函数主体}
			函数名(); 
		function 函数名(参数列表){函数主体}
			函数名(参数值列表);
		function 函数名(参数列表){函数主体; return 值;}
		let 函数名=function(参数列表){函数体; return 值;}
		var 函数名=new Function("参数名","参数名",...,"函数体;值");
			var result=函数名(实参列表);	
	重载:同一函数名,根据不同的参数执行不同函数
		arguments是类数组对象
			var cansu=arguments[i]; 获取i下标的参数
			var n=arguments.length; 获取长度
			for(var i=0;i<arguments.length;i++){...} 可以遍历
			arguments.callee 自动获取当前函数名
	匿名函数:
		回调:将一个函数给另一个函数,由另一个函数去调用.
			eg: str.replace(/reg/g, function(kw,$1,$2,...){return 替换值})
		自调:定义函数后,立刻自己调用自己.
			(function(参数列表){函数体; return 返回值})(参数值列表)
	Promise:
		定义
			function Step1(){
				return new Promise(function(callback){
					callback();//只能传入一个参数,所以用数组或对象传参
				})
			}
		调用
			Step1.then(function(){
				return Step2();
			}).then(function(){
				Step3();
			})
		错误处理:
			定义:	
				function Stepn(){
					return new Promise(function(success,fail){
						//决定何时调用success,何时调用fail
					})
				}
			调用:
				Step1().then(function(){
					return Step2();
				}).then(function(){
					return Step3();
				}).catch(function(){
					错误处理代码
				});
	闭包:
		用外层函数包裹受保护的变量和内层函数
		外层函数将内层函数返回到外部
			return
			直接给全局变量赋值一个内层函数
			将内层函数包裹在数组或对象中返回
		调用外层函数获得内层函数对象
	箭头函数:对所有回调函数进行简化,内外共用同一个this.
		(参数列表)=>{函数体;} 代替 function(参数列表){函数体;}
		若函数体只有一句话,用 函数体 代替 {函数体;}
		若函数体仅有一句return...,则return可以省略.	
		若函数仅有一个参数,可以省略()
	参数默认值Default
		function 函数名(参数1,参数2,参数3=默认值){函数体;}
	剩余参数REST
		function 函数名(参数1,参数2,...数组名){函数体;}
		在调用时,在函数内创建同名数组,数组接收除了前面参数之外的所有剩余参数.
		相当于 var arr=Array.prototype.slice.call(arguments,start);//从下标start开始将类数组对象转换为数组
	散播Spread
		函数名(...数组);
		打散数组类型参数为单个元素
		相当于 函数名.apply(obj,参数值数组);

/*Object对象*/
	声明:	var 对象名={
	   		属性1:值1,
	    		属性2:值2,
	    		属性n:值n
			};
	调用:	对象名.属性
	对象解构
		var {uid:id,uname:name,upwd:pwd}={id:1,name:"chenbin",pwd:"888888"}
		var {uid,uname,upwd}={uid:1,uname:"chenbin",upwd:"888888"}
/*OOP面向对象*/
	创建
		var 对象名={属性名:值,...,方法名:function(){...}}
			访问属性:   对象名.属性名;
			访问方法:   对象名.方法名();
			对象的方法访问本身属性:	this.属性名
		var 对象名=new Object();
			对象名["属性"]=值;
			对象名["方法"]=function(){...this.属性名...}
		var obj=new 构造函数名(属性值列表);
			function 构造函数名(属性参数列表){
				this.属性名=属性参数;
				...
				this.方法名=function(){
					...this.属性...
				}
			}
			构造函数.prototype.成员名=值/function(){...}
		class 类型名{
     	constructor(属性参数列表){ //构造函数
       	this.属性名=属性参数;
        ...
     	}
     	方法1(){...},  //原型对象
     	...
   	}
	原型对象指向构造函数		
		原型对象.constructor
	判断原型对象(如Array)
		Array.prototype.isPrototypeOf(obj);
		obj.__proto__===Array.prototype;
	判断构造函数(如Array)
		obj instanceof Array;
		obj.constructor===Array;
	判断内部class属性
		Object.prototype.toString.call(obj);
	判断数组:
		Array.isArray(obj);
	重写override
		子对象认为父对象的成员不好用,在子对象本地定义同名成员,覆盖父对象的成员.
		.call() 可以让一个对象强行调用,本来无法调用的任何函数
		super.父类型方法() //在子类型的重写方法中,借用父类型的方法
	继承
		让子类型继承父类型
			class 子对象类型 extends 父对象类型
		在子类型构造函数中,借用父类型构造函数
			super(属性参数列表)
				自动指向父类型构造函数,自动替换其中this为当前对象
	自定义继承
		仅修改一个对象的父对象.
			Object.setPrototypeOf(child,father);
			child.__proto__=father;
		同时修改所有子对象的父对象(构造函数的原型对象)
			构造函数.prototype=father; 
	让构造函数1的原型对象继承构造函数2的原型对象
		Object.setPrototypeOf(构造函数名1.prototype,构造函数名2.prototype);
	创建子对象
		Object.create=function(father,props){
		   var Fun=function(){};
		   Fun.prototype=father;
		   var child=new Fun();   
		   if(props!==undefined){
		      for(var key in props){
		         child[key]=props[key].value;
		      }
		   }
		   return child;
		}
/*保护对象*/
	命名属性public:能用"."直接访问;
		数据属性
			value:值
				存储当前属性的值
			writable: true/false
				是否可修改属性值
			enumerable: true/false
				是否可以被for...in...遍历
				但能用"."访问
			configurable:true/false
				configurable:false的修改单向不可逆
				是否可修改另外两个特性
				是否可删除当前属性
			修改
				Object.defineProperty(obj,"属性名",{特性:值});
				Object.defineProperties(obj,{属性名:{特性:值,...},属性名:{特性:值,...}});
				若修改属性不存在,会自动添加新属性;修改后configurable默认为false
			查询
				Object.getOwnPropertyDescriptor(obj,"属性名");
		访问器属性
			Object.defineProperty(obj,"访问器属性名",{
				get(){ return this.受保护的数据属性},
				set(val){
					if(条件){
						this.受保护的数据属性=val;
					}else{
						throw new Error("错误信息");
					}		    
				},
				enumerable:true,
				configurable:false
			});
		ES6:
			get 访问器属性名(){return this.受保护的隐藏数据属性}
			set 访问器属性名(val){验证,赋值/报错}
	内部属性private:保存在对象内部,不允许擅自访问;
		class
			Object.prototype.toString.call(obj)
		__proto__
			Object.getPrototypeOf(obj)
			Object.setPrototypeOf(child,father)
		extensible:true
			var bool=Object.isExtensible(obj)
			Object.preventExtensions(obj)
	保护结构
		Object.preventExtensions(obj); 禁止添加新属性
			Object.isExtensible(obj) //判断是否已禁止扩展
		Object.seal(obj); 禁止添加新属性,禁止删除现有属性
			Object.isSealed(obj) //判断是否已密封
		Object.freeze(obj); 禁止对对象的属性和结构做任何改动
			Object.isFrozen(obj); //判断是否被冻结
	基于父对象创建子对象
		var child=Object.create(father,{属性名:{特性:值,...},属性名:{特性:值,...}});
	静态方法:
		定义  static 静态方法名()
		调用  类型名.静态方法名()
	函数.call(obj,参数,参数,...);
		call在调用函数时,临时替换其中的this;要求传入被调用的函数的参数必须独立传入.
	函数.apply(obj,array);
		apply在调用函数时,临时替换其中的this;要求传入被调用的函数的参数必须放在数组中整体传入.
	var 函数名=函数.bind(obj,参数,...);
		bind 永久修改一个函数中的this;基于原函数,创建一个新函数,并永久绑定this和部分参数

/*HTML元素事件*/
	onclick 鼠标点击事件
	onblur 失去焦点事件
	onfocus 获取焦点事件
	onload 网页加载事件
	onchange 选项框内容改变事件

/*索引数组*/
	声明:
		var 数组名=[];
		var 数组名=[元素1,元素2,…,元素n];
		var 数组名=new Array();
		var 数组名=new Array(元素1,元素2,…,元素n);
	赋值:	
		数组名[i]=值;
	取值:	
		var result=数组名[i];
	获取长度:
		var n=数组名.length;
	清空数组:
		数组名.length=0;
	冒泡排序:
		for(var i=1;i<arr.length;i++)
			for(var j=0;j<arr.length-i;j++){
				if(arr[j]>arr[j+1]){
					arr[j]^=arr[j+1];arr[j+1]^=arr[j];arr[j]^=arr[j+1];
				}
			}
		}
/*关联数组*/
	声明:
		var array=[];
	赋值:	
		array["下标名"]=值;
	遍历:
		for(var 变量 in 数组){
			//变量=>字符串/数字
		}
/*数组解构*/
	eg: var [name,age,gender]=["陈彬",24,"男"];
/*数组API*/
	var str=数组对象.toString(); //将一个数组转换为字符串
 	var str=数组对象.join("字符串"); //将数组的元素通过指定的字符连接到一起,返回字符串
	var result=数组对象.concat(数组1,数组2,…,数组n);//拼接多个数组/数据,返回数组
	var arr=数组对象.slice(start,end);//在指定的数组中,截取并返回几个连续的元素形成新数组
	var arr=数组对象.splice(start,count,数据1,数据2,…);//修改指定数组中的元素,返回删除元素的数组
 	var arr=数组对象.reverse(); //将数组的元素顺序反转
 	数组对象.sort(function(a,b){return a-b;});//数组元素升序排序
	数组对象.sort(function(a,b){return b-a;});//数组元素降序排序
	var n=数组对象.push(数据); //在数组后追加新元素,返回长度
	var 变量名=数组对象.pop();//删除数组最后的元素,返回删除的元素
	var 变量名=数组对象.shift();//删除数组第一个元素,返回删除的元素
	var n=数组对象.unshift(...);//在数组头部增加一个或多个元素,返回长度
	arr.every(function(elem,i,arr){ //判断数组中是否所有元素都是符合条件
		// elem自动获得当前元素值
		// i 自动获得当前元素位置
		// arr自动获得当前正在遍历的数组对象
		return 有elem和i,arr参与的判断条件
	});
	arr.some(function(elem,i,arr){ //判断数组中是否包含符合条件的元素
		return 有elem和i,arr参与的判断条件
	});
	arr.forEach(function(elem,i,arr){arr[i]=新值;}); //对数组每个元素执行相同操作
	arr.map(function(elem,i,arr){return 新值;}); //复制数组元素,执行相同操作后,放入新数组返回
	arr.filter(function(elem,i,arr){return 判断条件;}); //取出符合条件的元素,放入新数组中返回
	var result=arr.reduce(function(prev,elem,i,arr){return prev+elem;},base); //汇总
		//prev 截止目前为止之前的临时汇总值
		//base 基数

/*严格模式*/
	"use strict"
		①禁止给未声明的变量赋值.
		②将静默失败升级为错误.
		③不推荐使用arguments和arguments.callee等(所有递归用循环代替).
		④匿名函数和普通函数中的this,不再擅自指向window,而是undefined.

扩展:
	Javascript由ECMAScript,Document Object Model,Browser Object Model组成.
	常量:在程序中,一经声明就不允许被修改的数据.
	数据类型规定了数据在内存中所占的空间.
	字符串中的每个字符,都是由Unicode的字符,标点和数字组成.
	表达式:运算符连接操作数所组成的有结果的式子.
	函数:一段预定义好,并可以被反复执行的代码块.
	作用域:变量或函数的可访问范围。
	函数作用域AO:保存着局部变量,只在某函数范围内有效.
	全局作用域window对象:保存着所有全局变量,代码的任何位置都有效.
	作用域链:由多级作用域对象,连续引用形成的链式结构.
	局部变量:只有在声明的函数中有效.
	全局变量:一经声明,任何位置都能用.
	局部函数:在某个function中声明的函数.
	全局函数:在<script>中定义的函数,一经定义,任何位置都能调用.
	声明提前:JS程序在正式执行之前,会将所有var声明的变量和function声明的函数,都预读到所在作用域的顶部。但赋值保留在原位.
	按值传递:基本数据类型的数据,在做参数传递时,都是按照 值传递 的方式进行传参的。
	值传递:在真正传递参数时,实际上传递的是值的副本,而不是原始值.
	递归:在一个函数的内部再一次调用自己.
	数组:在一个变量中保存多个数据,按照线性顺序来排列.
	引用传递:将数组作为参数传递给函数时,实际上传递的是数组的地址,而不是数组中的值.
	字符串string:由多个字符组成的只读数组.
	垃圾回收机制:
		垃圾: 不再被任何变量引用的对象.
		垃圾回收:JS引擎会自动跟踪对象的引用个数,自动释放不再被任何变量引用的对象.
		垃圾回收器:专门跟踪对象引用个数并释放垃圾对象的小程序(JS引擎自带,伴随主程序在后台并行运行)
		主动释放内存:将引用对象的变量赋值为null.
	函数的生命周期:
		开始执行程序前
			浏览器创建执行环境栈(ECS),依次保存正在调用的函数记录的数组,在ECS中添加浏览器主程序的调用,主程序main()创建全局作用域对象window,保存所有在全局范围声明的变量和函数,可反复使用.
		定义函数时
			用函数名创建变量,再创建一个函数对象保存函数定义的代码段,让函数名变量引用函数对象,函数对象用隐藏的scope属性记住诞生自己的上级作用域并引用window.
		调用函数时
			在ECS中加入本次函数调用的记录,为本次函数调用创建活动对象(AO),在活动对象中保存函数中声明的所有局部变量,让活动对象自动引用函数的scope指向的父级作用域
		函数调用后
			将函数调用的记录从ECS中删除,活动对象因无调用被释放,局部变量一同被释放.
	闭包
		形成: 外层函数调用后,外层函数的函数作用域对象无法释放.
		释放: 将保存内层函数的变量赋值为null.
		场合: 为一个函数添加持久的专属的变量时使用
	对象: 描述现实中一个具体事物的属性和功能的程序结构.
	面向对象:程序都是用对象结构来描述现实中一个具体事物的属性和功能.
	this:函数内自动引用正在调用函数的 . 前的对象的关键词
	构造函数:描述同一类型的所有对象的同一结构的函数
	调用构造函数new事件:
		创建一个新的空对象.
		设置新对象的__proto__属性继承构造函数的原型对象.
		调用构造函数,并将构造函数中的this指向正在创建的新对象.
			将属性参数值保存到this
			this.属性=属性参数
			在新对象中强行创建新属性
		将新对象地址返回给变量中保存.
	OOP继承:父对象的成员，子对象无需创建就可直接使用.
		自有属性: 保存在当前对象本地的，归当前对象独有
  		共有属性: 保存在父级对象中的属性，归当前类型下所有子对象共用的属性
	原型对象:集中存储同一类型的所有子对象,共有成员的父对象.
	ES原型对象:String,Number,Boolean,Array,Date,RegExp,Math,Error,Function,Object,Global
		构造函数:创建该类型的子对象,保存数据
   	原型对象:保存该类型的所有子对象共用的API
   	window,Math 无需创建,也不是构造函数,也没有原型对象
	包装类型:专门保存一个原始类型的值,并提供操作原始类型值的API的类型.
	原型链:由多级父元素逐级继承,形成的链式结构,保存所有对象中的属性,控制着对象属性的使用范围(继承关系越上层的属性,共用范围越广)和使用顺序(自有->共有).
	OOP多态:同一个函数在不同情况下表现出不同的状态
	两种类型间的继承:
		抽象出一个公共的父类型
		定义父类型构造函数,包含相同部分的属性结构
		在父类型的原型对象中添加公共的方法
		让子类型原型对象继承父类型原型对象
		在子类型构造函数内借用父类型构造函数
		函数不能用"."和new调用,其中的this默认都指window;
		函数.call(obj,参数,...) 调用函数,并将函数中的this临时替换为obj