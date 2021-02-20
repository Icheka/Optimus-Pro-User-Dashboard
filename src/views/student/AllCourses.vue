<template>
    <div class="mx-auto">
        <div class="view-tagline mx-auto mb-3 mt-push">ACADEMY COURSES</div>
        <div class="container row mx-auto">
            <div v-for="course in courses" :key="course.course_id" @click="$router.push(`/academy/courses/${course.title}/${course.course_id}`)" class="card col-12 col-sm-3 course mr-sm-3">
                <div class="category">
                    {{ course.category }}
                </div>
                <span v-if="course.plan == 'paid'" class="price">
                    {{ course.price }}
                </span>
                <span v-else class="price">
                    {{ course.plan }}
                </span>
                <div class="image-container">
                    <img :src="course.cover_image" :alt="course.title" />
                </div>
                <div class="title overflow-ellipsis">
                    {{ course.title }}
                </div>
                <div class="blurb overflow-ellipsis">
                    {{ course.blurb }}
                </div>
                <div v-if="isSubscribed(course.course_id) !== -1" class="bought-badge">
                    You own this course
                </div>
            </div>
        </div>
        <!-- -->
        <div class="mx-auto">
            <div class="view-tagline mx-auto mt-push mb-3 pl-3 w-100">MY COURSES</div>
            <div class="container mx-auto">
                <div class="row">
                    <div v-for="course in my_courses" :key="course[0].course_id" class="card col-12 col-sm-3 course mr-sm-3">
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
    </div>
</template>

<style scoped lang="scss">
    .bought-badge {
        color: red;
        // background-color: #efefef;
        // border: 1px solid grey;
        display: inline !important;
        width: 100%;
        max-width: 140px;
        margin: auto;
        height: 20px;
        border-radius: 10px;
        padding: 5px;
        font-size: 80%;
        // position: absolute;
        // right: 10px;
    }
    .course {
        height: 350px;
        padding-bottom: 6px;

        .category {
            color: black;
            font-size: 110%;
            text-transform: uppercase;
            padding-top: 4px;
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-between;

            span {
                font-size: 55%;
                display: flex;
                align-items: center;
            }
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

import { backendURI, listAllCourses, listMyCourses } from '../../utils/endpoints';
import axios from 'axios';

import { SubscriptionStatus } from '../../utils/interfaces/interfaces';

@Component
export default class MyCourses extends Vue {
    user_id: string = localStorage.getItem("user_id")!;
    courses: [] = [];
    my_courses: [] = [];

    mounted() {
        this.fetchCourses();
        this.fetchMyCourses();
        console.log("All courses :>>", this.courses);
    }

    isSubscribed(course_id) {
        let value = this.my_courses.findIndex(course => course[0]['course_id'] == course_id);
        console.log(course_id);
        console.log("Value :>>", value);
        return value;
    }

    // async isSubscribed(course_id: string) {
    //     // let X = new SubscriptionStatus();
    //     // return X.getSubscriptionStatus(course_id);

    //     const user_id = this.user_id;
    //     status = '';

    //     axios.get(`${backendURI}/user/${user_id}/subscriptions/${course_id}/status`)
    //         .then(res => {
    //             console.log("Subscription status :>>", res.data);
    //             if (res.data.length == 0) {
    //                 status = '';
    //             } else {
    //                 status = "You are subscribed to this course";
    //             }
    //             console.log("Status :>>", status);
    //             // return status;
    //         })
    //         .catch(err => console.log("Error fetching subscription status :>>", err));

    //     setTimeout(() => {
    //         return status;
    //     }, 10000);
    // }

    fetchCourses() {
        axios.get(`${listAllCourses}`)
            .then(res => this.courses = res.data)
            .catch(err => console.log("Error fetching subscriptions :>>", err));
    }

    fetchMyCourses() {
        axios.get(`${listMyCourses}/${this.user_id}`)
            .then(res => this.my_courses = res.data)
            .catch(err => console.log("Error fetching subscriptions :>>", err));
    }
}
</script>