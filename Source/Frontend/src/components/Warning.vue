<template>
    <div class="flex row col-center m-y-1">
        <img src="../assets/Warning.svg" alt="Warnung Symbol" height="35" width="35" />
        <p class="text h-6 m-l-1" v-html="message"></p>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Warning",
    props: {
        message: {
            type: String,
            required: true
        }
    }
});
</script>