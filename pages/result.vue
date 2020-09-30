<template lang="pug">
dev.result
	.search-box
		router-link.-link(to="/")
		label(for="search-input")
			input#search-input(type="text", placeholder="キーワードを入力", v-model="keyword")
			button(@click.prevent="getWikiList(keyword)")
				img(src="~/assets/svg/search.svg", width="16", height="auto", alt="矢印アイコン")
	.-keyword-info(v-if="searchNum")
		h1 「{{ keyword }}」の検索結果 {{ searchNum }} 件
	.-wiki-contents
		ul.-list
			li.-item(v-for="wikiList in wikiLists" :key="wikiList.id")
				wiki-list(:wiki-list="wikiList")
</template>

<script>
import axios from "axios";
import WikiList from "~/components/atom/WikiList.vue";

export default {
  data: function() {
    return {
      keyword: String,
      keyword: "",
      wikiLists: [],
      searchNum: Number,
      searchNum: ""
    };
  },
  methods: {
    openModal() {
      this.isModalActive = true;
    },
    closeModal() {
      this.isModalActive = false;
    },
		getWikiList(keyword) {
			const backlogSpace = "nulab-exam";
			const apiKey = process.env.API_KEY
			const wikiListUrl = "wikis";
			let wikiUrl = wikiListUrl;
			let sendData = new URLSearchParams();
			sendData.append("apiKey", apiKey);
			sendData.append("projectIdOrKey", 'UMEBARA');
			sendData.append('keyword', keyword)
			const BacklogUrl = "https://" + backlogSpace + ".backlog.jp/api/v2/" + wikiUrl + "?" + sendData;
			axios.get(BacklogUrl)
			.then(res => {
				let data = res.data;
				this.wikiLists = data;
				this.searchNum = this.wikiLists.length
			})
			.catch(error => {
				console.log("エラー");
			});
		},
  },
  components: {
    WikiList
  }
};
</script>

<style lang="sass" scoped>
.search-box
	display: flex
	justify-content: space-between
	padding: 8px
	& > *
		display: inline-block
		vertical-align: middle
	.-link
		padding: 8px 8px 0 0
	label
		display: flex
		justify-content: space-between
		width: 100%
		border-bottom: solid 1px #ddd
		input
			width: 85%
			font-size: 1.2em
			border: none
			padding: 0.4em
		button
			width: 15%
			opacity: .5
.-keyword-info
	display: inline-block
	vertical-align: middle
	h1
		font-size: 0.8em
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
