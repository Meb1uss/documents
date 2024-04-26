(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{316:function(v,_,t){v.exports=t.p+"assets/img/git1.7e672dea.png"},317:function(v,_,t){v.exports=t.p+"assets/img/git4.4697e737.png"},364:function(v,_,t){"use strict";t.r(_);var i=t(14),e=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"git-基本使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-基本使用"}},[v._v("#")]),v._v(" Git 基本使用")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("p",[v._v("基本命令行指令：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("cd ..")]),v._v(" 进入上一级目录")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("cd 目录名")]),v._v(" 进入指定目录")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("md newfloder")]),v._v(" 在当前目录下创建文件夹 newfloder")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("rd")]),v._v(" 删除文件夹")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("cls")]),v._v(" 清空命令行窗口")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("type nul>文件名.后缀名")]),v._v(" 创建文件")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("echo '内容' > 文件名.后缀名")]),v._v(" 向文件中写入内容")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("echo '内容' >> 文件名.后缀名")]),v._v(" 向文件中追加内容")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("vi 文件名.后缀")]),v._v(" 编辑文件内容")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("ls")]),v._v(" 查看当前文件夹内容")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("rm")]),v._v(" 删除文件")])])])]),v._v(" "),_("h2",{attrs:{id:"初始化设置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初始化设置"}},[v._v("#")]),v._v(" 初始化设置")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git -v")]),v._v(" 查看 git 版本")]),v._v(" "),_("li",[_("code",[v._v("git config --global user.name userName")]),v._v(" 配置用户名为 userName")]),v._v(" "),_("li",[_("code",[v._v("git config --global user.email xxxxx@xxx.com")]),v._v(" 配置邮箱为 xxxxx@xxx.com")]),v._v(" "),_("li",[_("code",[v._v("git config --global --list")]),v._v(" 查看配置信息")])])]),v._v(" "),_("p",[v._v("使用 "),_("code",[v._v("git -v")]),v._v(" 查看 git 版本，接下来配置用户名和邮箱，用来记录是谁提交了文件")]),v._v(" "),_("p",[v._v("配置用户名\n"),_("code",[v._v("git config --global user.name Bruce")])]),v._v(" "),_("ul",[_("li",[v._v("其中\n"),_("ul",[_("li",[v._v("若省略 "),_("code",[v._v("--global")]),v._v(" 则为本地配置，只对本地仓库有效")]),v._v(" "),_("li",[_("code",[v._v("--global")]),v._v(": 全局配置，所有仓库生效")]),v._v(" "),_("li",[_("code",[v._v("--system")]),v._v("：系统配置，对所有用户生效，一般不使用")])])])]),v._v(" "),_("p",[v._v("配置邮箱")]),v._v(" "),_("p",[_("code",[v._v("git config --global user.email xxxxx@xxx.com")])]),v._v(" "),_("p",[v._v("如果 "),_("code",[v._v("user.name/user.email")]),v._v(" 后为的字符串包含空格，则需要用引号包裹")]),v._v(" "),_("p",[_("code",[v._v('git config --global user.name "Bruce Wayne"')])]),v._v(" "),_("p",[v._v("查看配置信息")]),v._v(" "),_("p",[_("code",[v._v("git config --global --list")])]),v._v(" "),_("h2",{attrs:{id:"新建仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库"}},[v._v("#")]),v._v(" 新建仓库")]),v._v(" "),_("p",[v._v("两种方式创建仓库")]),v._v(" "),_("ul",[_("li",[v._v("方式一：本地直接创建仓库 "),_("code",[v._v("git init")])]),v._v(" "),_("li",[v._v("方式二：从远程服务器克隆一个已存在的仓库 "),_("code",[v._v("git clone")])])]),v._v(" "),_("p",[_("code",[v._v("git init")]),v._v(" 在当前目录下生成仓库")]),v._v(" "),_("p",[_("code",[v._v("git init xxx")]),v._v(" 在当前目录下创建 "),_("code",[v._v("xxx")]),v._v(" 文件夹，在 "),_("code",[v._v("xxx")]),v._v(" 文件夹下创建仓库\n等价于")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("md xxx\ncd xxx\ngit init\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br")])]),_("h2",{attrs:{id:"工作区域和文件状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作区域和文件状态"}},[v._v("#")]),v._v(" 工作区域和文件状态")]),v._v(" "),_("h3",{attrs:{id:"工作区域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#工作区域"}},[v._v("#")]),v._v(" 工作区域")]),v._v(" "),_("p",[v._v("Git 本地数据管理分为三个区域")]),v._v(" "),_("ul",[_("li",[v._v("工作区（Working Directory）\n"),_("ul",[_("li",[v._v("也叫工作目录或本地工作目录，资源管理器里能看到的文件夹就是工作区")]),v._v(" "),_("li",[v._v("实际操作目录")])])]),v._v(" "),_("li",[v._v("暂存区（Staging Area/Index）\n"),_("ul",[_("li",[v._v("临时存储区域，用于保存即将提交到 Git 仓库的修改内容")])])]),v._v(" "),_("li",[v._v("本地仓库（Local Repository）\n"),_("ul",[_("li",[v._v("通过 "),_("code",[v._v("git init")]),v._v(" 创建的仓库")]),v._v(" "),_("li",[v._v("包含了完整的项目历史和元数据，是 Git 存储代码和版本信息的主要位置")])])])]),v._v(" "),_("p",[v._v("工作区就是 "),_("code",[v._v(".git")]),v._v(" 所在的目录，暂存区为 "),_("code",[v._v(".git/index")]),v._v("，本地仓库是 "),_("code",[v._v(".git/objects")])]),v._v(" "),_("p",[v._v("修改完工作区的内容后，需要通过 "),_("code",[v._v("git add")]),v._v(" 添加到暂存区，最后使用 "),_("code",[v._v("git commit")]),v._v(" 提交到本地仓库")]),v._v(" "),_("p",[_("code",[v._v("ls")]),v._v(" 命令查看工作区内容\n"),_("code",[v._v("git ls-files")]),v._v(" 查看暂存区内容")]),v._v(" "),_("h3",{attrs:{id:"文件状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件状态"}},[v._v("#")]),v._v(" 文件状态")]),v._v(" "),_("p",[v._v("Git 中的文件也存在几种状态")]),v._v(" "),_("ul",[_("li",[v._v("未跟踪 Untrack\n"),_("ul",[_("li",[v._v("新创建的还没被 Git 管理起来的文件")])])]),v._v(" "),_("li",[v._v("未修改 Unmodified\n"),_("ul",[_("li",[v._v("已被 Git 管理，内容未被修改，未发生变化的文件")])])]),v._v(" "),_("li",[v._v("已修改 Modified\n"),_("ul",[_("li",[v._v("已被修改，但还未被添加到暂存区的文件")])])]),v._v(" "),_("li",[v._v("已暂存 Staged\n"),_("ul",[_("li",[v._v("修改后已被暂存的文件")])])])]),v._v(" "),_("h2",{attrs:{id:"添加和提交文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加和提交文件"}},[v._v("#")]),v._v(" 添加和提交文件")]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git init")]),v._v(" —— 创建仓库")]),v._v(" "),_("li",[_("code",[v._v("git status")]),v._v(" —— 查看仓库状态")]),v._v(" "),_("li",[_("code",[v._v("git add")]),v._v(" —— 添加到暂存区")]),v._v(" "),_("li",[_("code",[v._v("git commit")]),v._v(" —— 提交暂存区中的文件到本地仓库")]),v._v(" "),_("li",[_("code",[v._v("git log")]),v._v(" —— 查看提交历史")])])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git init")]),v._v(" 创建仓库")]),v._v(" "),_("li",[_("code",[v._v("git.add hello.txt")]),v._v(" 将 "),_("code",[v._v("hello.txt")]),v._v(" 文件添加到暂存区")]),v._v(" "),_("li",[_("code",[v._v("git status")]),v._v(" 查看仓库状态")]),v._v(" "),_("li",[_("code",[v._v("git commit -m '第一次提交")]),v._v(" 提交暂存区的文件到本地仓库。")]),v._v(" "),_("li",[_("code",[v._v("git log")]),v._v(" 查看提交历史")])]),v._v(" "),_("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(316),alt:""}}),v._v(" "),_("p",[_("code",[v._v('git commit -m "提交信息"')]),v._v("\n提交信息会被记录到仓库中\n如果没有提交信息，会进入一个页面，\n按下 "),_("code",[v._v("i")]),v._v(" 进入编辑模式，使用方向键移动光标，第一行写上提交信息，再按下 "),_("code",[v._v("Esc")]),v._v(" 退出编辑模式，输入 "),_("code",[v._v(":wq")]),v._v(" 保存退出。")]),v._v(" "),_("p",[_("code",[v._v("git add")]),v._v(" 可选参数")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git add *.txt")]),v._v(" 将所有 "),_("code",[v._v(".txt")]),v._v(" 后缀文件添加到暂存区")]),v._v(" "),_("li",[_("code",[v._v("git add .")]),v._v(" 将当前文件夹下的所有文件都添加到暂存区")])]),v._v(" "),_("p",[_("code",[v._v("git commit")]),v._v(" 参数")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git commit -m 'msg'")]),v._v(" 将 "),_("code",[v._v("msg")]),v._v(" 作为本次提交信息")])]),v._v(" "),_("p",[_("code",[v._v("git log --oneline")]),v._v(" 查看精简提交历史")]),v._v(" "),_("h2",{attrs:{id:"回退版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回退版本"}},[v._v("#")]),v._v(" 回退版本")]),v._v(" "),_("p",[_("code",[v._v("git reset")]),v._v(" 三种不同类型的参数")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("git reset --soft xxxx")]),v._v(" "),_("ul",[_("li",[v._v("回退到版本 id 为 xxx 的版本，并保留工作区和暂存区的所有修改内容")])])]),v._v(" "),_("li",[_("code",[v._v("git reset --hard xxx")]),v._v(" "),_("ul",[_("li",[v._v("回退到版本 id 为 xxx 的版本，并丢弃工作区和暂存区的所有修改内容")])])]),v._v(" "),_("li",[_("code",[v._v("git reset --mixed xxx")]),v._v(" (默认)\n"),_("ul",[_("li",[v._v("回退到版本 id 为 xxx 的版本，保留工作区但丢弃暂存区的所有修改内容")])])])]),v._v(" "),_("p",[_("code",[v._v("HEAD^")]),v._v(" 表示当前版本\n"),_("code",[v._v("git reset --soft HEAD^")]),v._v(" —— 回退到上个版本，并保留工作区和暂存区的所有内容")]),v._v(" "),_("p",[v._v("理解：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("--soft HEAD^")]),v._v(" 回退到当前版本提交前")]),v._v(" "),_("li",[_("code",[v._v("--hard HEAD^")]),v._v(" 回退到当前版本提交前，且文件未被修改时")]),v._v(" "),_("li",[_("code",[v._v("--mixed HEAD^")]),v._v(" 回退到当前版本添加至仓库前")])]),v._v(" "),_("img",{staticStyle:{display:"block",margin:"0 auto"},attrs:{src:t(317),alt:""}}),v._v(" "),_("p",[_("code",[v._v("git reflog")]),v._v(" 历史操作记录")]),v._v(" "),_("h2",{attrs:{id:"查看差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看差异"}},[v._v("#")]),v._v(" 查看差异")]),v._v(" "),_("p",[_("code",[v._v("git diff")])]),v._v(" "),_("ul",[_("li",[v._v("查看工作区、暂存区、本地仓库之间的差异")]),v._v(" "),_("li",[v._v("查看不同版本之间的差异")]),v._v(" "),_("li",[v._v("查看不同分支之间的差异")])]),v._v(" "),_("h3",{attrs:{id:"比较工作区、暂存区、本地仓库之间的差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#比较工作区、暂存区、本地仓库之间的差异"}},[v._v("#")]),v._v(" 比较工作区、暂存区、本地仓库之间的差异")]),v._v(" "),_("p",[_("code",[v._v("git diff")]),v._v("\n默认比较工作区和暂存区之间的差异")]),v._v(" "),_("p",[_("code",[v._v("git diff HEAD")]),v._v("\n比较工作区和版本库之间的差异")]),v._v(" "),_("p",[_("code",[v._v("git diff --catched")]),v._v("\n比较暂存区和版本库之间的差异")]),v._v(" "),_("h3",{attrs:{id:"比较不同版本的差异"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#比较不同版本的差异"}},[v._v("#")]),v._v(" 比较不同版本的差异")]),v._v(" "),_("p",[_("code",[v._v("git diff id1 id2")])]),v._v(" "),_("p",[v._v("比较现在版本和上个版本")]),v._v(" "),_("p",[_("code",[v._v("git HEAD~ HEAD")]),v._v(" "),_("code",[v._v("HEAD~")]),v._v("/ "),_("code",[v._v("HEAD^")]),v._v(" 都表示上个版本")]),v._v(" "),_("p",[_("code",[v._v("HEAD~2")]),v._v(" 表示 "),_("code",[v._v("HEAD")]),v._v(" 之前的倒数第二个版本")]),v._v(" "),_("h2",{attrs:{id:"删除文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除文件"}},[v._v("#")]),v._v(" 删除文件")]),v._v(" "),_("ol",[_("li",[v._v("本地工作区删除文件 "),_("code",[v._v("rm file1.txt")])]),v._v(" "),_("li",[v._v("暂存区更新 "),_("code",[v._v("git add file1.txt")])]),v._v(" "),_("li",[v._v("仓库更新")])]),v._v(" "),_("p",[_("code",[v._v("git rm file1.txt")]),v._v(" 从本地工作区删除文件 "),_("code",[v._v("file1.txt")]),v._v(" 并添加到暂存区，即把上面两步合并为一个步骤")]),v._v(" "),_("p",[_("code",[v._v("git rm --catched file1.txt")]),v._v("\n把文件从暂存区删除，但保留在工作区")]),v._v(" "),_("h2",{attrs:{id:"gitignore"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[v._v("#")]),v._v(" .gitignore")]),v._v(" "),_("h2",{attrs:{id:"ssh-配置和克隆仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssh-配置和克隆仓库"}},[v._v("#")]),v._v(" SSH 配置和克隆仓库")]),v._v(" "),_("p",[v._v("Https 把本地仓库代码 push 到远程仓库时，需要验证用户名和密码\nSSH 不需要验证用户名密码，但需要在远程仓库上添加 SSH 公钥的配置")]),v._v(" "),_("h3",{attrs:{id:"配置-ssh-密钥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh-密钥"}},[v._v("#")]),v._v(" 配置 SSH 密钥")]),v._v(" "),_("p",[_("code",[v._v("ssh-keygen")]),v._v(" 创建 ssh 密钥对")]),v._v(" "),_("p",[_("code",[v._v(".pub")]),v._v(" 为公钥文件\n为远程仓库配置公钥")]),v._v(" "),_("h2",{attrs:{id:"关联本地仓库和远程仓库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关联本地仓库和远程仓库"}},[v._v("#")]),v._v(" 关联本地仓库和远程仓库")]),v._v(" "),_("p",[_("code",[v._v("git remote add <shortname> <url>")]),v._v("\n添加一个远程仓库，"),_("code",[v._v("shortname")]),v._v(" 为远程仓库别名，默认为 "),_("code",[v._v("origin")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("git remote -v")]),v._v("\n查看当前仓库所对应的远程仓库的别名和地址")]),v._v(" "),_("p",[_("code",[v._v("git push -u origin master:master")])]),v._v(" "),_("p",[v._v("将本地仓库和别名为 origin 的远程仓库关联，把本地仓库的 master 分支推送给远程仓库的 master")]),v._v(" "),_("p",[v._v("当分支名相同时，可省略"),_("code",[v._v(":master")])]),v._v(" "),_("p",[v._v("当远程仓库发生更改时，使用 "),_("code",[v._v("git pull")])]),v._v(" "),_("p",[v._v("把远程仓库的指定分支拉取到本地并合并")]),v._v(" "),_("p",[_("code",[v._v("git pull <远程仓库名> <远程分支名>：<本地分支名>")])]),v._v(" "),_("p",[v._v("默认值为 "),_("code",[v._v("git pull orgin master:master")])]),v._v(" "),_("p",[_("code",[v._v("source tree")])]),v._v(" "),_("h2",{attrs:{id:"分支"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[v._v("#")]),v._v(" 分支")]),v._v(" "),_("p",[_("code",[v._v("git branch")]),v._v(" 查看当前仓库的所有分支")]),v._v(" "),_("p",[_("code",[v._v("git branch 分支名")]),v._v(" 创建一个新的分支")]),v._v(" "),_("p",[_("code",[v._v("git checkout 分支名")]),v._v(" 切换到不同分支")]),v._v(" "),_("p",[_("code",[v._v("git checkout 文件名")]),v._v(" 将文件恢复到修改前的状态")]),v._v(" "),_("p",[v._v("避免文件名和分支名相同")]),v._v(" "),_("p",[v._v("新的切换分支命令\n"),_("code",[v._v("git switch 分支名")])]),v._v(" "),_("p",[_("code",[v._v("git merge")]),v._v(" 合并分支")]),v._v(" "),_("p",[_("code",[v._v("git marge xxx")]),v._v(" 将 xxx 分支合并到当前分支，合并后会自动提交到仓库")]),v._v(" "),_("p",[v._v("分支被合并后依然会存在，如果需要删除")]),v._v(" "),_("p",[_("code",[v._v("git brance -d 分支名")]),v._v(" 删除分支，只有当这个分支被合并后，才能用此法删除")]),v._v(" "),_("p",[_("code",[v._v("git brance -D 分支名")]),v._v(" 强行删除分支")]),v._v(" "),_("p",[_("code",[v._v("git log --oneline --graph --decorate --all")]),v._v(" 查看分支图")]),v._v(" "),_("p",[v._v("使用 "),_("code",[v._v('alias graph = "git log --oneline --graph --decorate --all"')]),v._v("\n这样使用 "),_("code",[v._v("graph")]),v._v(" 就可以查看分支")]),v._v(" "),_("h2",{attrs:{id:"解决合并冲突"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决合并冲突"}},[v._v("#")]),v._v(" 解决合并冲突")]),v._v(" "),_("p",[v._v("两个分支修改相同文件的内容后，合并分支会产生冲突")]),v._v(" "),_("p",[v._v("这时，这个文件会保留两次修改的内容，手动编辑文件，完成后重新提交，提交后会自动完成合并过程。")])])}),[],!1,null,null,null);_.default=e.exports}}]);