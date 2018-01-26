ReactJS 官网: https://reactjs.org/
	搭建开发环境:
		cli:
			npm install -g create-react-app
			create-react-app my-app
			cd my-app
			npm start
		引入文件:
			react.js
			react-dom.js
			browser.min.js

	component
		<div id='example'></div>
		<script type="text/babel">
			var TestComponent=React.createClass({ //创建组件
				componentWillMount(){}, //准备挂载DOM树
				componentDidMount(){}, //挂载DOM树完毕
				componentWillUpdate(nextProps,nextState){}, //props/state准备更新
				componentDidUpdate(prevProps,prevState){}, //props/state更新完成
				componentWillUnmount(){}, //组件销毁
				compoenntWillReceiveProps(){}, //组件传递的属性的值更新
				render:function(){return <ANY></ANY>}
			});
			class TestComponent extends React.Component{ //创建组件
				render(){return (HTML代码)}
			} 
			ReactDOM.render(
				<TestComponent></TestComponent>,
				document.getElementById('example')
			);
		</script>

	props
		<div id="example"></div>
		<script type="text/babel">
			var Test1Component=React.createClass({
				handleClick:function(){this.props.attr2(参数)},
				render:function(){
					return <button onClick={this.handleClick}>{this.props.attr1}</button>
				}
			});
			var TestComponent=React.createClass({
				函数名:function(msg){},
				render:function(){return <div>
					<Test1Component attr1="数据" attr2={this.函数名}></Test1Component>
					<ANY>{React.Children.map(this.props.children,function(child){return child})}</ANY> //接收插入元素
				<div>}
			});
			ReactDOM.render(
				<TestComponent>
					<ANY></ANY> //插入元素
				</TestComponent>,
				document.getElementById('example')
			);
		</script>

	ref
		<div id="example"></div>
		<script type="text/babel">
			var Component=React.createClass({
				handleClick:function(){
					this.refs.attr1 => 元素的DOM对象
					this.refs.attr2 => 组件的实例对象
				},
				render:function(){return <ANY>
					<ANY ref="attr1"></ANY>
					<TestComponent ref="attr2"/>
					<button onClick={this.handleClick}></button>
				</ANY>}
			});
			var TestComponent=React.createClass({
				render:function(){return <ANY></ANY>}
			});
			ReactDOM.render(
				<Component></Component>,
				document.getElementById('example')
			);
		</script>

	state
		<div id="example"></div>
		<script type="text/babel">
			var TestComponent=React.createClass({
				getInitialState:function(){return {属性名:值}},
				handleClick:function(){this.setState({属性名:新值})},
				handleChange:function(e){this.setState({属性名:e.target.value})},
				render:function(){return <div>		
					<button onClick={this.handleClick}>{this.state.属性名}</button>
					<input type="text" value={this.state.属性名} onChange={this.handleChange}/>
					<ANY style={{css属性:this.state.属性名}}></AMY>
				</div>}
			});
			ReactDOM.render(
				<TestComponent></TestComponent>,
				document.getElementById('example')
			);
		</script>

	扩展:
		在react中的HTML代码用className绑定类选择器的样式。
		在react中的HTML代码的表单元素的值和状态用defaultValue/defaultChecked来控制

ReactNative
	安装开发环境
		①	npm install -g create-react-native-app
			create-react-native-app AwesomeProject
			cd AwesomeProject
			npm start
		②	npm install react-native-cli

	在index.js中调用testComponent.js组件
		import React,{Component}from 'react';
		import {AppRegistry,StyleSheet,Text,View} from 'react-native';
		import Test from './testComponent';
		export default class myapp extends Component{
			render(){return <View>
				<Test attr="数据"/>
			</View>}
		}
		AppRegistry.registerComponent('myapp',()=>myapp);

	StyleSheet 元素样式
		import React,{Component} from 'react';
    import {Text,View,StyleSheet} from 'react-native';
    export default class Test extends Component{
      render(){return <View>
        <Text style={{color:'red',fontSize:18}}></Text>
        <Text style={[styles.Style1,styles.Style2]}></Text>
      </View>}
    }
    const styles=StyleSheet.create({
      Style1:{color:'green',fontSize:12},
      Style2:{
      	flexDirection:'row'/'column' 指定主轴方向
    		justifyContent:'center'  指定主轴的对齐方式
    		alignItems:'center'  交叉轴的对齐方式
      }
    }); 

	props 组件间传参
    import React,{Component} from 'react';
    import {Text} from 'react-native';
    export default class Test extends Component{
      render(){
        return <Text>{this.props.attr}</Text>
      }
    }

  state 状态属性
    import React,{Component} from 'react'
    import {Text} from 'react-native'
    export default class Test extends Component{
      constructor(){
        super();
        this.state={属性名:值}
      }
      函数名=()=>{
        this.setState({属性名:新值});
      }
      render(){return <Text>{this.state.属性名}</Text>}
    }

  Button 按钮
    import React,{Component} from 'react'
    import {Button} from 'react-native'
    export default class Test extends Component{
      handlePress=()=>{...}
      render(){
        return <Button title="按钮名" onPress={this.handlePress}></Button>
        	或   <Button onPress={()=>this.handlePress('参数')}/>
      }
    }

  FlatList 列表
    import React,{Component} from 'react'
    import {Text,FlatList} from 'react-native'
    export default class Test extends Component{
      constructor(){
        super();
        this.state={数组名:[...]}
      }
      函数名=(info)=>{return <Text>{info.item}</Text>}
      render(){return <FlatList ListFooterComponent={<ANY/>} onEndReached={this.方法名} onEndReachedThreshold='0~1' renderItem={this.函数名} data={this.state.数组名} extraData={this.state}></FlatList>}
    }

  Image 图片
    import React,{Component} from 'react'
    import {Image} from 'react-native'
    export default class Test extends Component{
      render(){
        return <Image source={require('imgUrl')}/>  本地图片
               <Image source={{uri:'imgUrl'}}>  网络图片
      } 
    }

  TextInput 文本框
    import React,{Component} from 'react'
    import {TextInput} from 'react-native'
    export default class Test extends Component{
      handleChangeText=(msg)=>{} // msg => 文本框内容
      render(){return <TextInput secureTextEntry={true} onChangeText={this.handleChangeText} placeholder="请输入密码" keyboardType="numeric"></TextInput>}
    }
    注: secureTextEntry是否不可见,onChangeText文本框内容改变触发方法,placeholder占位符,keyboardType虚拟键盘类型

	TouchableOpacity 封住组件,在触摸或点按时,有透明度变化效果
    import React,{Component} from 'react'
    import {TouchableOpacity} from 'react-native'
    export default class Test extends Component{
      handlePress=()=>{...}
      render(){return <TouchableOpacity onPress={this.handlePress}>
        ···
      </TouchableOpacity>}
    } 

  请求服务器
    fetch('url').then((response)=>{return response.json()}).then((response)=>{...});

  ActivityIndicator 加载中
    import Recator size="large"/>}
    }act,{Component} from 'react'
    import {ActivityIndicator} from 'react-native'
    export default class Test extends Component{
      render(){return <ActivityIndicator/>
    }

  ScrollView 滚动条
  	import React,{Component} from 'react'
  	import {ScrollView} from 'react-native'
  	export default class Test extends Component{
  		render(){return <ScrollView>
  			···
  		</ScrollView>}
  	}

  Switch 开关
    import React,{Component} from 'react'
    import {Switch} from 'react-native'
    export default class Test extends Component{
      constructor(){
        super();
        this.state={属性名:false}
      }
      handleValueChange=(msg)=>{
        this.setState({属性名:msg})
      }
      render(){
        return <Switch value={this.state.属性名} onValueChange={this.handleValueChange}/>
      }
    }

	React Navigation 实现组件间跳转和传参
	  安装
	    npm install --save react-navigation
	  在index.js中
	    import {StackNavigator} from 'react-navigation';
	    import Test from './app/navigation/test';
	    const RootNavigator=StackNavigator({
	      路由名:{
	        screen:Test,
	        navigationOptions:()=>({
	          headerTitle:'标题',
	          headerLeft:null,
	          headerTitleStyle:{alignSelf:'center'}
	        })
	      }
	    });
	    AppRegistry.registerComponent('myapp',()=>RootNavigator);
	  在component.js中跳转和传参
	    发送
	      this.props.navigation.navigate('路由名',{参数名:"数据"})
	    接收
	      this.props.navigation.state.params.参数名