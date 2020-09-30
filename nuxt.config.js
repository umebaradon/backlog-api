require('dotenv').config();
const {API_KEY} = process.env

export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Backlog Wiki管理アプリケーション',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || 'Backlog Wiki管理アプリケーション' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap'}
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		'@/assets/sass/common.sass',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/filter.js'
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
 /*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/style-resources',
		"@nuxtjs/axios",
	],
	styleResources: {
		sass: [
			'@/assets/sass/_mixins.sass',
		]
	},
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend: (config) => {
		},
	},
	env: {
		API_KEY
	}
}
