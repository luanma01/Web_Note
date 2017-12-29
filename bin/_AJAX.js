/*创建AJAX异步对象xhr*/
function createXhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else{
		return new ActiveXObject("Microsoft.XMLHttp");
	}
}

/*get方式发送请求*/
function submit(){
	var xhr=createXhr();
	var url="url?×××="+×××+"&×××="+×××;
	xhr.open("get",url,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var resText=xhr.responseText;
		}
	}
	xhr.send(null);
}

/*post方式发送请求*/ 
function submit(){
	var xhr=createXhr();
	xhr.open("post",url,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var resText=xhr.responseText;
		}
	}
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var msg="×××="+×××+"&×××="+×××;
	xhr.send(msg);
}

/*JSON对象*/
var 变量='{"属性名":"字符串","属性名":数值}';
/*JSON数组*/
var 变量='["字符串",数值]';
/*JSON对象数组*/
var 变量='[{"属性名":"字符串","属性名":值},{"属性名":"字符串","属性名":数值}]';
/*将JSON字符串转换为JS对象/数组*/
var 变量=eval("("+变量名+")"); 
var 变量=JSON.parse(变量名);
var 变量=JSON.stringify(变量名);

/*XML文件编写*/
<?xml version="1.0" encoding="utf-8"?>
标签规范
	①标记自定义,必须是成对的双标记
	②标记严格区分大小写
	③标签的属性的值必须加引号
	④每个XML文件只有一个根元素
	⑤标记可以嵌套
/*接收XML字符串*/
	var xml=xhr.responseXML;
/*XML解析*/
	var 变量=xml.getElementsByTagName("标记"); //返回一个包含指定元素的类数组

扩展:
	同步(Synchronous):在一个任务进行当中时,不能开启其它的任务.
		同步访问:浏览器在向服务器发送请求的时候,浏览器只能等待服务器的响应,不能做其它的事情。
		出现场合：
			地址栏输入网址访问页面
			a标记的默认跳转
			submit按钮的表单提交

	异步(Asynchronous):在一个任务进行当中时,可以开启其它的任务.
		异步访问:浏览器在向服务器发送请求的时候,不耽误用户在网页上做其它操作.

	AJAX(Asynchronous Javascript And Xml):使用JS提供的异步对象(XMLHttpRequest),异步的向服务器发送请求,并接收响应数据.

拖拽上传文件
	html:
		<div id="upload">上传区</div>
   	<div id="preview">预览区</div>
  JS:
  	$(document).on({ //阻止目标对象的默认行为
     	dragleave:function(e){e.preventDefault()},
     	drop:function(e){e.preventDefault()},
     	dragenter:function(e){e.preventDefault()},
     	dragover:function(e){e.preventDefault()},
   	});
  	upload.ondrop=function(e){ //绑定释放目标对象事件
  		e.preventDefault();
  		var flist=e.dataTransfer.files; //获取文件对象
  		if(flist.length==0){ //无上传对象,停止程序
  			return;
  		}
  		if(flist[0].type.indexOf("image")===-1){ //判断文件类型
  			alert("文件不是图片");
  			return;
  		}
  		var img=window.webkitURL.createObjectURL(flist[0]); //读取上传文件内容
 			var pname=flist[0].name; //获取文件名
 			var psize=Math.ceil(flist[0].size/1024); //获取文件大小
 			if(psize>1024){
 				alert("上传文件过大");
 				return;
 			}
 			var html=`
				<img src="${img}">
				<p>文件名称:${pname}</p>
				<p>文件大小:${psize}</p>
 			`;
 			$("#preview").html(html);
 			var xhr=new XMLHttpRequest();
 			xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&xhr.status===200){
          var obj=JSON.parse(xhr.responseText);
        }
      }
      xhr.open("post","url",true);
      xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
      var fd=new FormData();
      fd.append("mypic",flist[0]);
      xhr.send(fd);
  	}
  PHP:
  	header("Content-Type:application/json;charset=utf-8");
		$conn=mysqli_connect('127.0.0.1','root','','...',3306);
		mysqli_query($conn,"SET NAMES UTF8");
  	if(empty($_FILES)){ //检查文件是否存在
			die('{"code":-1,"msg":"检查不到上传文件!"}');
		}
		$picname=$_FILES["mypic"]["name"]; //获取文件名
		$picsize=ceil($_FILES["mypic"]["size"]/1024); //获得文件大小
		if($picsize>1024){
			die('{"code":-2,"msg":"上传文件过大,上传失败!"}');
		}
		$type=strstr($picname,"."); //获得文件后缀名
		if($type!=".gif"&&$type!=".jpg"&&$type!=".png"){ //判断格式
			die('{"code":-3,"msg":"上传文件格式不正确,上传失败!"}');
		}
		$filename=time().rand(1,9999).$type; //创建新的文件名
		$src=$_FILES["mypic"]["tmp_name"]; //获得临时文件路径
		$des="url/".$filename; //文件存储路径
		move_uploaded_file($src,$des); //上传文件