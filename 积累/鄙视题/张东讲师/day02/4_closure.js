var a=0,b=0;
function A(a){//外层函数
  //外层函数向外返回内层函数——给全局变量A赋值
  A=function(b){console.log(a+b++);}//内层函数
  console.log(a);
}
A(1);//1
//A:function(b){console.log(a+b++);}(a=1)
A(12);//13?