<template>
    <Header />
    <main class="flex col">
        <div class="box shadow outline-top outline-bottom">
            <section class="mobile m-y-block-2 p-a-2">
                <Preview />
                <Input />
                <Output />
            </section>
        </div>
        <section class="mobile p-a-2">
            <Article />
        </section>
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Input from './components/Input.vue';
import Output from './components/Output.vue';
import Preview from './components/Preview.vue';
import Article from './components/Article.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Input,
    Output,
    Preview,
    Article
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