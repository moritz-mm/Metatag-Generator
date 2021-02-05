<template>
    <Header />
    <main class="flex row space-between p-a-2">
        <Input />
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Input from './components/Input.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Input
  }
});
</script>