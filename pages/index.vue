<template lang="pug">
.cover
	section.-head
		.-inner
			nuxt-link.-search-link(to="/result")
				img(src="~/assets/svg/search.svg", width="30", height="auto", alt="検索アイコン")
	.-wiki-contents
		ul.-list
			li.-item(v-for="wikiList in wikiLists" :key="wikiList.id")
				wiki-list(:wiki-list="wikiList")

	modal-base(title="スペース情報入力" :isActive="isActive" @close="closeModal")
		template(v-slot:contents)
			p スペース名を入力してください
			input(v-modal="spaceName" placeholder="スペース名")
			button(type="button" @click="doUpdate") 保存する
</template>

<script>
import axios from "axios";
import ModalBase from "~/components/atom/ModalBase.vue";
import WikiList from "~/components/atom/WikiList.vue";
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
	data: () => {
		return {
			show: true,
			wikiLists: [],
			isActive: {
				type: Boolean,
				default: true
			},
			spaceName: ''
		}
	},
	computed: {
	},
	created: function() {
		this.getWikiList();
	},
	mounted() {
	},
	methods: {
		getWikiList: function() {
			const backlogSpace = "nulab-exam";
			const apiKey = process.env.API_KEY;
			const wikiListUrl = "wikis";
			// const wikiListUrl = 'projects'
			// let wikiId = '/'+90606
			// let wikiUrl = wikiListUrl+wikiId
			let wikiUrl = wikiListUrl;
			let sendData = new URLSearchParams();
			sendData.append("apiKey", apiKey);
			sendData.append("projectIdOrKey", 'UMEBARA');
			// sendData.append('keyword', keyword)
			// sendData.append('archived', false)
			// sendData.append('all', false)
			// sendData.append('wikiId', wikiId )

			const BacklogUrl = "https://" + backlogSpace + ".backlog.jp/api/v2/" + wikiUrl + "?" + sendData;
			axios.get(BacklogUrl)
			.then(res => {
				let data = res.data;
				this.wikiLists = data;
			})
			.catch(error => {
				console.log("エラー");
			});
		},
		closeModal() {
			this.isActive = false
		},
		doUpdate() {
		}
	},
	components: {
		ModalBase,
		WikiList
	}
}
</script>

<style lang="sass" scoped>
.cover
	width: 100%
	overflow-x: hidden
	text-align: center
	.-head
		height: 80px
		position: relative
		.-inner
			position: absolute
			top: 50%
			left: 50%
			transform: translateY(-50%) translateX(-50%)
			width: 100%
			.-app-name
				font-size: .6em
				font-style: italic
				margin-bottom: 1vh
			.-app-logo
				margin: 0 auto
				margin-bottom: 1vh
			h1
				font-size: 1.5em
				margin-bottom: 2vh
			.-search-link
				display: inline-block
				vertical-align: middle
				padding: 5%
				background-color: #eee
				border-radius: 50%
				img
					width: 6vw
	.-wiki-contents
		padding: 8px
		.-list
			display: flex
			justify-content: space-between
			align-items: center
			flex-wrap: wrap
			.-item
				background-color: #68e8cb
				padding: 8px
				border-radius: 8px
				height: 14vh
				width: 49%
				margin-bottom: 8px
				text-align: left
				a
					display: block
					text-decoration: none
					color: #fff
					font-weight: bold
					height: 100%
</style>
