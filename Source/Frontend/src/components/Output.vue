<template>
    <section id="output">
        <div class="flex row col-center space-between">
            <h2 class="m-b-2 text h-4">
                {{ message['output-heading'] }}
            </h2>
            <button class="btn primary shadow round" @click="copyToClipboard">
                {{ message['output-copy-text-button'] }}
            </button>
        </div>
        <p class="m-b-1" v-html="message['output-description']"></p>
        <p class="box neutral round p-a-2 text h-6 wrap" contenteditable="true" spellcheck="false" style="white-space: pre-line">
            {{ generatedMeta }}
        </p>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { specifications } from '../modules/Generator';
import { message } from '../modules/Localizer';
import Input from "./Input.vue";

export default defineComponent({
  components: { Input },
    name: "Output",
    setup() {
        const generatedMeta = computed(() =>
            `<meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            <title>${specifications.title}</title>
            <meta name="title" content="${specifications.title}">
            <meta name="description" content="${specifications.description}">

            <meta property="og:type" content="website">
            <meta property="og:title" content="${specifications.title}">
            <meta property="og:description" content="${specifications.description}">
            <meta property="og:url" content="${specifications.website}">
            <meta property="og:image" content="${specifications.imageUrl}">

            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:title" content="${specifications.title}">
            <meta property="twitter:description" content="${specifications.description}">
            <meta property="twitter:url" content="${specifications.website}">
            <meta property="twitter:image" content="${specifications.imageUrl}">`
        );

        async function copyToClipboard() {
            await navigator.clipboard.writeText(generatedMeta.value);
        }

        return {
            generatedMeta,
            copyToClipboard,
            message
        };
    }
});
</script>