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
    const response = await fetch(!/^https?:\/\//i.test(url) ? `https://${url}` : url, {
        headers: {
            "Content-Type": "text/html"
        }
    }).catch(err => console.warn(`Die Website zu der Url "${url}" wurde nicht gefunden.`));

    if (response !== undefined) {
        const domParser = new DOMParser();
        const dom = domParser.parseFromString(await response.text(), "text/html");
    
        specifications.website = response.url;
        specifications.title = dom.getElementsByTagName("title")[0].text;
        const metaTags = document.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
            const meta = metaTags[i];
            if (meta.name === "description") {
                specifications.description = meta.content;
            } else if (meta.getAttribute("property") === "og:image" || "twitter:image") {
                specifications.imageUrl = meta.content;
            }
        }
    }
}