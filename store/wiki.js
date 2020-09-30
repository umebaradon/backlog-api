export const state = () => ({
	wikiContents: {
		space: '',
		title: ''
	}
})

export const getters = {
	getTitle(state) {
		return state.wikiContents.title
	}
}

export const actions = {
	async getContentsAction({commit}) {
		// const backlogSpace = "nulab-exam"
		// console.log('space:'+this.state.wikiContents.space)
		const backlogSpace = "nulab-exam"
		const apiKey = process.env.API_KEY
		const wikiListUrl = "projects"
		let sendData = new URLSearchParams()
		sendData.append("apiKey", apiKey)
		// sendData.append("projectIdOrKey", 'UMEBARA');
		const url = "https://" + backlogSpace + ".backlog.jp/api/v2/" + wikiListUrl + "?" + sendData
		const res = await this.$axios.$get(url)
		commit('getContents', res)
	}
}

export const mutations = {
	getContents(state, data) {
		state.wikiContents.title = data[0].projectKey
	},
	changSpace(state, data) {
		state.wikiContents.space = data
	}
}