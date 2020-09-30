<template lang="pug">
div.wiki-page
	p {{wikiPage.name}}
	p id:{{ id }}
	div
		hr
		div(v-html="compiledMarkdownText")
</template>

<script>
import axios from "axios"
import marked from 'marked'

export default {
	data: function() {
		return {
			id: this.$route.params.id,
			wikiPage: [],
			markdownText: '',
			input: ''
		};
	},
	validate({ params }) {
		return /^\d+$/.test(params.id);
	},
	created: function() {
		this.getWikiPage()
	},
	methods: {
		getWikiPage() {
			const backlogSpace = "nulab-exam";
			const apiKey = "Ge8hYlvubnSHTKSIx2D47gMLsPlSiYbYTtkwTr7RNpMSBxFHWgogz6nIf4dWkjtp";
			const wikiListUrl = "wikis";
			// const wikiListUrl = 'projects'
			let wikiId = this.id;
			// console.log(wikiId);
			let wikiUrl = wikiListUrl + "/" + wikiId;
			// let wikiUrl = wikiListUrl
			let sendData = new URLSearchParams();
			sendData.append("apiKey", apiKey);
			sendData.append("projectIdOrKey", 'UMEBARA');
			// sendData.append('keyword', keyword)
			// sendData.append('archived', false)
			// sendData.append('all', false)
			sendData.append("wikiId", wikiId);

			const BacklogUrl =
				"https://" +
				backlogSpace +
				".backlog.jp/api/v2/" +
				wikiUrl +
				"?" +
				sendData;
			console.log(BacklogUrl);

			axios
				.get(BacklogUrl)
				.then(res => {
					// this.wikiLists = res.data
					// console.log(data[0].id)
					let data = res.data
					// data.sort(function(val1, val2) {
					// 	return ( val1.created < val2.created ? 1 : -1);
					// });
					this.wikiPage = data
					this.markdownText = data.content
					// for(var i = 0; i < data.length; i++) {
					//   // console.log(data[i].created+'：'+data[i].content)
					//   if(data[i].stars.length){
					//     console.log(data[i].stars)
					//     this.wikiLists = data[i]
					//   }
					// }
					// console.log(sendData)
					// console.log(this.wikiPage);
				})
				.catch(error => {
					console.log("エラー")
				});
		}
	},
	computed: {
		compiledMarkdownText: function () {
			// this.markdownText = this.wikiPage.content
			// this.markdownText = this.wikiPage.content
			// console.log(typeof(contents))
			// let newContents = contents.replace("*", "h2")
			// console.log(this.markdownText)
			// return marked(this.markdownText)
			// console.log(newContents)
			return marked(this.markdownText)
			// return this.markdownText
		}
	}
};
</script>

<style lang="sass" scoped>
.wiki-page /deep/
	width: 100%
	height: 100vh
	overflow-x: hidden
	padding: 32px 8vw
	h1,h2
		margin: 24px 0 16px
	h3,h4,h5
		margin: 20px 0 8px
</style>