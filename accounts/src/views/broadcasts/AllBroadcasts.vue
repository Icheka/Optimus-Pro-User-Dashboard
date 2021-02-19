<template>
    <div>
        <div v-for="course in courses" :key="course.course_id" class="card">
            <span v-if="course.category == 'paid'" class="price">
                {{ course.price }}
            </span>
            <span v-else class="price">
                {{ course.category }}
            </span>
            <img :src="course.cover_image" :alt="course.title" />
            <div class="title">
                {{ course.title }}
            </div>
            <div class="blurb">
                {{ course.blurb }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { backendURI } from '../../utils/endpoints';
import axios from 'axios';

@Component
export default class MyCourses extends Vue {
    user: string = localStorage.getItem("user_id")!;
    broadcasts: [] = [];

    mounted() {
        axios.get(`${backendURI}/user/${this.user}/broadcast`)
            .then(res => this.broadcasts = res.data)
            .catch(err => console.log("Error fetching broadcasts :>>", err));
    }
}
</script>