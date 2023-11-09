import {defineStore} from 'pinia'
import {useFetch, useRoute, useRuntimeConfig} from "nuxt/app";


export const useCourseStore = defineStore({
    id: 'course',
    state: () => ({
        courses: [],
        previousPage: [],
        category: null,
        page: 1,
    }),
    actions: {
        async fetchCourses(append) {
            const config = useRuntimeConfig();
            const route = useRoute();
            const slug = route.params.slug;
            const params = {};
            if (this.page) {
                params['page'] = this.page;
            }
            if (this.order) {
                params['order'] = this.order;
            }
            if (slug) {
                params['category'] = slug;
            }
            const url = `/courses/?${new URLSearchParams(params)}`;
            console.log(url)
            const {data} = await useFetch(url, {baseURL: config.public.apiBase});
            this.previousPage = data.value;
            this.courses.push(...data.value);
        },
        nextPage() {
            this.page++
        },
    },
})
