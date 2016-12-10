## 启动mongodb
先进入mongodb的安装目录bin下面
执行
```
mongod --dbpath=E:\mongo
```
> dbpath指向一个真实存在的路径，win8 win10不建议放在盘
如果出现 waiting for connections就表示成功了
如果出现error就表示失败了


## mac 启动mongodb
```
sudo mkdir -p /data/db
```
再输入密码即可创建文件存储目录
再执行
```
sudo mongod &
```
即可


## 如何在命令行客户端中查找数据
显示 当前的服务中有多少个数据库
```
show dbs;
```

切换到指定数据库下面
```
use 201610noe
```
查看当前数据库下面集合的全部文档
```
db.person.find();
```

