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
		h1.-title
			span {{ getTitle }} Wiki
	//- p {{ $store.state.wiki.wikiContents}}
</template>

<script>
// import { mapState, mapGetters,mapMutations, mapActions } from 'vuex'
import {mapGetters, mapActions} from 'vuex'

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
			wikiProject: Array
		}
	},
	computed: {
		...mapGetters('wiki', [
			'getTitle'
		]),
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
		this.getContentsAction()
	},
	methods: {
		isViewBack() {
			let path = location.pathname
			this.isShow = false
			if( path == '/' ){
				return this.isBackButton = false
			} else {
				return this.isBackButton = true
			}
		},
		...mapActions('wiki', [
			'getContentsAction'
		]),
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