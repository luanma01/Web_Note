自定义响应式布局
	声明viewport(视口)元素标签
		<meta name="viewport" content="...">
			width=device-width   视窗宽度等于设备宽度
			initial-scale=1.0    视窗初始化缩放比例
			use-scalable=no/yes  用户是否可以调整视窗缩放比例
			maximum-scale=1.0    最大视窗缩放比例
			minimum-scale=1.0    最小视窗缩放比例
	使用流式布局
		float:left;
		display:inline-block;
	容器/图片使用相对大小
		以%为单位的数值
	文字使用相对大小
		以em为单位的数值
	使用CSS3 Media Query技术
		media(设备)=screen(屏幕)/print(打印机)/tv/...
		根据不同屏幕大小选择不同外部样式表
			<link media="screen and (min-width:768px) and (max-width:991px)" rel="stylesheet" href="×××.css">
		根据不同屏幕大小执行不同css片段
			@media screen and (min-width:768px) and (max-width:991px){...css样式...}

Bootstrap框架
	起步   
		<!DOCTYPE html>
		<html lang="zh-CN"> //指定网页自然语言
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width,initial-scale=1">
		  <meta http-equiv="x-ua-compatible" content="IE-edge"> //让IE游览器用最新的引擎渲染网页
		  <title>bootstrap</title>
		  <link rel="stylesheet" href="css/bootstrap.css">
	    <!--[if lt IE 9]> 
	      <script src="js/html5shiv.min.js"></script> //兼容HTML5标签
	      <script src="js/respond.min.js"></script> //兼容CSS3 Media Query
	    <![endif]-->
		</head>
		<body>
		</body>
			<script src="js/jquery-1.11.3.js"></script>
			<script src="js/bootstrap.js"></script>
			<script src="js/bootlint.js"></script> //检测格式是否错误
			<script>bootlint.showLintReportForCurrentDocument([]);</script>
		</html>
  全局CSS样式
  	按钮
  		.btn 按钮基础样式
  		.btn-default 白底黑字按钮
   		.btn-danger/warning/success/info/primary 彩色按钮
   		.btn-lg/sm/xs 按钮大小
   		.btn-block 块级按钮
   	图片
   		.img-rounded 圆角图片
     	.img-circle 圆形图片
     	.img-thumbnail 缩略图片
     	.img-responsive 响应式图片
    文本
    	.text-danger/warning/success/info/primary 文本颜色
     	.bg-danger/warning/success/info/primary 背景颜色
     	.text-left/center/right/justify 对齐方式
     	.text-uppercase/lowercase/capitalize 特效
    列表
    	.list-unstyled 去除提示符号
     	.list-inline 行内列表
    表格
    	.table
	   	.table-bordered 带边框的表格
	   	.table-striped 隔行变色的表格
	   	.table-hover 鼠标悬停变色的表格
	   	.table-responsive 响应式表格(父元素)
	 	栅格系统(可嵌套)
	 		<div class="container或container_fluid">
	 			<div class="row">
	 				.col-lg-1~12 适用lg屏幕
	 				.col-md-1~12 适用md/lg屏幕
	 				.col-sm-1~12 适用sm/md/lg屏幕
	 				.col-xs-1~12 适用xs/sm/md/lg屏幕
	 				.col-lg/md/sm/xs-offset-1~12 向右偏移
			    .hidden-xs/sm/md/lg 仅在xs/sm/md/lg屏幕下隐藏
			    .col-lg/md/sm/xs-push-1~12 往右推
			    .col-lg/md/sm/xs-pull-1~12 往左拉
	 			<div>
	 		</div>
	 	扩展
	 		lg width>=1200px
	 		md 1200px>width>=992px
	 		sm 991px>=width>=768px
	 		xs 767px>=width
	 	默认表单
	 		<form>
				<div class="form-group">
					<label class="control-label" for="uname">用户名</label>
					<input type="text" id="uname" class="form-control">
					<span class="help-block">由字母或数字组成</span>
				</div>
			</form>
		行内表单
			<form class="form-inline">
				<div class="form-group">
					<label class="sr-only">用户名</label>
					<input type="text" class="form-control" placeholder="请输入用户名">
				</div>
			</form>
		水平表单
			<form class="form-horizontal">
				<div class="form-group">
					<div class="col-md-2">
						<label class="control-label" for="uname">用户名</label>
					</div>
					<div class="col-md-5">
          	<input class="form-control" type="text" value="" id="uname">
      		</div>
      		<div class="col-md-5">
		        <span class="help-block">由字母或数字组成</span>
		      </div>
				</div>	
			</form>
  组件
  	下拉菜单
  		<div class="dropdown">
        <a href="#" data-toggle="dropdown" class="btn btn-default">
          产品大全
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-header">分类</li>
          <li><a href="#">A</a></li>
          <li><a href="#">B</a></li>
          <li><a href="#">C</a></li>
        </ul>
    	</div>
    图标字体
    	FontAwesome
    	Glyphicons
    警告框
    	<div class="alert alert-warning/success/info/danger" data-dismiss="alert">
	     	<span class="close">&times;</span>
	      <span class="glyphicon glyphicon-alert"></span>
	      <p>警告信息</p>
	   	</div>
	  进度条
	  	<div class="progress">
				<div class="progress-bar progress-bar-success progress-bar-striped active" style="width:10%">10%</div>
			</div>	
		水井
			<div class="well well-lg/sm">水井</div>
		巨幕
			<div class="jumbotron">巨幕</div>
		徽章
			<span class="badge">徽章</span>
		分页条
			<ul class="pagination">
        <li><a href="#">1</a></li>
        <li class="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
    	</ul>
    标签
    	<div class="label label-danger/warning/success/info/primary">标签</div>
    面包屑
			<ul class="breadcrumb">
				<li><a href="#">中国</a></li>
				<li><a href="#">广东</a></li>
				<li><a href="#">深圳</a></li>
			</ul>
		缩略图
			<div class="thumbnail">
	     	<img src="x.jpg">
	     	<div class="caption">...</div>
	   	</div>
	  媒体对象
	  	<div class="media">
	      <div class="media-left">img</div>
	      <div class="media-body">p/div</div>
	      <div class="meda-right">img</div>
	    </div>
	  面板
	  	<div class="panel panel-danger/warning/success/info/primary">
     		<div class="panel-heading"></div>
     		<div class="panel-body"></div>
     		<div class="panel-footer"></div>
   		</div>
   	手风琴
   		<div class="panel panel-danger">
	     	<div class="panel-heading">
	        <a href="#xyz" data-toggle="collapse">展开/隐藏</a>
	        <button data-toggle="collapse" data-target="#xyz">展开/隐藏</button>
	     	</div>
	     	<div id="xyz" class="collapse in panel-collapse">
	        <div class="panel-body">内容</div>
	     	</div>
	   	</div>
	  导航栏
	  	<div class="navbar navbar-default/inverse (navbar-fixed-bottom)">
	  		<div class="container">
	  			<div class="navbar-header">
		       	<a href="#" class="navbar-brand">LOGO</a>
		       	<a href="#menu" data-toggle="collapse" class="navbar-toggle">
		           <span class="icon-bar"></span>
		           <span class="icon-bar"></span>
		           <span class="icon-bar"></span>
		       	</a>
		   		</div>
		   		<div id="menu" class="collapse navbar-collapse">
			      <ul class="nav navbar-nav">
			        <li class="active"><a href="#">首页</a></li>
			        <li class="dropdown">
			          <a href="#" data-toggle="dropdown">
			          	详情
			           	<span class="caret"></span>
			          </a>
			          <ul class="dropdown-menu">
			            <li><a href="#">A</a></li>
			            <li><a href="#">B</a></li>
			          </ul>
			        </li>
			      </ul>
		      	<a href="#" class="navbar-right navbar-link navbar-text">登录</a>
		      	<span class="navbar-right navbar-right navbar-text">|</span>
		      	<a href="#" class="navbar-right navbar-link navbar-text">注册</a>
			      <form action="#" class="navbar-right navbar-form">
			        <div class="form-group has-feedback">
			          <label for="kw" class="sr-only">搜索</label>
			          <input type="text" class="form-control" id="kw">
			          <span class="glyphicon glyphicon-search form-control-feedback"></span>
			        </div>
			     	</form>
			   	</div>
	  		</div>
	  	</div>
  JS插件
  	模态对话框
  		<a href="#login" data-toggle="modal">登录</a>
			<button type="button" data-target="#login" data-toggle="modal">登录</button>
			<div id="login" class="modal fade">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<span class="close glyphicon glyphicon-remove" data-dismiss="modal"></span>
							<h3 class="modal-title">登录</h3>
						</div>
						<div class="modal-body"></div>
						<div class="modal-footer"></div>
					</div>
				</div>
			</div>
  	图片轮播
  		<div id="banner" class="carousel" data-ride="carousel" data-interval="ms" data-pause="null">
				<div class="carousel-inner">
					<div class="item active">
						<img src="url">
					</div>
					<div class="item">
						<img src="url">
					</div>
				</div>
				<ul class="carousel-indicators">
					<li data-slide-to="0" data-target="#banner" class="active"></li>
					<li data-slide-to="1" data-target="#banner"></li>
				</ul>
			</div>

  定制
  	安装Node.js和lessc编译程序
  	注释掉bootstrap.less中不要的@import
  	修改variables.less中的变量
  	修改dropdowns.less文件
  	cmd 回车->d: 回车->cd npm 回车->lessc 被编译文件绝对路径 编译后保存的绝对路径 回车
  Less
  	语法
  		引入外部less文件
  			@import "×××.less";  
  		//单行注释
  		/*
			多行注释
			*/	
			@变量名:值;   定义变量
			属性名:@变量名;  调用变量
			支持算术运算
				+,-,*,/,%   
			选择器混入
				选择器1{...}    
				选择器2{选择器1}  
			支持参数
				选择器1(@参数名,@参数名:默认值){...}
				选择器2{...选择器1(...)}
			函数
				ceil() 向上取整
				floor() 向下取整
				percentage(num) 浮点数转换为百分比
				darken(color,percentage) 颜色亮度降低
				lighten(color,percentage) 颜色亮度增加
				img-width(url)  获取图片宽度
				img-height(url) 获取图片高度