创建对象:
	var $对象名=$("选择器");
	var $对象名=$(this/e.target);

基本/位置过滤(符合条件的元素组成一个集合,下标从0开始)
	:first 第一个
	:last 最后一个
	:eq(n) 第n个
	:even 偶数位
	:lt(n) 第n个之前
	:gt(n) 第n个之后
		
内容过滤
	:contains(text) 按内容的文本过滤
	:has("选择器") 按子元素特征
	:parent() 判断是否父元素
	:empty() 判断是否空元素
	
可见性过滤
	:hidden 找display:none/type=hidden

状态过滤
	:disabled
	:checked
	:selected

表单元素过滤
	:input 选择input/textarea/select/button
	不同的type有对应的选择器
		:text		
		:password			          
		:radio
		:checkbox			
		:reset  
		:butto
		:submitn

获取/修改内容
	.html() 原始HTML代码片段
	.text() 纯文本
	.val()  表单值
	.empty() 清空
	
页面添加html代码
	$("选择器").append("html代码") 末尾追加
	$("html代码").appendTo("选择器") 末尾追加
	$("选择器").prepend("html代码") 开头插入
	$("html代码").prependTo("选择器") 开头插入
	$("选择器").before("html代码") 前面插入
	$("选择器").after("html代码") 后面插入

删除页面元素
	$("选择器").remove();

替换页面元素
	$("选择器").replaceWith("新html代码")
	$("新html代码").replaceAll("选择器")

获取/修改属性
	.attr("属性名","值") html标准属性
	.prop("状态",bool) 状态属性
	.data("属性名","值") 自定义扩展属性

修改内联样式
	.css("css属性名","属性值")
	.css({css属性名:值,...})

更换样式
	.addClass("class类名") 追加
	.removeClass("class类名") 移除
	.hasClass("class类名") 判断是否包含
	.toggleClass("class类名") 判断,若无追加,若有移除

已知一个对象找附近对象(选择器可省略)
	.parent() 父节点
	.children("选择器") 查找直接子元素
	.children().first() 查找第一个直接子元素
	.children().last() 查找最后一个直接子元素
	.find("选择器") 查找后代中符合要求的元素
	.next() 下一个兄弟元素
	.nextAll("选择器") 之后的兄弟元素
	.prev() 上一个兄弟元素
	.prevAll("选择器") 之前的兄弟元素
	.siblings("选择器") 除自己之外所有兄弟

判断任意元素的特征
	.is("选择器")

查找元素位置
	$("所有元素的集合").index("要查找的元素") 
	$("要查找的元素").index(); 同一个父元素

克隆jQuery对象
	$("选择器").clone()
	$("选择器").clone(true)

事件绑定
	.bind("事件名",函数) 绑定函数
	.on("事件名",函数) 绑定函数
	.unbind("事件名",函数) 移除事件某一个处理函数
	.unbind("事件名") 移除事件上所有处理函数
	.unbind() 移除所有事件上的处理函
	.off() 移除函数
	.one("事件名",函数) 绑定,处理函数触发一次后,自动解绑
	.live/die("事件名",函数) 将一切处理函数都绑定在根节点document上
	.delegate("选择器","事件名",函数) 给子元素绑定事件(this=e.target)
	.on("事件名","选择器",函数) 给后代元素绑定事件
	在DOM和JS加载完触发
		$(document).ready(()=>{...})
    $().ready(()=>{...})
    $(()=>{...})
	在全部网页内容加载完后触发
		$(window).load(()=>{...})

鼠标事件
	.mouseover(函数) 移入
	.mouseout(函数) 移出
	.mouseenter(函数) 移入
	.mouseleave(函数) 移出
	.hover(函数,函数) 移入移出
	.hover(函数) 移入移出触发同一个函数

模拟触发
	$("选择器").trigger("事件名")
	$("选择器").事件名()

动画
	.show() 显示
	.hide() 隐藏
	.toggle 显示/隐藏
	.slideUp() 上滑
	.slideDown() 下滑
	.slideToggle() 上滑下滑
  .fadeIn() 淡入     
	.fadeOut() 淡出    
	.fadeToggle() 淡入淡出
	.animate({css属性:目标值,...},过渡时间,函数) 并发变化
		:animated 判断动画是否正在播放
		.stop()  停止当前的动画,开始下一个动画
		.stop(true) 清空动画

类数组对象操作
	.get(i) 返回DOM元素
	.size() 返回长度
	.each(function(i,elem){其中this指当前DOM元素}) 遍历

jQuery UI
	accordion 手风琴
	autocomplete 自动完成
	dialog 对话框部件
	datepicker 日期选择器
	tabs
	toolTip

文件上传
	$.ajax({
		type:"post/get",
		url:"×××.php",
		data:new FormData($("#form").get(0)),
		processData:false,
		contentType:false
	})

ajax封装
	$("选择器").load("url",data,callback)
	$.getJSON("url","data")
	$.getScript("url","data")
	$.get("url","data").then()
	$.post("url","data").then()
	$.ajax({
		type:"...",
		url:"...",
		data:"...",
		dataType:"...",
		success:fn,
		error:fn,
		complete:fn,
		beforeSend:fn
	}).then()


富文本编辑器
	wysiwyg:richText

跨域请求:不同端口,不同协议,不同域名...	
	可跨域
		img的src link的href script的src iframe的src
	不可跨域
	  ajax的xhr
			document.domain window.name window.postMessage jsonp
		$.getJSON("×××.php?callback=?",函数对象)
		$.ajax({
			type:"get",
			url:"×××.php",
			success:fn,
			dataType:"jsonp"
		})

	put/delete请求
		$.ajax({
			type:'POST',
			url:'',
			data:{_method:'put'},
			success:function(){}
		})