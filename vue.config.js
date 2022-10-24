module.exports = {
	transpileDependencies: ['vuetify'],
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Board'
			return args
		})
	},
	devServer: {
		overlay: false,
		proxy: 'https://test324.azurewebsites.net/',
		public: '0.0.0.0:8080'
	},
}
