<template>
    <Header />
    <main class="flex col col-center p-a-2">
        <Input />
        <Output />
        <Article />
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Input from './components/Input.vue';
import Output from './components/Output.vue';
import Article from './components/Article.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Input,
    Output,
    Article
  }
});
</script>

<style>
  @media only screen and (min-width: 1025px)  {
    main {
      width: 50%;
      margin: auto;
    }
  }
</style>