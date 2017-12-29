window全局作用于对象(代替ES的global,代表游览器窗口)
	window.innerWidth/innerHeight 文档显示区宽/高
	window.open("url","target") 打开窗口
		当前窗口打开,可后退
			<a href="url" target="_self"></a>
			open("url","_self");
		当前窗口打开,禁止后退
			location.replace("新url");
		新窗口打开,可打开多个
			<a href="url" target="_blank"></a>
			open("url","_blank");
		新窗口打开,只能打开一个
			<a href="url" target="自定义"></a>
			open("url","自定义");
	window.close(); 关闭窗口 

history历史记录栈
	history.go(0); 刷新
	history.go(-1); 后退
	history.go(1); 前进

location地址栏
	.href => 完整url
	.protocol => 协议
	.host => 主机+端口号
	.hostname => 主机
	.port => 端口号
	.pathname => 相对路径
	.search => ?及其后面的字符串
	.hash => #及其后面的锚点地址

	当前窗口打开链接
		可后退
			location.assign("url");
			location.href="url";
			location="url";
		不可后退
			location.replace("新url");

	刷新
		location.reload();
		location.reload(true);

循环定时器
	var timer=setInterval(函数,ms); 启动
	clearInterval(timer); 停止
	timer=null; 清空
炸弹定时器
	var timer=setTimeout(函数,wait_ms); 启动
	clearTimeout(timer); 停止
定时器回调函数,在主程序执行完后执行.

navigator对象
	.cookieEnabled 判断游览器是否启用cookie
	.plugins 获取游览器插件信息的集合
		navigator.plugins["插件名"]!==undefined; 判读是否有某插件
	.userAgent 保存游览器名称和版本号的字符串

event对象:事件的状态
	e.stopPropagation(); 阻止蔓延/取消冒泡
	e.target 获得实际触发事件的元素
	e.preventDefault(); 阻止默认行为
	e.screenX/Y 获取相对于屏幕左上角的鼠标位置
	e.clientX/Y 获取相对于文档显示区左上角的鼠标位置
	e.offsetX/Y 获得相对于当前元素左上角的鼠标位置
	window.onscroll 页面滚动事件
	scrollTop=document.body.scrollTop||document.documentElement.scrollTop; 页面顶部超出文档显示区顶部的距离
	window.scrollTo(x,y) 到达指定位置
	window.scrollBy(x,y) 移动指定距离

document对象:HTML文档的所有节点

screen对象:显示屏幕信息
	screen.width 屏幕宽度
	screen.height 屏幕高度
	screen.availWidth
	screen.availHeight 去任务栏后的高度

事件监听
	elem.addEventListener("事件名",function(){}); 添加
	elem.removeEventListener("事件名",function(){}); 删除