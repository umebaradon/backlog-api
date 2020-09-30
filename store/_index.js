export const state = () => ({
	wikiContents: {}
})
export const getters = {
	getProjectKey(state) {
		return state.wikiContents
	}
}
export const actions = {
	async getContentsAction({commit}){
		// const backlogSpace = "nulab-exam"
		const backlogSpace = "nulab-exam"
		const apiKey = "Ge8hYlvubnSHTKSIx2D47gMLsPlSiYbYTtkwTr7RNpMSBxFHWgogz6nIf4dWkjtp"
		const wikiListUrl = "projects"
		let sendData = new URLSearchParams()
		sendData.append("apiKey", apiKey)
		// sendData.append("projectIdOrKey", 'UMEBARA');
		const url = "https://" + backlogSpace + ".backlog.jp/api/v2/" + wikiListUrl+"?"+sendData
		// console.log(url)
		const res = await this.$axios.$get(url)
		// console.table(res)
		commit('getContents', res)
	}
}
export const mutations = {
	getContents(state, data){
		state.wikiContents = data
	}
}