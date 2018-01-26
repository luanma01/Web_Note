Vue.js
		
	引入vue.js文件,
	引入vue-router.js文件,
	引入vue-resource.js文件。

	常用指令 (表达式是由变量和运算符构成)
		<ANY>{{表达式}}</ANY>
		<ANY v-if="表达式"></ANY>
		<ANY v-else-if="表达式"></ANY>
		<ANY v-else></ANY>	                 
		<ANY v-for="元素 in 集合"></ANY>
		<ANY v-for="(元素,下标) in 数组"></ANY>
		<ANY v-for="(值,属性) in 对象"></ANY>
		<ANY v-for="(值,属性,下标) in 对象"></ANY>
		<ANY v-on:事件名="函数名"></ANY> 
		<ANY @事件名="函数名"></ANY>
		<ANY @事件名.prevent="函数名"></ANY> 阻止事件默认行为
		<ANY v-bind:属性="表达式"></ANY>
		<ANY :属性="表达式"></ANY>
		<ANY v-bind:class="{类名:表达式}"></ANY>
		<ANY v-bind:style="{css属性:表达式}"></ANY>
		<ANY v-show="表达式"></ANY>
		<ANY v-html="表达式"></ANY>
		<ANY v-model="表达式"></ANY>
		<ANY v-model.lazy="表达式"></ANY> 通过change事件同步数据
		<ANY v-model.number="表达式"></ANY> 将字符串转化为数字
		<ANY v-model.trim="表达式"></ANY> 过滤首尾空格

	自定义指令
		new Vue({
			directives:{
				指令名:{
					bind:function(el,bindings){ 调用指令执行
						el => 调用指令的元素
						bindings.value => 指令接收的参数
					}, 
					update:function(){}, 指令传递的参数变化时执行
					unbind:function(){} 解除指令执行
				}
			}
		});
		Vue.directive("指令名",{
			bind:function(elem,bindings){},
			update:function(){},
			unbind:function(){}
		});
		<any v-指令名="参数"></any>

	过滤器
		new Vue({
			filters:{
				过滤器名:function(value,arg1,arg2){
					value => 接收的数据
					arg => 接收的参数
					return => 输出结果
				}
			}
		});
		Vue.filter("过滤器名",function(value,arg1,arg2){});
		<ANY>{{表达式|过滤器名}}</ANY>
		<ANY>{{表达式|过滤器名(arg1,arg2)}}</ANY>
		<ANY>{{表达式|过滤器名1|过滤器名2}}</ANY>

	全局组件
		Vue.component("组件名",{
			data:function(){return {属性名:值}}, 
			template:`HTML代码`,
			watch:{属性名:function(){}}, 监听属性:组件的属性改变时执行
			beforeCreate:function(){}, 初始化数据
			created:function(){},
			beforeMount:function(){}, 挂载到DOM数
			mounted:function(){},
			beforeUpdate:function(){}, 更新数据
			updated:function(){},
			beforeDestroy:function(){}, 清理工作
			destroyed:function(){}
		});
		<script type="text/x-template" id="">HTML代码片段</script>
		Vue.component("组件名",{template:"#id值"});
		<组件名></组件名> 或 <组件名/>
	
	计算属性:依赖缓存,若数据未发生变化,调用属性也不会执行方法	
		new Vue({
			computed:{属性名:function(){
				return 
			}}
		});
		<any>{{属性名}}</any>

	Vue对象
		var app=Vue({
			el:"#id值",
			data:{属性名:值},
			methods:{
				函数名:function(){}
			},
			components:{
				"组件名":{template:`HTML代码`}
			},
			directives:{
				指令名:function(){}
			},
			filters:{
				过滤器名:function(){}
			},
			computed:{
				属性名:function(){}
			}
		});
		
	父组件 => 子组件
		Vue.component("father",{
			data:function(){return attr1:"参数"},
			template:`
				<son :attr2="attr1"></son> 或 <son attr2="参数"></son>
			`
		});
		Vue.component("son",{
			props:["attr2"],
			template:`<ANY>{{this.attr2}}</ANY>`
		});
	父组件 => 子组件
		Vue.component("father",{
			data:function(){return {attr:"参数"}},
		});
		Vue.component("son",{
			mounted:function(){
				this.$parent.attr //接收到的数据
			}
		});
	子组件 => 父组件
		Vue.component("father",{
			methods:{
				fn1:function(msg){} msg是接收的数据
			},
			template:'<son @event1="fn1"></son>'
		});
		Vue.component("son",{
			data:function(){return {attr:参数}},
			template:'<ANY @事件名="fn2"></ANY>',
			methods:{
				fn2:function(){
					this.$emit("event1",this.attr);
				}
			}
		});
	子组件 => 父组件
		Vue.component("father",{
			methods:{
				fn:function(){
					this.$refs.引用名.attr //获得的数据
				}
			},
			template:`
				<div>
					<ANY @事件名="fn"></ANY>
					<son ref="引用名"></son>
				</div>
			`
		});
		Vue.component("son",{
			data:function(){return {attr:参数}}
		});
	兄弟组件通信
		var bus=new Vue();
		Vue.component("组件名1",{
			methods:{
				函数名:function(){
					bus.$emit("event1","参数");
				}
			},
			template:`<ANY @事件名="函数名"></ANY>`
		});
		Vue.component("组件名2",{
			created:function(){
				bus.$on("event1",function(msg){}); msg是获取到的数据
			}
		});

	路由模块间的跳转和传值
		<div id="">
			<router-view></router-view>
		</div>
		var 变量名1=Vue.component('组件名1',{
			methods:{
				函数名:function(){
					this.$router.push("/路由名2/"+参数);
					注: this.$router.go(-1); 页面后退
				}
			},
			template:`
				<div>
					<ANY @事件名="函数名"></ANY>  或
					<router-link :to="'/路由名2/'+参数"></router-link>
				</div>
			`
		});
		var 变量名2=Vue.component('组件名2',{
			data:function(){return {属性名:''}},
			created:function(){
				this.属性名=this.$route.params.参数名;
			},
			template:`
				<div>
					<router-link to="/路由名3"></router-link>
					<a href="#/路由名4"></a>
					<router-view></router-view>
				</div>
			`
		});
		var 变量名3=Vue.component("组件名3",{
			template:'<div>子路由1<div>'
		});
		var 变量名4=Vue.component("组件名4",{
			template:'<div>子路由2<div>'
		});
		var 变量名5=Vue.component("组件名5",{
			template:'<p>404</p>'
		});	
		new Vue({
			el:'#id值',
			router:new VueRouter({
				routes:[
					{path:'',component:变量名1},
					{path:'/路由名1',component:变量名1},
					{
						path:'/路由名2/:参数名',
						component:变量名2,
						children:[
							{path:'',component:变量名3},
							{path:'/路由名3',component:变量名3},
							{path:'/路由名4',component:变量名4},
						]
					},
					{path:"*",component:变量名5}
				]
			})
		});

	查询服务器数据
		Vue.component("组件名",{
			methods:{
				函数名:function(){
					this.$http.get("绝对url").then(function(response){
					  response.data 返回的数据
					});
				}
			}
		});

	单文件组件
		搭建开发环境
			全局安装
				npm install --global vue-cli
		  创建一个基于webpack模板的新项目
				vue init webpack my-project
		  安装依赖
				cd my-project
				npm install
			启动
				npm run dev
			游览器自动打开
			  http://localhost:8080/#/
    开发准备
    	将css,js,fonts,img放入my-project/src/assets中。
    	在my-project/src/components中创建vue文件
    		<template>
    			HTML代码
    		</template>
    		<script>
    			import 路由名 from '@/components/×××' 嵌套组件
					export default{
						components:{组件名:路由名}, 设为局部组件
						vue.js代码
					}
    		</script>
    		<style scoped>
    			仅本组件有效的css样式
    		</style>
    	在my-project/src/router/index.js中
    		import 路由名 from '@/components/×××' 引入组件
    		export default new Router({
				  routes:[
				    {path:'url',component:路由名}, 设为全局组件
				  ]
				})
    	在my-project/src/main.js中
    		import VueResource from 'vue-resource'
				Vue.use(VueResource);
    		import '×××.css'
    		import '×××.js'

  动态加载图片
  	<img :src="require(url)"/> 图片在assets目录
  	<img :src="'url/'+'图片名'"/> 图片在static目录

  打包项目
  	执行 npm run build
  	将dist目录中的文件放入服务器