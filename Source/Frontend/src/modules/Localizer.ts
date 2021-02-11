interface TranslationContaienr {
    [Key: string]: string;
}

export let currentLocal = "";
export let message = {} as TranslationContaienr;

export function isLocalSupported(identifier: string): boolean {
    return ["de", "en"].indexOf(identifier) !== -1;
}

export async function setLocal(identifier: string) {
    currentLocal = identifier.toLowerCase();
    const head = document.querySelector("html");
    head?.setAttribute("lang", currentLocal);
    const response = await fetch(`/locales/${currentLocal}.json`);
    message = await response.json();
}