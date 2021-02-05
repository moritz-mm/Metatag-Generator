<template>
    <section class="box outline round flex col">
        <div class="flex row col-center space-between p-a-1">
            <h2 class="text h-5">
                Input
            </h2>
            <button class="btn primary round shadow">
                Generate
            </button>
        </div>
        <hr class="hr" />
        <form class="p-a-1 m-y-block-2">
            <fieldset class="flex col">
                <label class="text strong">
                    Url
                </label>
                <input class="input round" type="url" placeholder="https://example.com/" v-model="url" />
            </fieldset>
            <fieldset class="flex col">
                <label class="text strong">
                    Title
                </label>
                <input class="input round" type="text" placeholder="My Homepage • example.com" v-model="title" />
            </fieldset>
            <fieldset class="flex col">
                <label class="text strong">
                    Description
                </label>
                <textarea class="input round" placeholder="Description..." v-model="description"></textarea>
            </fieldset>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { specifications } from '../modules/Generator';

export default defineComponent({
    name: "Input",
    setup() {
        return { 
            ...toRefs(specifications) 
        }
    }
});
</script>