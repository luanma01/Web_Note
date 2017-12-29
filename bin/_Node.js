模块的构造函数
	(function(exports,require,module,__filename,__dirname){
		exports:{} 声明向外布导出自己的成员
		require:fn 导入其他模块,创建指定模块对象
		module	代码当前模块对象
		__filename 当前模块物理路径
		__dirname 当前模块所有目录物理路径
		//自己编写的程序内容
	});

向外导出数据
	module.exports.成员名=值;
	module.exports={成员名:值}
  exports.成员名=值;

预定义模块 Global
	exports
	module
	require
	__filename
	__dirname
	setInterval()
	setTimeout()
	setImmediate(fn)
	console.log()/dir()/time()/timeEnd()/assert()/...

自定义模块
	文件模块:
		编写Node.js文件,导出数据,其他模块可用require("./模块文件名")引入;
	目录模块:
		1. 创建一个×××文件夹,在×××文件夹中创建index.js文件,在index.js文件中导出数据,在xxx文件夹外其它模块可用require("./×××")引用数据;
		2. 创建一个×××文件夹,在×××文件夹中创建package.json文件和启动程序×.js文件,在×.js文件中导出数据,在package.json文件中声明{"name":"×××","version":"版本号","author":"作者","main":"./×.js"},在×××文件夹外其它模块可用require("./×××")引用数据;
		3. 创建一个node_modules文件夹,在node_modules文件夹下创建×××文件夹,在×××文件夹中创建package.json文件和启动程序×.js文件,在×.js文件中导出数据,在package.json文件中声明{"name":"×××","version":"版本号","author":"作者","main":"./×.js"},在node_modules文件夹下其它模块可用require("×××")引用数据;

官方模块
	querystring:处理HTTP请求URL中的查询字符串
		const qs=require("querystring");
		var obj=qs.parse(str);//把查询字符串解析为JS对象
		var str=qs.stringify(obj);//把JS对象转换为查询字符串
	url:解析一个URL请求地址,获取其中不同部分
		const url=require("url");
		var obj=url.parse(str);//把一个URL地址解析为一个对象
		var obj=url.parse(str,true);//把一个URL地址解析为一个对象,把其中的查询字符串也解析为对象
	Buffer:缓存区,暂存以后要用的数据
		var buf=Buffer.alloc(1024*5);//创建大小为5KB的缓冲区
		var buf=Buffer.from(数组);//使用数字数组创建缓冲区
		var buf=Buffer.from(字符串);//使用字符串创建缓冲区
		var str=buf.toString();//把缓冲区的数据转换为字符串
	fs:对系统中的文件进行增删改查,读写
		const fs=require("fs");
		var data=fs.readFileSync(file);//同步读取数据
		fs.writeFileSync(file,str/buf);//同步写数据,清除原来数据
		fs.appendFileSync(file,str/buf);//同步追加数据
		fs.readFile(file,function(err,data){if(err){throw err}else{data}});//异步读取数据
		fs.writeFile(file,str/buf,function(err){if(err){throw err}});//异步写数据,清除原来数据
		fs.appendFile(file,str/buf,function(err){if(err){throw err}});//异步追加数据
	http:编写基于HTTP协议客户端或服务器端程序
		const http=require("http");
		var server=http.createServer((req,res)=>{});//创建服务器对象
		server.listen(1~65535);//绑定监听端口
		server.on("request",function(req,res){
			req.method;//请求方法
			req.url;//请求地址
			req.httpVersion;//请求协议版本
			req.headers;//请求消息头
			res.statusCode=×××;//设置响应字体码
			res.setHeader("...");//设置响应消息头
			res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8','Cache-Control':'no-cache'});//设置响应消息
			res.write("html代码");//设置响应内容
			res.end();//响应结束
		});

第三方模块
	Mysql:用于访问与操作mysql数据库服务器
		const mysql=require("mysql");
		var conn=mysql.createConnection({//创建数据库连接
			host:'127.0.0.1',//IP地址
			user:'root',//用户名
			password:'',//密码
			database:'',//数据库名
			port:3306//端口号
		});
		var sql="";//SQL语句中的数据使用占位符?
		conn.query(sql,[?],function(err,result){//执行SQL语句
			if(err){throw err;}
			result.affectedRows;//SQL语句影响行数
			/*
			SELECT语句
				没有记录,返回 []
				一条记录,返回 [{}]
				多条记录,返回 [{},{},...]
			*/
		});
		conn.end();//关闭数据库连接
	express:基于http模块,接收客户的请求消息,返回响应消息
		const http=require("http");
		const express=requre("express");
		const mysql=require("mysql");
		const bodyParser=require("body-parser");//中间件模块
		var pool = mysql.createPool({//创建连接池
			host:"127.0.0.1",//IP地址
			user:"root",//用户名
			database:"",//数据库名
			password:"",//密码
			port:3306,//端口
			connectionLimit:25//的最多可创建连接对象
		});
		var app=express();//创建express对象
		app.use(bodyParser.urlencoded({extended:false}));//添加中间件列表
		app.use(express.static("目录名"));//托管静态文件
		var serve=http.createServer(app);//创建服务器对象
    server.listen(1~65535);//绑定监听端口
		app.get(url,(req,res)=>{//接受数据,响应数据
			res.send("内容");//响应字符串/html片段
			res.sendFile(__dirname+"文件名");//响应文件内容
			res.json(obj);//把对象转换为json字符串并响应
			res.set({'Access-Control-Allow-Origin':'http://127.0.0.1'}).json(obj);//跨域访问                
			req.query.参数名;//获取客户端传入的参数
		});
		app.get(url+"/:参数名",(req,res)=>{
			req.params.参数名;//获取客户端传入的参数
			pool.getConnection((err,conn)=>{//租用一个连接对象
				if(err){throw err;}
				var sql="";
				conn.query(sql,[?],(err,result)=>{
					conn.release();//释放连接对象
				});
			});
		});
		app.post(url,(req,res)=>{
			req.on("data",(buf)=>{//获取客户端的参数
				const qs=require("querystring");
				var obj=qs.parse(buf.toString());
			});
			var str=req.body.参数名;//获取客户端的参数
		});
		app.put(url,(req,res)=>{});//添加
		app.delete(url,(req,res)=>{});//删除
	session:保存会话数据(用户ID,权限)
		const session=require("express-session");
		app.use(session({
			resave:false,//每次请求是否需要重新设置cookie
			saveUninitialized:true,//设置标记connect.sid
			secret:""//在https协议中设置加密标记
		}));
		req.session.属性名=值;//给session对象添加属性
		var 属性名=req.session.属性名;//获取session对象的属性值
	cookie:游览器保存数据
		const cookieParser=require("cookie-parser");
		app.use(cookieParser());
	cors:跨域访问
		const cors=require("const");
		app.use(cors({
			origin:["域名",...],//允许访问的域名
			credentials:true
		}));
		在ajax中,路径使用绝对url,添加xhrFields:{withCredentials:true}

中间件:执行任何代码,修改请求和响应对象,终结请求-响应循环,调用下一个中间件.
	分类:
		应用级中间件
			var app=express();
			①	app.use(function(req,res,next){//每个请求前调用
					Nodejs代码;
					next();
				});
			②	app.use(url,function(req,res,next){//指定请求前调用
					Nodejs代码;
					next();
				});
			③	app.use(url,function(req,res,next){//双重过滤
					Nodejs代码;
					next();
				},function(req,res,next){
					Nodejs代码;
					next();
				});
		路由级中间件(路由=请求路径+处理方法+处理函数)	
			① const router=require(url); //路由器引入模块
				app.use(url,router); //路由器加载模块	
			②	var router=express.Router(); //加载模块中间件
				router.get(url1,(req,res,next)=>{...});
				router.post(url2,(req,res,next)=>{...});
				module.exports=router; //公开数据
		内置中间件(express的static)
		第三方中间件(session,cookie,cors)
		错误处理中间件

NPM 包管理器
	官网 www.npmjs.org
	下载 npm install 包名;
	卸载 npm uninstall 包名;
	包名:express,body-parser,mysql,cookie-parser,express-session,cors

数据库存储三种方案
  大量数据保存mysql数据库中
  NOSQL解析方案:Redis(内存级别数据库)
  文件存储

网络攻击手段
	SQL注入
		解决:	1.使用占位符?
					2.把项目工程分为前端业务和核心功能两个部分
	XSS脚本攻击
		解决: 过滤所有用户传输的数据

跨域访问:域名/端口号/协议/IP与主机名
	允许跨域:js/css/img
	不允许跨域:xhr(AJAX)

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});