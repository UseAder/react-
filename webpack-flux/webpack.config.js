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
				// loader:"babel-loader?presets[]=es2015&presets[]=react", //使用哪一个加载器 cnpm i jsx-loader -S
				loader:"babel-loader",//改 形式
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}

/*
1.通过入口 寻找入口里面调用的组件文件，自动处理所有依赖关系
2.代码整合 实现将a.js调用b.js，将所有的组件文件整合到一个大文件中
*/