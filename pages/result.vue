<template lang="pug">
dev.result
	//- form(@submit.prevent="")
	.search-box
		router-link.-link(to="/")
			img.-arrow(
				src="~/assets/svg/arrow.svg",
				width="30",
				height="auto",
				alt="矢印アイコン"
			)
		//- button(@click.prevent="openModal")
		label(for="search-input")
			input#search-input(type="text", placeholder="キーワードを入力", v-model="keyword")
			button(@click.prevent="getList(keyword)")
				//- button(@click.prevent="getWiki(keyword)")
				img(src="~/assets/svg/search.svg", width="16", height="auto", alt="矢印アイコン")
	.-keyword-info(v-if="searchNum")
		h1 「{{ keyword }}」の検索結果
		span {{ searchNum }}
	ul
		//- li(v-for="(item in books)", :key="item")
			book-data(:book-data="item", @openModal="openModal")
		li(v-for="item in books")
			book-data(:book-data="item", @openModal="openModal")
	modal-base(:isActive="isModalActive", @close="closeModal")
</template>

<script>
import axios from "axios";
import ModalBase from "~/components/atom/ModalBase.vue";
import BookData from "~/components/molecules/BookData.vue";

let isModalActive;

const url = "https://www.googleapis.com/books/v1/volumes";

export default {
  data: function() {
    return {
      keyword: String,
      keyword: "",
      isModalActive: false,
      books: [],
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
    getList(keyword) {
      // console.log(url + '?q=' +keyword)
      const params = {
        q: "search" + keyword,
        Country: "JP",
        maxResults: 20,
        startIndex: 0,
        orderBy: "relevance"
      };
      axios
        .get(url, { params: params })
        .then(res => {
          this.books = res.data.items;
          this.searchNum = res.data.totalItems;
          const data = res.data.items;
          for (var key in data) {
            console.log(key + ":" + data[key].volumeInfo.title);
          }
        })
        .catch(error => {
          console.log("エラー");
        });
    }
  },
  components: {
    BookData,
    ModalBase
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
</style>
