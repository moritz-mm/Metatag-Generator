import { reactive } from "vue";

interface Specifications {
    url: string,
    title: string,
    description: string
}

export const specifications = reactive({
    url: "https://example.com/",
    title: "My Homepage • example.com",
    description: ""
} as Specifications);