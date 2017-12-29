/*变量和常量*/
声明:	$变量名=值;
输出值:		echo $变量名;
输出类型和值:	var_dump($变量名);
声明:	const 常量名 = 值;
输出:	echo 常量名;

/*数据类型*/
标量类型:int/integer,float/double,string,bool/boolean
复合类型:array,object
其它类型:null/NULL,resource

/*运算符*/
算术运算符:	+,-,*,/,%,++,--
比较运算符:	<,<=,>,>=,==,!=,===,!==
逻辑运算符:	&&,||,!
位运算符:	<<,>>
赋值运算符:	=,+=,-=,*=,/=,%=
拼接运算符:	  .  ,  .=
三目运算符:	bool?true:false;
特殊运算符:	 [],=>

/*选择执行*/
if(条件判定){条件判定为true时执行的代码;}
if(条件判定){条件判定为true时执行的代码;}else{条件判定为false时执行的代码;}
if(条件判定){语句1;}else if(条件判定){语句2;}else{语句3;}
switch(值/表达式){case 值1:语句1;break;case 值2:语句2;break;default:语句C;}

/*循环执行*/
while(循环条件){循环体;}
do{循环体;}while(循环条件);
for(表达式1;表达式2;表达式3){循环体;}

/*索引数组*/
声明:	$数组名=[];
		$数组名=[值];
		$数组名=[值1,值2,值3,…,值n];
查看数组:	var_dump($数组名);
输出某个元素:	echo $数组名[下标];
修改某个元素:	$数组名[下标]=值; 
数组元素个数:	$num=count($数组名);
添加新元素:		$数组名[]=值; 
/*关联数组*/
声明:	$数组名=["下标"=>值,...];
输出某个元素:	echo $数组名['下标'];
修改某个元素:	$数组名['下标']=值;
添加新元素:		$数组名['下标']=值;
遍历:	foreach($数组名 as $下标名=>$值名){}
/*数组转换为JSON字符串*/
$变量名= json_encode($数组名);

/*预定义数组*/
$_GET[]
$_POST[]
$_FILES[]
$_COOKIE[]
$_SESSION[]
$_REQUEST[]

/*函数*/
声明:	function 函数名(){函数主体}
		function 函数名(形式参数1,形式参数2){函数主体}
		function 函数名(形式参数){函数主体; return 值;}
调用:	函数名();
		函数名(实际参数1,实际参数2);
		$result=函数名(实际参数);

/*访问Mysql服务器*/
接收html数据:	@$变量=$_REQUEST["接收数据"] or die("输出内容");
连接服务器:		$conn=mysqli_connect("IP地址","用户名","密码","数据库名",访问端口);
发送SQL命令:	$sql="增删改查";	$result=mysqli_query($conn,$sql);
引入外部文件:	require("×××.php");
获取自增编号	$id=mysqli_insert_id($conn);
获取影响行数	$count=mysqli_affected_rows($conn);
断开连接:		mysqli_close($conn);

/*预定义函数*/
substr(string,start,length) 返回string下标为start后length个字符.
strrpos(string,find,start) 查找字符串在另一字符串中最后一次出现的位置,大小写敏感.
strripos(string,find,start) 查找字符串在另一字符串中最后一次出现的位置,大小写不敏感.
strpos(string,find,start) 查找字符串在另一字符串中第一次出现的位置,区分大小写.
stripos(string,find,start) 查找字符串在另一字符串中第一次出现的位置,不区分大小写.
preg_match(/正则表达式/,string) 进行正则表达式匹配,成功返回1,否则返回0。
preg_match_all(/正则表达式/,string,array) 进行正则表达式全局匹配,成功返回整个模式匹配的次数,如果出错返回FALSE。
str_replace("关键词","新内容",string) 以其他字符替换字符串中的一些字符,区分大小写.
preg_replace(/正则表达式/,"新内容",string) 用正则表达式查找出字符并替换.
preg_replace_callback(/正则表达式/,函数,string) 查找到不同的字符串作为函数参数,返回不同的替换值.
str_split(string,length); 切割字符串,每段length个字符,返回数组.
preg_split(/正则表达式/,string) 正则表达式分割字符串,返回数组. 
sleep(n); 延迟n秒

/*从查询结果集中读取数据*/
mysqli_fetch_row($result);	取一行数据,返回索引数组
mysqli_fetch_assoc($result);	取一行数据,返回关联数组
mysqli_fetch_all($result);	取所有数据,返回索引数组
mysqli_fetch_all($result,MYSQLI_ASSOC);	  取所有数据,返回关联数组

扩展
	URL格式:<scheme>://<user>:<pwd>@<host>:<port>/<path>;<params>?<query>#<frag>
		scheme:方案,协议,以哪种方式到服务器获取资源,协议不区分大小写,常见的协议:http、https、ftp
		host:主机名,服务器的主机名或IP地址或域名(由DNS转换为IP地址)
		user:用户名,访问某些特定资源时需要用到信息
		pwd:密码,访问某些特定资源时需要用到信息
		path:路径,资源在服务器上具体存放的位置
		params:参数
		query:查询字符串,要传递给服务器的数据
		frag:锚点
	HTTP协议(Hyper Text Transfer Protocol超文本传输协议):规范了数据时如何打包以及传递
		请求(request)消息
			请求起始行
				请求方法:GET/POST/PUT/DELETE/HEAD/CONNECT/TRACE/OPTIONS
				请求URL
				协议版本:HTTP/1.1
			请求头
				Host:localhost
				Connection:keep-alive
				User-Agent:游览器类型
				Accept-Language:zh-cn
				Accept-Encoding:gzip
				Referer:http://×××.html
			请求主体
				Form Data
		响应(response)消息
			响应起始行
				协议版本号:HTTP/1.1
				响应状态码:100~199/200/301/302/304/404/403/405/500
				原因短句:对状态码的简单解释
			响应头
				Date:
				Connection
				Content-Type:
					text/html
					text/plain
					text/css
					application/javascript
					application/xml
					application/json
					images/jpeg
			响应主体
				Response
	缓存:客户端将服务器响应回来的数据进行自动保存,当再次访问时,直接使用使用保存的数据
		Cache-Control消息头:从服务器将文档传到客户端之时起,可以认为此文档处于新鲜的秒数
			Cache-Control:max-age=处于新鲜的秒数
		Expires消息头:指定缓存过期的确切时间
			Expires:Mon,25 Sep 2017,07:00:00 GMT
		在网页上设置消息头
			更改服务器配置
			网页上增加消息头
				html:
					<meta http-equiv="消息头" content="值">
				php:
					header("Expires:0");
					Response.AddHeader("Expires","0");
	preflight request(预险请求):在新版的Chrome/Firefox中,发送PUT/DELETE方式的xhr跨域请求时,游览器会先发送检测请求,询问服务器是否接收这种请求。
		
