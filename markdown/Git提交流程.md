# git 提交流程

1. 查看变化文件
```git status```

2. 把文件添加到缓冲区
   * 添加单个文件
```git add <filename>```
   * 添加全部文件
```git add .```

3. 提交改动到 HEAD
```git commit -m "代码提交信息"```
现在，你的改动已经提交到了 HEAD，但是还没到你的远程仓库

4. 将远程主分支上改动合并到本地的当前分支
```git pull origin master```

5. 如果提示冲突，你需要打开相应的冲突文件手动解决冲突，解决完成后重复2,3步骤；否则进行步骤6

6. 将本地开发分支提交到远程分支
```git push origin xxx_dev```


#### 工作区概念
本地仓库由 git 维护的三棵“树”组成。第一个是你的```工作目录```，它持有实际文件；第二个是```缓存区（Index）```，它像个缓存区域，临时保存你的改动；最后是```HEAD```，指向你最近一次提交后的结果。
![work](http://www.bootcss.com/p/git-guide/img/trees.png)