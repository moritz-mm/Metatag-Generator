import { reactive } from "vue";

interface Specifications {
    website: string,
    title: string,
    description: string,
    imageUrl: string
}

export const specifications = reactive({
    website: "",
    title: "",
    description: "",
    imageUrl: "",
} as Specifications);