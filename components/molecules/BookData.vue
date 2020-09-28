<template lang="pug">
    div.-item
        //- div {{key}}
        div.-title
            h2 {{bookData.volumeInfo.title}}
        div.-detail
            div.-img
                img(v-if="bookData.volumeInfo.imageLinks" :alt="bookData.volumeInfo.title" :src="bookData.volumeInfo.imageLinks.thumbnail")
            div.-text-block
                p.-publisher 著者： {{bookData.volumeInfo.publisher}}
                p.-publisher-date {{bookData.volumeInfo.publishedDate}}
                nuxt-link.-description(@click.native.stop="openModal" to="")
                    p {{bookData.volumeInfo.description}}
                    div.-view-more
                        p 詳細
                button.-open-memo(@click.prevent="openModal") メモをする
</template>

<script>
// import Counter from '~/components/atom/DoubleButton.vue'

let isModalActive

export default {
    data: function() {
        return {
			// description: String,
			// description: '',
			// descriptionNum: Number
        }
    },
    components: {
        // DoubleButton,
    },
    props: {
        bookData: {
            type: Object
        }
    },
    methods: {
		openModal() {
            // this.isModalActive = true
            this.$emit('openModal')
		},
		closeModal() {
			this.isModalActive = false
        },
    }
}
</script>

<style lang="sass" scoped>
.-item
    background-color: #f4f4f4
    padding: 3%
    .-title
        border-bottom: solid 1px #222
        padding-bottom: 0.4em
        margin-bottom: 0.6em
        h2
            font-size: 1.2em
            line-height: 1.2em
            font-weight: bold
    .-detail
        display: flex
        justify-content: space-between
        .-img
            flex: 1
            padding-right: 1em
        .-text-block
            flex: 2
            .-publisher-date
                margin-bottom: 1.2em
            .-description
                // height: 11.5vh
                text-decoration: none
                color: #222
                margin-bottom: 0.4em
            .-view-more
                width: 100%
                text-align: right
                margin-bottom: 1em
                p
                    color: #4f80e5
            .-open-memo
                background-color: #222
                color: #fff
                font-size: 1.2em
                font-weight: bold
                width: 100%
                padding: 0.8em
                border-radius: 0.2em
</style>
