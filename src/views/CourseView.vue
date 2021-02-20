<template>
    <div class="view-area">
        <div class="view-tagline mb-2">
            {{ course.title }}
        </div>
        <div class="row col-12">
            <div class="col-12 col-md-7">
                <div class="video-container border">
                    <video contextmenu="context_menu" controls loop :src="currentVideo">
                        Your browser does not support playing videos. Change/upgrade your browser to watch.
                    </video>
                </div>
                <div class="mt-3" style="font-weight: bold; color: black;">
                    {{ currentTitle }}
                </div>
            </div>
            <div class="col-12 col-md-4 offset-md-1 border py-2">
                <div class="text-black-50 mb-2 text-center" style="font-weight: bold;">SELECT TO PLAY</div>
                <div class="video-titles-wrapper">
                    <div v-if="videos.length > 0">
                        <button @click="switchVideos(video.video_link, video.title)" v-for="video in videos" :key="video.sn" class="btn btn-link btn-block">
                            {{ video.title }}
                        </button>
                    </div>
                    <div v-else>
                        THERE ARE NO VIDEOS FOR THIS COURSE YET
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3 bg-white">
            {{ course.description }}
        </div>
    </div>
</template>

<style lang="scss">
    .video-container {
        width: 100%;
        height: 60vh;
        padding: 12px;

        video {
            width: 100%;
            height: auto;
            margin: auto;
            transition: all 1000ms linear;
            position: relative;
            z-index: 3;

            &:hover {
                width: 80vw;
                border-radius: 4px;
            }

        }
    }

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { fetchCourse } from '../utils/endpoints';
import axios from 'axios';

@Component
export default class CourseView extends Vue {
    user_id: string = localStorage.getItem("user_id")!;

    course_title: string = this.$route.params.course_title;
    course_id: string = this.$route.params.course_id;
    course: {} = {};
    videos: [] = [];
    currentVideo: string = '';
    currentTitle: string = '';

    mounted() {
        this.fetchCourse();
        this.fetchVideos();
    }

    fetchCourse() {
        axios.get(`${fetchCourse}/${this.course_id}`)
            .then(res => this.course = res.data)
            .catch(err => console.log("Error fetching course :>>", err));
    }

    fetchVideos() {
        axios.get(`${fetchCourse}/videos/${this.course_id}`)
            .then(res => {
                this.videos = res.data;
                this.currentVideo = res.data[0].video_link;
                this.currentTitle = res.data[0].title;
            })
            .catch(err => console.log("Error fetching videos :>>", err));
    }

    switchVideos(link, title) {
        this.currentVideo = link;
        this.currentTitle = title;
    }

}

</script>