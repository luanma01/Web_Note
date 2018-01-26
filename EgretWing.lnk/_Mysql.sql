#设置mysql.exe连接mysqld.exe所用的字符集
SET NAMES UTF8;
#丢弃数据库 
DROP DATABASE IF EXISTS 库名;
#创建数据库,设置字符集
CREATE DATABASE 库名 CHARSET=UTF8;
#进入数据库
USE 库名;
#创建新的表
CREATE TABLE 表名A(
	列名01 TINYINT,(#微整数)
	列名02 SMALLINT,(#小整数)
	列名03 INT,(#整数类型)
	列名04 BIGINT,(#大整数)
	#M表示总有效位数,D表示小数点后有效位数
	列名05 FLOAT(M,D),(#单精度浮点小数)
	列名06 DOUBLE(M,D),(#双精度浮点小数)
	列名07 DECIMAL(M,D),(#定点小数)
	列名08 BOOL,(#布尔类型)
	列名09 DATE,(#日期类型)
	列名10 TIME,(#时间类型)
	列名11 DATETIME,(#日期时间类型)
	#M指可以存储的最大字符个数
	列名12 CHAR(M),(#定长字符串)
	列名13 VARCHAR(M),(#变长字符串)
	列名14 TEXT(M)(#变长字符串,容量大)
);
#向表中插入一行数据
INSERT INTO 表名A VALUES(值01,值02,值03,值04,值05,值06,值07,true/1/false/0,'值09','值10',"值11",'值12','值13',"值14");
#创建新的表
CREATE TABLE 表名B(
	列名15 INT PRIMARY KEY,(#主键约束,一个表只用一个主键约束)
	列名16 INT PRIMARY KEY AUTO_INCREMENT,(#主键约束,自动增长)
	列名17 INT UNIQUE,(#唯一约束)
	列名18 INT NOT NULL,(#非空约束)
	列名19 INT CHECK(列>值),(#检查约束,设定条件)
	列名20 INT DEFAULT 值,(#默认值约束)
	列名21 INT,FOREIGN KEY(列名21) REFERENCES 表名A(列名03)(#外键约束,列21被列03约束)
);
#向表中插入一行数据
INSERT INTO 表名B VALUES(值15,值16/NULL,值17/NULL,值18,值19,值20/DEFAULT,值03/NULL);
#默认值约束的另一种表达方式
INSERT INTO 表名B(列...) VALUES (值...);  #其他的列,尚未明确值的,会使用默认值

-----------------------------------------------------------------------------------------------
#查询列03和列13的数据
SELECT 列名03,列名13 FROM 表名A;

#查询表A中所有列的数据
SELECT * FROM 表名A;

#给列06,列08,列12取别名
SELECT 列名06 AS 别名06,列名08 别名08,列名12 '别 名 12' FROM 表名A;

#查询列03中不同的值,重复的值只显示1次
SELECT DISTINCT 列名03 FROM 表名A;

#查询列03的值乘以12后的值
SELECT (列名03)*12 FROM 表名A;

#在SQL计算1+2*3-4/2
SELECT 1+2*3-4/2;

#查询表A的详细数据,使数据按照列03的值排序
SELECT * FROM 表名A ORDER BY 列名03;

#查询列01,列02,列03,列04的数据,使数据先按照列03的值升序排序,相同的值03再按列01的值降序排序
SELECT 列名01,列名02,列名03,列名04 FROM 表名A ORDER BY 列名03 ASC,列名01 DESC;

#查询表A,每页最多显示m行,显示第n页
SELECT * FROM 表名A LIMIT (n-1)*m,m;

#查询列01,列02的数据,按照列03的值来排序,每页最多显示5行,显示第二页
SELECT 列名01,列名02 FROM 表名A ORDER BY 列名03 LIMIT 5,5;

#查询出,列03的值为123的所有信息
SELECT * FROM 表名A WHERE 列名03=123;

#SQL中常用的比较运算符 =,<,<=,>,>=,!=

#查询出,列16的值尚未确定的数据
SELECT * FROM 表名B WHERE 列名16 IS NULL; 

#查询出,列17的值已经确定的数据
SELECT * FROM 表名B WHERE 列名17 IS NOT NULL;

#查询出,列03的值在100~200之间的数据信息
SELECR * FROM 表名A WHERE 列名03>=100 AND 列名03<=200;

#查询出,列03的值大于200和小于100的数据信息
SELECR * FROM 表名A WHERE 列名03<100 OR 列名03>200;

#查询出,列09的值属于2000年的数据信息
SELECT * FROM 表名A WHERE 列名09>='2000-1-1' AND 列名09<='2000-12-31';
SELECT * FROM 表名A WHERE 列名09 BETWEEN '2000-1-1' AND '2000-12-31';

#查询出列03中值为8,16,32的数据信息
SELECT * FROM 表名A WHERE 列名03=8 OR 列名03=16 OR 列名03=32;
SELECT * FROM 表名A WHERE 列名03 (8,16,32);

#查询出,列13的值中,包含"S"的所有数据信息
SELECT * FROM 表名A WHERE 列名13 LIKE '%S%';

#查询出,列13的值中,以"Y"开头的所有数据信息
SELECT * FROM 表名A WHERE 列名13 LIKE 'Y%';

#查询出,列13的值中,倒数第二个字符为"T"的所有信息
SELECT * FROM 表名A WHERE 列名13 LIKE '%T_';

#查询出,列03的值小于500的数量
SELECT COUNT(列名03) FROM 表名A WHERE 列名03<500;

#查询出,列03的值大于1000的最小值
SELECT MIN(列名03) FROM 表名A WHERE 列名03>1000;

#查询出,列03的值小于1500的最大值
SELECT MAX(列名03) FROM 表名A WHERE 列名03<1500;

#查询出,列03的值大于200的平均值
SELECT AVG(列名03) FROM 表名A WHERE 列名03>200;

#查询出,列08的值为true的列03值的总和
SELECT SUM(列名03) FROM 表名A WHERE 列名08=true;

#查询出,列03的值的数量,最大值,最小值,平均值,总和
SELECT COUNT(列名03),MAX(列名03),MIN(列名03),AVG(列名03),SUM(列名03) FROM 表名A;    #可以添加限定

#查询出,表A中,行的数量
SELECT COUNT(*) FROM 表名A;   #可以添加限定

#查询出,每个列01的值,及每个列01值对应的列03值的平均值
SELECT 列名01,AVG(列名03) FROM 表名A GROUP BY 列名01;

#查询出,与列13值为'陈彬'的列09值中年份相同的所有数据信息
SELECT * FROM 表名A WHERE YEAR(列名09)=(SELECR YEAR(列名09) FEOM 表名A WHERE 列名13='陈彬');

#查询出,列13值为'陈彬'对应表B的所有数据信息
SELECT * FROM 表名B WHERE 列名15=(SELECT 列名03 FROM 表名A WHERE 列名13='陈彬');

#查询出,列13的值及其相应的列18的值       #跨表查询必须有限定条件
SELECT 列名13,列名18 FROM 表名A,表名B WHERE 列名03=列名15;
SELECT 列名13,列名18 FROM 表名A INNER JOIN 表名B ON 列名03=列名15;
SELECT 列名13,列名18 FROM 表名A LEFT OUTER JOIN 表名B ON 列名03=列名15;  #左侧表所有记录必须全部显示
SELECT 列名13,列名18 FROM 表名A RIGHT OUTER JOIN 表名B ON 列名03=列名15; #右侧表所有记录必须全部显示
SELECT 列名13,列名18 FROM 表名A FULL JOIN 表名B ON 列名03=列名15;   #左右侧表所有记录必须全部显示,MySQL不支持
(SELECT 列名13,列名18 FROM 表名A LEFT OUTER JOIN 表名B ON 列名03=列名15) UNION (SELECT 列名13,列名18 FROM 表名A RIGHT OUTER JOIN 表名B ON 列名03=列名15);  #左右侧表所有记录必须全部显示

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
QUIT;  #断开到服务器的连接
SHOW DATABASES;  #显示当前服务器上所有的数据库名
SHOW TABLES;  #显示当前数据库中所有的表名
SHOW CREATE TABLE 表名;  #显示创建该表所用的SQL语句
DESC 表名;  #描述该表的结构

SET NAMES UTF8; 回车 SOURCE sql文件 回车  #检查数据库
md5() #数据加密
binary #数据区分大小写

DELETE FROM 表名 WHERE 列=值;   #删除表中的一行记录
UPDATE 表名 SET 列=修改值,列=修改值 WHERE 列=值;   #修改表中的一行记录

ALTER TABLE 表名 ADD INDEX (列名(n)); #索引对象

/*
计算机本地的通用IP地址/域名:127.0.0.1/localhost
连接MySQL服务器:mysql.exe -hIP地址 -p密码 -uroot(#用户)
   连接本地简写:mysql -uroot    #交互模式
脚本模式:mysql -uroot < sql文件详细路径
在cmd中输入ipconfig可以查询计算机的IP地址
*/


Redis
	数据类型:string字符串/hash哈希/list列表/set集合/zset有序集合
	
	在https://github.com/MicrosoftArchive/redis下载window版本
	在cmd中进入解压后的redis目录
	启动命令: redis-server redis.windows.conf
	设置Redis服务: redis-server --service-install redis.windows-service.conf --loglevel verbose
	卸载服务: redis-server --service-uninstall
	启动服务: redis-server --service-start
	停止服务: redis-server --service-stop
	修改redis某个配置项: CONFIG SET 配置名 "配置值"
	获取redis某个配置项: CONFIG GET 配置名
	获取redis所有配置项: CONFIG GET *
	  
 	连接/检测
 		PING         #检测redis服务是否启动,启动返回PONG
 		redis-cli.exe -h 127.0.0.1 -p 6379 -a "密码"  #连接远程服务器
	字符串
		SET 键名 键值               #设置键值
		GET 键名                    #查询键值
		DEL 键名                    #删除键值
		SETNX 键名 键值             #键名不存在才设置键值			
		INCR 键名                   #数字的键值递增1
		EXPIRE 键名 秒数            #设置键在指定秒数被删除
		TTL 键名                    #返回键存在的剩余秒数;返回-2,表示键已被删除;返回-1,表示键永远有效
	列表
		RPUSH 键名 键值             #将新值追加到列表的末尾
		LPUSH 键名 键值             #将新值插入到列表的开头
		LRANGE 键名 start end       #获取从下标start开始到下标end结束的元素子集;若end为-1,表示获取到列表结束
		LLEN 键名                   #返回列表长度
		LPOP 键名                   #删除列表第一个元素,并将删除的元素返回
		RPOP 键名                   #删除列表最后一个元素,并将删除的元素返回
	集合
		SADD 键名 键值              #将值添加到集合
		SREM 键名 键值              #在集合中删除指定值
		SISMEMBER 键名 键值         #查询集合中是否有指定值,存在返回1,不存在返回0
		SMEMBERS 键名               #返回集合的所有成员的列表
		SUNION 键名 键名            #合并多个集合,返回新集合的所有元素的列表
	有序集合
		ZADD 键名 序号 键值         #将值添加到有序列表
		ZRANGE 键名 start end       #获取序号排列中从start号到end号的元素的列表;序号排列,索引从0开始
  Hashes
  	HSET 键名 属性名 值            #给类对象添加一个属性
  	HMSET 键名 属性名 值 属性名 值 #同时添加多个属性
  	HGETALL 键名                   #获取类对象保存的数据
  	HGET 键名 属性名               #获取类对象的某个属性的值
  	HINCRBY 键名 属性名 数字       #若属性的值是数字,则值加上输入的数字
		HDEL 键名 属性名               #若属性的值是数字,则把值赋值为0