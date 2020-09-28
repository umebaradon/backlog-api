<template lang="pug">
div.main-header
	header
		button.-back(
			type="button"
			onclick="history.back()"
			v-show="isBackButton"
			:class="{'-displayn':isShow}"
		)
			img(alt="トップへ戻るボタン" src="~/assets/svg/arrow.svg")
		h1.-title {{ wikiMainTitle }} のWiki
</template>

<script>
// import {mapActions, mapState} from 'vuex'

export default {
	name: 'MainHeader',
	data: () => {
		return {
			isBackButton: {
				type: Boolean,
				default: false
			},
			isShow: {
				type: Boolean,
				default: true
			},
			// wikiMainTitle: $store.state.wikiMainTitle
			wikiMainTitle: 'タイトル'
		}
	},
	computed: {
		// ...mapActions({
		// 	getTitle: 'index/getTitle',
		// })
	},
	watch: {
		'$route' (to, from) {
			console.log('watch')
			this.isViewBack()
		}
	},
	created() {
		console.log('created')

	},
	mounted() {
		console.log('mounted')
		this.isViewBack()
		// this.getTitle()
	},
	methods: {
		isViewBack() {
			let path = location.pathname
			console.log('パス：'+path)
			this.isShow = false
			if( path == '/' ){
				return this.isBackButton = false
			} else {
				return this.isBackButton = true
			}
		},
		// ...mapActions({
		// 	getTitle: 'index/getTitle',
		// })
	}
}
</script>

<style lang="sass" scoped>
.main-header
	width: 100%
	overflow: hidden
	position: relative
	header
		height: 60px
		display: flex
		justify-content: center
		align-items: center
	.-back
		position: absolute
		left: 0
		top: 0
		width: 40px
		height: 100%
		img
			width: 100%
			display: block
	.-title
		text-align: center
		font-size: 20px
	.-displayn
		display: none
</style>