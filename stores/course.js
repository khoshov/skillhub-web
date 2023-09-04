import {defineStore} from 'pinia'
import {useFetch, useRuntimeConfig} from "nuxt/app";


export const useCourseStore = defineStore({
    id: 'course',
    state: () => ({
        courses: [],
        previousPage: [],
        page: 1,
        category: null,
        order: null,
    }),
    actions: {
        async getCourses() {
            const config = useRuntimeConfig();
            const params = {};
            if (this.page) {
                params['page'] = this.page;
            }
            if (this.category) {
                params['category'] = this.category;
            }
            if (this.order) {
                params['order'] = this.order;
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
        setOrder(field) {
            this.order = field
        }
    },
})
