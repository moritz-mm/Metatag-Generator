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

export async function fetchMetaTags(url: string) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "text/html"
        }
    });

    const domParser = new DOMParser();
    const dom = domParser.parseFromString(await response.text(), "text/html");

    specifications.website = response.url;
    specifications.title = dom.getElementsByTagName("title")[0].text;
    const metaTags = document.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
        const meta = metaTags[i];
        if (meta.name === "description") {
            specifications.description = meta.content;
            return;
        }
    }
}