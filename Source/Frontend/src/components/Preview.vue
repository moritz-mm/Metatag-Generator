<template>
    <section id="preview">
        <div class="flex row col-center">
            <h2 class="m-b-2 text h-4">
                {{ message['preview-heading'] }}
            </h2>
        </div>
        <div class="box outline shadow round p-a-2">
            <div id="googleContent">
                <p id="googleUrl">
                    {{ website || message['preview-url-example'] }}
                </p>
                <p id="googleTitle">
                    {{ title || message['preview-title-example'] }}
                </p>
                <p id="googleDescription">
                    {{ description || message['preview-description-example'] }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { specifications } from '../modules/Generator';
import { message } from '../modules/Localizer';

export default defineComponent({
    name: "Preview",
    setup() {
        const website = computed(() => truncate(specifications.website, 70).trim());
        const title = computed(() => specifications.title.trim());
        const description = computed(() => truncate(specifications.description, 160).trim());

        function truncate(text: string, cutAt: number) {
            if (text.length > cutAt) {
                return text.substring(0, cutAt) + '...';
            }
            return text;
        };

        return {
            title,
            description,
            website,
            message
        }
    }
});
</script>

<style scoped>
    #googleContent {
        max-width: 600px;
    }
    #googleUrl {
        color: #202124;
        font-size: 14px;
        padding-top: 1px;
        line-height: 1.3;
        font-style: normal;
    }
    #googleTitle {
        color: #1a0dab;
        font-family: arial, sans-serif;
        font-size: 20px;
        font-weight: normal;
        line-height: 1.3;
        text-align: left;
        text-decoration: none;
        text-decoration-color: #1a0dab;
        text-decoration-line: none;
        text-decoration-style: solid;
        white-space: nowrap;
        display: block;
        padding-top: 4px;
        margin-block-end: 3px;
        margin-bottom: 3px;
        max-width: 580px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #googleDescription {
        color: #4d5156;
        font-family: arial, sans-serif;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.58;
        word-wrap: break-word;
        text-align: left;
        display: block;
    }
</style>