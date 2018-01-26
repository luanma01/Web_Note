Angular: www.angular.cn/io
	
	搭建开发环境:
		①	全局安装ng的命令行工具
				npm install -g @angular/cli
			创建基于ng模板的项目
				ng new my-project
			进入项目
				cd my-project
			启动开发服务器
				ng serve
		②	在https://github.com/angular/quickstart下载包
			安装依赖 npm install
			启动开发服务器 npm start 或 npm run serve

	基本语法:
		<ANY>{{表达式}}</ANY>
	  <ng-container></ng-container> //用于复合调用指令
		循环指令
			<ANY *ngFor="let 变量1 of 数组;let 变量2=index">{{变量1}}</ANY>
		选择指令
	  	<ANY *ngIf="表达式"><ANY>
	  多重分支判断
		  <ANY [ngSwitch]="属性名">
		    <ANY *ngSwitchCase="值"></ANY>
		    <ANY *ngSwitchDefault></ANY>
		  </ANY>
		属性绑定
	  	<ANY [html属性]="属性名"></ANY>
		绑定事件处理函数
	  	<ANY (事件名)="函数名()"></ANY>
	  双向数据绑定
	  	<ANY [(ngModel)]="属性名"></ANY>
	  动态样式绑定
		  <ANY [ngClass]="{class类名:表达式}"></ANY>
		  <ANY [ngStyle]="{css属性名:表达式}"></ANY>
		监听属性,调用函数
	  	<ANY [(ngModel)]="属性名" (ngModelChange)="函数名($event)"></ANY>
	
	创建组件
		在src/app下创建test.component.ts文件
			import {Component,OnInit,OnChanges,DoCheck,OnDestroy} from '@angular/core' //引入组件
			@Component({
				selector:'test', //定义标签名
				template:`HTML代码`, 或 templateUrl:'HTML文件url',
				styleUrls:['CSS文件url']
			})
			export class TestComponent implements OnInit,OnChanges,DoCheck,OnDestroy{
    		属性名:Array<any>=[]; //定义属性并定义类型
		    属性名:Object={};
		    属性名:stmber=0;
		    属性名:bring='';
		    属性名:nuoolean=false;
		    ngOnChanges(){} //有参数传递/参数变化时调用
	      ngOnInit(){} //第一次初始化调用
	      ngDoCheck(){} //传递的数组的元素/对象的属性变化时调用
	      ngOnDestroy(){} //组件销毁时调用
	      ngAfterContentInit(){} 
	      ngAfterContentChecked(){}
	      ngAfterViewInit(){}
	      ngAfterViewChecked(){}
		    函数名(msg:any){} //创建函数并接受参数msg
			}
	声明组件
		在app.module.js中
			import {FormsModule} from '@angular/forms';
			import {TestComponent} from './test.component';
			@NgModule({
				imports:[FormsModule],
				declarations:[TestComponent]
			})
	调用组件
		在app.component.ts中
			@Component({template:`<test></test>`})

	自定义指令
		在src/app下创建test.directive.ts文件
			import {Directive,ElementRef,OnInit,Input} from '@angular/core';
			@Directive({selector:'[test]'})
			export class TestDirective implements OnInit{
				@Input() test:any;
			  constructor(private er:ElementRef){}
			  ngOnInit(){
			  	this.er.nativeElement //调用指令的元素对象
			  }
			}
	声明指令
		在app.module.js中
			import {TestDirective} from './test.directive';
			@NgModule({declarations:[TestDirective]})
	调用指令
		<ANY test="参数"></ANY>

	父组件 => 子组件
	  父组件:
	    import {Component} from '@angular/core';
	    @Component({
	      selector: 'father',
	      template: `<son [test]="属性名"></son>`
	    })
	    export class FatherComponent{
	      属性名:类型=值;
	    }
	  子组件:
	    import {Component,Input} from '@angular/core';
	    @Component({
	      selector: 'son',
	      template: `<ANY>{{test 或 msg}}</ANY>`
	    })
	    export class SonComponent{
	      @Input() test:any=""; 或 @Input('test') msg="";
	    }
	子组件 => 父组件
	  父组件:
	    import {Component} from '@angular/core';
	    @Component({
	      selector: 'father',
	      template: `<son (事件名1)="函数名1($event)"></son>`
	    })
	    export class FatherComponent{
	      函数名1(msg:any){} //msg是接收的数据
	    }
	  子组件:
	    import {Component,Output,EventEmitter} from '@angular/core';
	    @Component({
	      selector: 'son',
	      template: `<ANY (事件名)="函数名2()"></ANY>`
	    })
	    export class SonComponent{
	      @Output() 事件名1=new EventEmitter();
	      属性名:类型=值;
	      函数名2(){
	        this.事件名1.emit(this.属性名);
	      }
	    }
	子组件 => 父组件
	  父组件:
	    import {Component} from '@angular/core';
	    @Component({
	      selector:'father',
	      template: `
	        <ANY>{{对象名.属性名}}</ANY>
	        <ANY (事件名)="函数名(对象名)"></ANY>
	        <son #对象名></son>
	      `
	    })
	    export class FatherComponent{
	      函数名(obj:any){} //obj=>接收到的数据
	    }
	  子组件:
	    import {Component} from '@angular/core';
	    @Component({
	      selector: 'son',
	      template: `<ANY><ANY>`
	    })
	    export class SonComponent{
	      属性名:类型=值;
	    }
	子组件 => 父组件
	  父组件:
	    import {Component,ViewChild} from '@angular/core';
	    @Component({
	      selector:'father',
	      template: `<son #对象名></son>`
	    })
	    export class FatherComponent{
	      @ViewChild('对象名') 属性名2:any; //属性名2保存着son组件的对象
	    }
	  子组件:
	    import {Component} from '@angular/core';
	    @Component({
	      selector: 'son',
	      template: `<ANY><ANY>`
	    })
	    export class SonComponent{
	      属性名1:类型=值;
	    }

	内置管道
	  <ANY>{{数据 | uppercase}}</ANY>  字符串 => 大写字母
	  <ANY>{{数据 | lowercase}}</ANY>  字符串 => 小写字母
	  <ANY>{{数据 | data:'yyyy年MM月dd日 hh:mm:ss'}}</ANY>  毫秒数 => 日期类型
	  <ANY>{{数据 | number:'x.y-z'}}</ANY>               数字 => 小数点前x位,小数点后最少y位,小数点后最多z位
	  <ANY>{{数据 | currency:'USD':true:'x.y-z'}}</ANY>  数字 => 添加货币符号
	  <ANY>{{数据 | percent:'x.y-z'}}</ANY> 小数 => 百分数
	  <ANY>{{数据 | slice:start:end}}</ANY> 字符串 => 截取下标start到end的字符串
	自定义管道 
	  在src/app下创建test.pipe.ts
	    import {Pipe,PipeTransform} from '@angular/core';
	    @Pipe({
	      name:'test'
	    })
	    export class TestPipe implements PipeTransform {
	      transform(value: any, ...args: any[]): any {
	        return args[0]+value
	      }
	    }
	  在app.module.ts中声明
	    import {TestPipe} from './test.pipe'
	    @NgModule({declarations:[TestPipe]})
	  在组件中调用
	    <ANY>{{数据 | test:''}}</ANY>

	自定义服务:
	  在src/app下创建test.service.ts文件
	    import {Injectable} from '@angular/core';
	    @Injectable()
	    export class TestService{
	      constructor(){}
	      test(){}
	    }
	  在app.module.ts声明
	    import {TestService} from './test.service';
	    @NgModule({providers:[TestService]}) //全局服务
	  在test.component.ts中调用
	    import {Component,OnInit} from '@angular/core';
	    import {TestService} from './test.service'
	    @Component({
	      selector:'test',
	      template:``,
	      providers:[TestService] //局部服务
	    })
	    export class TestComponent implements OnInit{
	      constructor(private ts:TestService){}
	      ngOnInit(){
	        this.ts.test(); //调用服务的函数
	      }
	    }
	网络请求服务:
		在app.module.ts中
	    import {HttpModule} from '@angular/http';
	    import {HttpService} from './http.service'
	    import {HttpComponent} from './http.component'
	    @NgModule({
	      imports:[HttpModule],
	      declarations:[HttpComponent],
	      providers:[HttpService]
	    })
	  在src/app下创建http.service.ts文件
	    import {Injectable} from '@angular/core';
	    import {Http,Response} from '@angular/http';
	    import {Observable} from 'rxjs/Observable';
	    import 'rxjs/add/operator/map';
	    import 'rxjs/add/operator/catch';
	    @Injectable()
	    export class HttpService {
	      constructor(private http:Http){}
	      方法名(url:string){
	        return this.http.get(url,{withCredentials:true}).map((response:Response)=>response.json());
	      }    
	    }
	  在src/app下创建http.component.ts文件
	    import {Component,OnInit} from '@angular/core';
	    import {HttpService} from './http.service';
	    @Component({
	      selector:'test',
	      template:`<ANY (事件名)="函数名()"></ANY>`
	    })
	    export class HttpComponent implements OnInit{
	      constructor(private http:HttpService){}
	      ngOnInit(){}
	      函数名(){
	        this.http.方法名("url").subscribe(result=>{...},err=>{...});
	      }
	    }
	  在服务器端文件设置响应消息头
	    header('Access-Control-Allow-Origin:http://localhost:3000/');
	    header('Access-Control-Allow-Credentials:true');
	路由模块
	  在src/app下创建test.component.ts文件
	  	import {Component,OnInit} from '@angular/core';
			import {Router} from '@angular/router';
			import {Location} from '@angular/common';
			@Component({
			  selector: 'test',
			  template:`<button (click)='函数名()'></button> //转条到其他路由
			            <a routerLink="/receive"></a> 
			            <button (click)=函数名()></button> //上一页
			            <a [routerLink]="'/receive/'+data"></a> //传参
			  ` 
			})
			export class TestComponent implements OnInit {
				data:any;
			  constructor(private rt:Router,private lt:Location){}
			  ngOnInit(){}
			  函数名(){this.rt.navigateByUrl('/receive')}
			  函数名(){this.lt.back()}
			  函数名(){this.rt.navigateByUrl('/receive/'+this.data)} //传参
			}
		在src/app下创建receive.component.ts文件
			import {Component,OnInit} from '@angular/core';
			import {ActivatedRoute} from '@angular/router';
			@Component({
			  selector: 'receive',
			  template:``
			})
			export class MainComponent implements OnInit{
			  constructor(private ar:ActivatedRoute){}
			  ngOnInit(){
			    this.ar.params.subscribe((result:any)=>{result.参数名}) //接收到的参数
			  }
			}
	  在src/app下创建not-found.component.ts文件
	  在src/app下创建app.router.ts文件
	    import {NgModule} from '@angular/core';
	    import {Routes,RouterModule} from '@angular/router';
	    import {TestComponent} from './test.component'; //引入组件
	    import {DetailComponent} from './receive.component';
	    import {NotFoundComponent} from './not-found.component.ts';
	    const routes:Routes=[
	    	{path:'',component:TestComponent},
	      {path:'test',component:TestComponent},
	      {path:'receive/:参数名',component:ReceiveComponent},
	      {path:'**',component:NotFoundComponent}
	    ];
	    @NgModule({
	      imports:[RouterModule.forRoot(routes)],
	      exports:[RouterModule],
	    })
	    export class AppRoutingModule {}
	  在app.module.ts中
	    import {AppRoutingModule} from './app.router';
	    import {TestComponent} from './test.component';
	    import {ReceiveComponent} from './receive.component';
	    import {NotFoundComponent} from './not-found.component.ts';
	    @NgModule({
	    	imports:[AppRoutingModule],
	    	declarations:[TestComponent,ReceiveComponent,NotFoundComponent]
	    })
	  在app.component.ts中
	    @Component({template:`<router-outlet></router-outlet>`})
	路由嵌套
		父路由father.component.ts:
			import{Component,OnInit} from '@angular/core';
			@Component({
			  selector: 'father',
			  template:`
			    <a routerLink="/father/son"></a>
			    <router-outlet></router-outlet>
			  `
			})
			export class FatherComponent implements OnInit {
			  constructor(){}
			  ngOnInit(){}
			}
		子路由son.component.ts:
			import {Component,OnInit} from '@angular/core';
			@Component({
			  selector:'son',
			  template:``
			})
			export class SonComponent implements OnInit {
			  constructor(){}
			  ngOnInit(){}
			}
		路由器app.router.ts:
			import {FatherComponent} from './father.component';
			import {SonComponent} from './son.component';
			const routes:Routes=[
				{path:'father',component:FatherComponent,children:[
			    {path:'son',component:SonComponent}
			  ]}
			];
		模块app.module.ts:
			import {FatherComponent} from './father.component';
			import {SonComponent} from './son.component';
			@NgModule({declarations:[FatherComponent,SonComponent]})
		根组件app.component.ts:
			@Component({template:'<router-outlet></router-outlet>'})
	路由守卫服务
		test.service.ts:
			import {Injectable} from '@angular/core';
			import {ActivatedRouteSnapshot,CanActivate,RouterStateSnapshot} from '@angular/router';
			@Injectable()
			export class TestGuard implements CanActivate{
			  constructor(){}
			  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
			    return false; //决定是否可以访问组件
			  }
			}
		app.router.ts:
			const routes:Routes=[
				{path:'test',component:TestComponent,canActivate:[TestGuard]}
			];
		app.module.ts:
			import {TestGuard} from './test.service'
			@NgModule({providers:[TestGuard]})