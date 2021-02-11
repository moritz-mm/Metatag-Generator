<template>
    <section id="input" class="flex col">
        <div class="flex row col-center">
            <h2 class="m-b-2 text h-4">
                {{ message['input-heading'] }}
            </h2>
        </div>
        <form class="box outline round p-a-2 m-y-block-2">
            <fieldset class="flex col">
                <label for="website" class="text strong">
                    {{ message['input-website-label'] }}
                </label>
                <div class="flex row">
                    <input id="website" class="input round m-r-1" style="width: 100%" type="url" :placeholder="message['input-website-placeholder']" v-model="website" />
                    <button class="btn round primary outline" @click.stop.prevent="fetchMetaTags(website)">
                        {{ message['input-search-button'] }}
                    </button>
                </div>
            </fieldset>
            <fieldset class="flex col">
                <div class="flex row space-between">
                    <label for="title" class="text strong">
                        {{ message['input-title-label'] }} 
                    </label>
                    <div class="flex row m-x-block-2">
                        <p>
                            {{ titleWidth }} / 580px
                        </p>
                        <p>
                            •
                        </p>
                        <p>
                            {{ title.length }} / 70
                        </p>
                    </div>
                </div>
                <input id="title" class="input round" type="text" :placeholder="message['input-title-placeholder']" v-model="title" />
                <Warning v-if="title.length > 70" :message="message['input-title-length-warning']" />
                <Warning v-if="titleWidth > 580" :message="message['input-title-pixel-warning']" />
            </fieldset>
            <fieldset class="flex col">
                <div class="flex row space-between">
                    <label for="description" class="text strong">
                        {{ message['input-description-label'] }}
                    </label>
                    <div class="flex row m-x-block-2">
                        <p>
                            {{ descriptionWidth }} / 920px
                        </p>
                        <p>
                            •
                        </p>
                        <p>
                            {{ description.length }} / 160
                        </p>
                    </div>
                </div>
                <textarea id="description" class="input round" :placeholder="message['input-description-placeholder']" v-model="description"></textarea>
                <Warning v-if="description.length > 160" :message="message['input-description-length-warning']" />
                <Warning v-if="descriptionWidth > 920" :message="message['input-description-desktop-warning']" />
                <Warning v-if="descriptionWidth > 680" :message="message['input-description-mobile-warning']" />
            </fieldset>
            <fieldset class="flex col">
                <label for="imageUrl" class="text strong">
                    {{ message['input-preview-image-label'] }}
                </label>
                <input id="imageUrl" class="input round" type="url" :placeholder="message['input-preview-image-placeholder']" v-model="imageUrl" />
            </fieldset>
        </form>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import { specifications, fetchMetaTags } from '../modules/Generator';
import { measureTextWidth, googleTitleFont, googleDescriptionFont } from '../modules/TextMesurer';
import { message } from '../modules/Localizer';
import Warning from './Warning.vue';

export default defineComponent({
    name: "Input",
    components: {
        Warning  
    },
    setup() {
        const titleWidth = computed(() => measureTextWidth(specifications.title, googleTitleFont));
        const descriptionWidth = computed(() => measureTextWidth(specifications.description, googleDescriptionFont));

        return { 
            ...toRefs(specifications),
            titleWidth,
            descriptionWidth,
            fetchMetaTags,
            message
        }
    }
});
</script>