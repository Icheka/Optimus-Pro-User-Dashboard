<template>
    <div class="mx-auto">
        <div class="view-tagline mx-auto mt-push mb-3 pl-3 w-100">MY COURSES</div>
        <div class="container mx-auto">
            <div class="row">
                <div @click="viewCourse(course[0].title, course[0].course_id)" v-for="course in courses" :key="course[0].course_id" class="card col-12 col-sm-3 course mr-sm-3">
                    <div class="category">
                        {{ course[0].category }}
                    </div>
                    <span v-if="course[0].plan == 'paid'" class="price">
                        {{ course[0].price }}
                    </span>
                    <span v-else class="price">
                        {{ course[0].plan }}
                    </span>
                    <div class="image-container">
                        <img :src="course[0].cover_image" :alt="course[0].title" />
                    </div>
                    <div class="title overflow-ellipsis">
                        {{ course[0].title }}
                    </div>
                    <div class="blurb overflow-ellipsis">
                        {{ course[0].blurb }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .course {
        height: 350px;
        padding-bottom: 6px;

        .category {
            color: black;
            font-size: 110%;
            text-transform: uppercase;
            padding-top: 4px;
        }

        .title {
            height: 30px;
            font-size: 120%;
            font-weight: 600;
            color: #333;
        }

        .blurb {
            margin-top: 3px;
            height: 70px;
            background-color: #efefef;
            padding: 7px;
            border-radius: 4px;
        }

        .price {
            background-color: #efefef;
            color: red;
            padding: 3px 6px;
            position: absolute;
            top: 36px;
            left: 25px;
            text-transform: capitalize;
            font-size: 120%;
        }

        .image-container {
            width: 100%;
            height: 200px;
            border: 1px solid #eee;
            
            img {
                width: 100%;
                height: auto;
                max-height: 100%;
            }
        }
    }
    
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { listMyCourses } from '../../utils/endpoints';
import axios from 'axios';

@Component
export default class MyCourses extends Vue {
    user_id: string = localStorage.getItem("user_id")!;
    courses: [] = [];

    mounted() {
        this.fetchCourses();
        console.log("My courses :>>", this.courses);
    }

    viewCourse(title, id) {
        this.$router.push(`/academy/courses/view/${title}/${id}`);
    }

    fetchCourses() {
        axios.get(`${listMyCourses}/${this.user_id}`)
            .then(res => this.courses = res.data)
            .catch(err => console.log("Error fetching subscriptions :>>", err));
    }
}
</script>