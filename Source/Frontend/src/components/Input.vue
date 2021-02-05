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
                    <p>
                        {{ title.length }} / 70
                    </p>
                </div>
                <input id="title" class="input round" type="text" placeholder="Der Titel sollte beschreiben was man von dem Inhalt einer Webseite erwarten kann." v-model="title" />
                <Warning v-show="title.length > 70" message="Der Title tag sollte nicht länger als <strong>70</strong> Zeichen sein." />
            </fieldset>
            <fieldset class="flex col">
                <div class="flex row space-between">
                    <label for="description" class="text strong">
                        Beschreibung
                    </label>
                    <p>
                        {{ description.length }} / 160
                    </p>
                </div>
                <textarea id="description" class="input round" placeholder="Die Beschreibung ist eine kurze Zusammenfassung des Inhalts einer Webseite." v-model="description"></textarea>
                <Warning v-show="description.length > 160" message="Eine Meta Beschreibung sollte nicht länger als <strong>160</strong> Zeichen sein." />
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
import { defineComponent, toRefs } from "vue";
import { specifications } from '../modules/Generator';
import Warning from './Warning.vue';

export default defineComponent({
    name: "Input",
    components: {
        Warning  
    },
    setup() {
        return { 
            ...toRefs(specifications) 
        }
    }
});
</script>