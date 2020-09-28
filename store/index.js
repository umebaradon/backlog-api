export const state = () => ({
	wikiMainTitle: ''
})

export const mutations = {
	getTitle(state, data){
		state.wikiMainTitle = data
	}
}

export const actions = {
	async getTitleAction({commit}){
		const backlogSpace = "nulab-exam";
		const apiKey = "Ge8hYlvubnSHTKSIx2D47gMLsPlSiYbYTtkwTr7RNpMSBxFHWgogz6nIf4dWkjtp";
		const wikiListUrl = "wikis";
		let wikiUrl = wikiListUrl;
		const url = "https://" + backlogSpace + ".backlog.jp/api/v2/" + wikiUrl
		const res = await this.$axios.$get(url)
		commit('getTitle', res)
	}
}

// export const state = () => ({
// 	message: 'Hello Vuex!'
// })

// export const mutations = {
// 	updateMassege: function(state, payload){
// 		state.message = payload
// 	}
// }

// export const actions = {
// 	updateMassegeAction(context,payload){
// 		context.commit('updateMassege',payload)
// 	}
// }
