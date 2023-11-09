import {defineStore} from 'pinia'
import {useFetch, useRoute, useRuntimeConfig} from "nuxt/app";


export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: [],
    }),
    actions: {
        async fetchCategories() {
            const config = useRuntimeConfig();
            const {data} = await useFetch('/courses/categories', {baseURL: config.public.apiBase});
            this.categories = data.value;
        },
    },
    getters: {
        currentCategory(state) {
            const route = useRoute()
            return state.categories[state.categories.findIndex(x => x.slug === route.params.slug)]
        },
    },
})
