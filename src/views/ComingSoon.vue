<template>
    <section class="coming-soon view-area">
        <div class="wrapper">
            <h1 class="text-danger">Coming Soon</h1>
            <div>
                We are working to bring this feature to our Optimus Pro Academy soon.
            </div>
        </div>
        <img src="@/assets/img/coming-soon.png" alt="Optimus Pro: Coming Soon" />
    </section>
</template>

<style lang="scss" scoped>
    .coming-soon {

        .wrapper {
            position: relative;
            top: 50%;
            z-index: 2;
        }

        img {
            max-width: 600px;
            position: absolute;
            top: 3em;
            right: 6%;
            z-index: 1;
            border: 4px solid cyan;
            border-radius: 4%;
        }
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { component } from 'vue/types/umd';

@Component
export default class ComingSoon extends Vue {}

</script>