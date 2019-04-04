module.exports = {
     entry: {
		 "./main.js",
	 },//入口文件，类似APP根文件
     output: {//出口文件
         filename: 'bundle.js'
     }
	 devServer: {
		 contentBase: "./",
		historyApiFallback: true,
		inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
		hot:true,
	},
	plugins:[
		
		new webpack.HotModuleReplacementPlugin()
	 ],
	 
 }
