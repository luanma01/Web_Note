node节点对象的属性
	nodeType 节点类型 返回一个数字
		document	9
		elem      1
		attr      2
		text      3
	nodeName 节点名 返回一个字符串
		document  #document
		elem			全大写标签名
		attr			属性名
		text			#text
	nodeValue 节点值 
		document  null
		elem			null
		attr			属性值
		text			文本内容
			
不用查找,可直接获得的元素
	<html> document.documentElement
	<head> document.head
	<body> document.body
	<form> document.forms[下标/"id值"]

已知一个DOM对象,找附近对象
	elem.parentNode 父节点
	elem.childNodes 直接子节点,返回集合
	elem.firstChild 第一个直接子节点
	elem.lastChild 最后一个直接子节点
	elem.previousSibling 前一个兄弟节点
	elem.nextSibling 后一个兄弟节点
	elem.parentElement 父元素
	elem.children 直接子元素,返回集合
	elem.firstElementChild 第一个直接子元素
	elem.lastElementChild 最后一个直接子元素
	elem.previousElementSibling 前一个兄弟元素
	elem.nextElementSibling 后一个兄弟元素

循环遍历查找后代元素
	创建节点迭代器对象 (内置深度优先遍历算法)
		var iterator = document.createNodeIterator(divnode, NodeFilter.SHOW_ELEMENT, null, false);
	跳到下一个节点,并返回下一个节点对象
		NodeIterator.nextNode()

按HTML查找DOM对象
	var elem=document.getElementById("id值");
		若有,返回对象;若无,返回null.
	var elems=parent.getElementsByTagName("标签名");
		若有,返回集合;若无,返回空集合.
	var elems=document.getElementsByName("name值");
		若有,返回集合;若无,返回空集合.
	var elems=parent.getElementsByClassName("class值");
		若有,返回集合;若无,返回空集合.

按选择器查找
	var elem=parent.querySelector("选择器");
		返回一个对象
	var elems=parent.querySelectorAll("选择器");
		返回一个集合

页面内容
	.innerHTML 获取/修改元素的HTML代码
	.textContent 获取/修改元素纯文本内容
	.value 获取/修改表单控件值

操作html标准属性
	elem.getAttribute("属性名") 获取属性的值
	elem.setAttribute("属性名","值") 添加/修改属性值
	elem.hasAttribute("属性名") 判断是否包含
	elem.removeAttribute("属性名") 移除属性
	elem.属性名 获取属性的值
	elem.属性名="值" 添加/修改属性值
	elem.属性名!=="" 判断是否包含
	elem.属性名="" 移除属性

操作状态属性
	elem.disabled=false/true
	elem.checked=false/true
	elem.selected=false/true

自定义扩展属性
	定义 <ANY data-属性名="值">
	访问 ANY.dataset.属性名

样式 (属性名-驼峰)
	elem.style.css属性名="值" 修改内联样式
	elem.style.cssText="属性:值;...";
	getComputedStyle(elem).css属性名 获取内联样式,只读
	
	var sheet=document.styleSheets[i] 获取样式表对象
	var rule=sheet.cssRules[i] 获取样式表的样式规则
	rule.style.css属性名="值"

	elem.className="class类名"; 更换样式规则
	elem.className=""; 删除样式规则

添加HTML元素
	var elem=document.createElement("标签名");
	parent.appendChild(elem); 末尾追加
	parent.insertBefore(elem,child) 在child前插入elem
	parent.replaceChild(elem,child) 用elem替换child
	文档片段
		var frag=document.createDocumentFragment();

删除HTML元素
	parent.removeChild(child);
	child.parentNode.removeChild(child);

创建<img>元素
	var img=new Image();

Select对象
	.selectedIndex 获取选中项的下标
	.value 获取选中项的value值/HTML内容
	.options 获取<option>的集合
	.options.length 获取<option>个数
	.options.length=0; 清空<option>
	.length <=> .options.length
	.add(option) 末尾追加<option>
	.remove(i) 移除i位置的<option>
	var opt=new Option(text,value); 创建<option>元素

Table对象
	创建行分组
		var thead=table.createTHead();
		var tbody=table.createTBody();
		var tfoot=table.createTFoot();
	删除行分组
		table.deleteTHead();
		table.deleteTFoot();
	获取行分组
		table.tHead
		table.tBodies[i]
		table.tFoot

	var tr=行分组.insertRow(i) 添加<tr>
	var tr=行分组.insertRow() 末尾追加
	var tr=行分组.insertRow(0) 开头插入
	
	删除<tr>
		行分组.deleteRow(i);
		table.deleteRow(tr.rowIndex);
		tr.parentNode.removeChild(tr);

	行分组.rows[i] 获取<tr>

	var td=tr.insertCell(i); 添加<td>
	tr.deleteCell(i) 删除<td>
	var td=tr.cells[i] 获取<td>

Form对象
	var form=document.forms[下标/"id值"];
	.elements 获取input/select/textarea/button元素
	.elements.length 获取表单元素个数
	.length <=> .elements.length
	form.submit() 手动提交表单

	获取表单元素
		var elem=form.elements[下标/"id值"/"name值"]
		var elem=form.name

	elem.focus() 获取焦点
	elem.blur() 失去焦点
