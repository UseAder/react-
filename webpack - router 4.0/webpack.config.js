module.exports = {
	entry:'./src/App.js',
  // 创建一个入口文件(这里源代码位置，因为我们的组件名称都是大写字母开头，所以我们把文件名称也大写字母开头)
	output:{ //指定输出的目录及文件名称
		publicPath:'./', //输出的路径
		filename:'bundle.js'
	},
	//模块的处理
	module:{
		loaders:[
			{
				test:/\.js$/, //通过入口文件匹配所有的js文件
				// loader:"babel-loader?presets[]=es2015&presets[]=react" //使用哪一个加载器 cnpm i jsx-loader -S
				loader:"babel-loader",//改 形式
				query:{
					presets:['es2015','react']
				}
			}
		]
	},
	devServer: {
		port: 8081 ,//设置监听端口（默认的就是8080）
		contentBase: "./",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
	}
}

/*
1.通过入口 寻找入口里面调用的组件文件，自动处理所有依赖关系
2.代码整合 实现将a.js调用b.js，将所有的组件文件整合到一个大文件中
devServer: {
      port: 8080 //设置监听端口（默认的就是8080）
      contentBase: "./build",//本地服务器所加载的页面所在的目录
      colors: true,//终端中输出结果为彩色
      historyApiFallback: true,//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
  }

作者：布蕾布蕾
链接：https://www.jianshu.com/p/794d573d2c53
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/