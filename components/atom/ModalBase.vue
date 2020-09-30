<template lang="pug">
	transition(name="modal")
		div(v-if="isActive").base-modal
			div.-contents
				header
					h1.-title {{title}}
				slot(name="contents")
				slot(name="footer")
					footer
						button(@click="closeModal") 閉じる
			div.-overlay
</template>

<script>
import DoubleButton from '~/components/atom/DoubleButton.vue';

export default {
	components: {
		DoubleButton
	},
	props: {
		isActive: {
			default: false
		},
		title: {
			type: String
		}
	},
	methods: {
		closeModal() {
			this.$emit('close')
		}
	}
}

</script>
<style lang="sass" scoped>
.base-modal
	overflow-y: auto
	box-sizing: border-box
	position: fixed
	top: 0
	right: 0
	bottom: 0
	height: 100%
	width: 100%
	z-index: 1
	.-contents
		width: 100%
		height: 100%
		z-index: 2
		background: #fff
		margin: 0 auto;
		position: fixed
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
.-overlay
	z-index: 1
	position: fixed
	top: 0
	left: 0
	width: 100%
	height: 100%
	background-color: rgba(0,0,0,0.5)
	display: flex
	align-items: center
	justify-content: center
.modal
	&-enter
		opacity: 0
	&-enter-active
		transition: .4s
	&-leave-action
		transition: .4s
	&-leave-to
		opacity: 1
</style>