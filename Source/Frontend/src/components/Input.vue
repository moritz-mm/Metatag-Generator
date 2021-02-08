<template>
    <section id="input" class="flex col">
        <div class="flex row col-center">
            <h2 class="m-y-2 text h-4">
                Metadaten
            </h2>
        </div>
        <form class="box outline round p-a-2 m-y-block-2">
            <fieldset class="flex col">
                <label for="website" class="text strong">
                    Webseite
                </label>
                <input id="website" class="input round" type="url" placeholder="https://example.com/" v-model="website" />
            </fieldset>
            <fieldset class="flex col">
                <div class="flex row space-between">
                    <label for="title" class="text strong">
                        Titel 
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
                <input id="title" class="input round" type="text" placeholder="Der Titel sollte beschreiben was man von dem Inhalt einer Webseite erwarten kann." v-model="title" />
                <Warning v-show="title.length > 70" message="Ein Titel Tag, sollte nicht länger als <strong>70</strong> Zeichen sein." />
                <Warning v-show="titleWidth > 580" message="Ein Titel Tag, der breiter als <strong>580 pixel</strong> ist, wird auf <strong>Desktops</strong> abgeschnitten." />
            </fieldset>
            <fieldset class="flex col">
                <div class="flex row space-between">
                    <label for="description" class="text strong">
                        Beschreibung
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
                <textarea id="description" class="input round" placeholder="Die Beschreibung ist eine kurze Zusammenfassung des Inhalts einer Webseite." v-model="description"></textarea>
                <Warning v-show="description.length > 160" message="Eine Meta Beschreibung, sollte nicht länger als <strong>160</strong> Zeichen sein." />
                <Warning v-show="descriptionWidth > 680" message="Eine Meta Beschreibung, die breiter als <strong>680 pixel</strong> ist, wird auf <strong>Smartphones</strong> abgeschnitten." />
                <Warning v-show="descriptionWidth > 920" message="Eine Meta Beschreibung, die breiter als <strong>920 pixel</strong> ist, wird auf <strong>Desktops</strong> abgeschnitten." />
            </fieldset>
            <fieldset class="flex col">
                <label for="imageUrl" class="text strong">
                    Link zum Vorschaubild
                </label>
                <input id="imageUrl" class="input round" type="url" placeholder="https://example.com/preview.png" v-model="imageUrl" />
            </fieldset>
        </form>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import { specifications } from '../modules/Generator';
import { measureTextWidth, googleTitleFont, googleDescriptionFont } from '../modules/TextMesurer';
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
            descriptionWidth
        }
    }
});
</script>