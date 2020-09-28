<template lang="pug">
.cover
	section.-head
		.-inner
			p.-app-name Book memo!
			img.-app-logo(
				src="~/assets/svg/book.svg",
				width="30",
				height="auto",
				alt="本アイコン"
			)
			h1 本を検索してください
			nuxt-link.-search-link(to="/result")
				img(src="~/assets/svg/search.svg", width="30", height="auto", alt="検索アイコン")
	.-wiki-contents
		ul.-list
			li.-item(v-for="wikiList in wikiLists" :key="wikiList.id")
				nuxt-link(:to="'/wikis/' + wikiList.id" :data-id="wikiList.id")
					span {{ wikiList.name | wikiTitle}}
					div {{ wikiList.name }}
					div {{ wikiList.created }}
					//- div {{wikiList.stars[0].url}}
	//- hr
	//- div
		//- <!-- <p>{{ $store.state.message}}</p>
		//- <!-- <p>{{ $store.state.hello.message}}</p>

		//- <!-- <button v-on:click="$store.commit('updateMassege')">Update</button> -->
		//- <!-- <button v-on:click="$store.commit('updateMassege','Commit with payload')">Update</button> -->
		//- <!-- <button v-on:
		click="$store.dispatch('updateMassegeAction')">Dispatch</button> -->
		//- <!-- <button v-on:click="$store.dispatch('updateMassegeAction','Dispatch with payload')">Dispatch</button> -->
		//- <!-- <button v-on:click="$store.dispatch('hello/updateMassegeAction','Dispatch with payload')">Dispatch</button> -->
		//- Counter


	//- drawer-base
</template>

<script>
// import Counter from '~/components/Counter.vue';
// const axios = require('axios')
import axios from "axios";
// import func from '../vue-temp/vue-editor-bridge';

// let url = 'https://www.googleapis.com/books/v1/volumes'
// let url = 'https://jsonplaceholder.typicode.com/users'

// let isModalActive

export default {
	data: () => {
		return {
			show: true,
			wikiLists: []
		}
	},
	created: function() {
		this.getWikiList();
	},
	methods: {
		getWikiList: function() {
			const backlogSpace = "nulab-exam";
			const apiKey = "Ge8hYlvubnSHTKSIx2D47gMLsPlSiYbYTtkwTr7RNpMSBxFHWgogz6nIf4dWkjtp";
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
					let data = res.data;
					// data.sort(function(val1, val2) {
					//   return val1.created < val2.created ? 1 : -1;
					// });
					this.wikiLists = data;
					// for(var i = 0; i < data.length; i++) {
					//   // console.log(data[i].created+'：'+data[i].content)
					//   if(data[i].stars.length){
					//     console.log(data[i].stars)
					//     this.wikiLists = data[i]
					//   }
					// }
					// console.log(sendData)
					console.log(this.wikiLists);
				})
				.catch(error => {
					console.log("エラー");
				});
		}
	},
	computed: {},
	components: {
		// Counter
		// ModalBase
	}
	// asyncData( {params, error} ){
	//   return axios.get(url)
	//     .then((res) => {
	//       return { books: res.data }
	//     })
	//     .catch((e => {
	//       // console.log(e.response.status)
	//       error ({ books: e.response.status, message: 'ERROR!!!!!!'})
	//     }))
	// },
}
</script>

<style lang="sass" scoped>
.cover
	width: 100%
	overflow-x: hidden
	text-align: center
	.-head
		height: 40vh
		padding: 8vh 8vw
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
