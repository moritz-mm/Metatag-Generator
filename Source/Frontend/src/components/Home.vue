<template>
    <main class="flex col">
        <div class="box shadow outline-top outline-bottom">
            <section class="mobile m-y-block-2 p-a-2">
                <Preview />
                <Input />
                <Output />
            </section>
        </div>
        <div v-if="currentLocal === 'de'">
            <section class="mobile p-x-2">
              <Article />
            </section>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { currentLocal } from '../modules/Localizer';
import Input from './Input.vue';
import Output from './Output.vue';
import Preview from './Preview.vue';
import Article from './Article.vue';

export default defineComponent({
  components: {
    Input,
    Output,
    Preview,
    Article
  },
  setup() {
    return { currentLocal }
  }
});
</script>

<style>
  @media only screen and (min-width: 1025px)  {
    .mobile {
      width: 50%;
      margin: auto;
    }
  }
</style>