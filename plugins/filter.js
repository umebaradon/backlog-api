import Vue from 'vue'

Vue.filter('wikiTitle', function (value) {
	if(!value) {
		return ''
	}
	let str = '/'
	if (value.match(str)) {
		let index = value.indexOf(str)
		value = value.substring(0, index)
		return value
	}
})