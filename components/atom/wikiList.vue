<template lang="pug">
	div
		nuxt-link(:to="'/wikis/' + wikiList.id" :data-id="wikiList.id")
			span {{ wikiList.name | wikiTitle}}
			div {{ wikiList.name }}
			div {{ wikiList.created }}
</template>

<script>

export default {
		data: function() {
				return {
				}
		},
		components: {
		},
		props: {
				wikiList: {
						type: Object
				}
		},
		methods: {
		}
}
</script>

<style lang="sass" scoped>
a
	display: block
	text-decoration: none
	color: #fff
	font-weight: bold
	height: 100%
</style>
