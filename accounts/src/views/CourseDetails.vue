<template>
    <div class="view-area">
        <div class="view-tagline" style="font-size: 130%; font-weight: bold;">{{ course.title }}</div>
        <div class="row mt-3 px-3">
            <div class="col-12 col-md-7 course-cover-image-wrapper">
                <img :src="course.cover_image" :alt="course.title" />
            </div>
            <div class="col-12 col-md-4 offset-md-1 bordered p-1">
                <div class="course-title">{{ course.title }}</div>
                <div class="course-blurb my-2 p-2">
                    <p>
                        {{ course.blurb }}
                    </p>

                    <div v-if="isSubscribed == false" id="buy-button_1" class="d-flex flex-row justify-content-center">
                        <button @click="showModal = true" class="btn btn-danger">BUY THIS COURSE</button>
                    </div>
                    <div v-else id="buy-button_1" class="d-flex flex-row justify-content-center">
                        <button @click="viewCourse(course.title, course.course_id)" class="btn btn-danger">VIEW LESSONS</button>
                    </div>
                </div>
            </div>
        </div><!-- END OF ROW -->
        <div class="bg-white p-2 text-cyan mt-4 mt-md-3" style="font-weight: bold;">
            COURSE DESCRIPTION
        </div>
        <div class="col-12 course-description">
            {{ course.description }}
        </div>
        <div class="col-12 text-right">
            <div v-if="videos.length == 0" class="d-inline-block bg-danger px-2 py-1 mt-3 border-radius-4 text-right text-white">
                NO VIDEOS YET
            </div>
            <div v-else-if="videos.length == 1" class="d-inline-block bg-danger px-2 py-1 mt-3 border-radius-4 text-right text-white">
                {{ videos.length }} VIDEO
            </div>
            <div v-else-if="videos.length > 1" class="d-inline-block bg-danger px-2 py-1 mt-3 border-radius-4 text-right text-white">
                {{ videos.length }} VIDEOS
            </div>

        </div>
        <div v-if="isSubscribed == true" class="col-12 my-3 infinite-scroll">
            <div v-for="video in videos" :key="video.video_link" class="card">
                <div class="video-container">
                    <video controls loop :src="video.video_link">Your browser does not support playing videos</video>
                </div>
                <div class="video-descript">
                    {{ course.title }}: Video {{ videos.indexOf(video) + 1 }}
                </div>
            </div>
        </div>
        <div v-else class="col-12 my-3 infinite-scroll">
            Buy this course to watch videos.
        </div>
        <div class="text-center">
            <button v-if="isSubscribed == false" @click="showModal = true" class="btn btn-danger text-white mt-3 mt-md-0 w-60 w-md-30" style="font-size: 110%; font-weight: bold;">
                BUY THIS COURSE
            </button>
            <button v-else @click="viewCourse(course.title, course.course_id)" class="btn btn-danger text-white mt-3 mt-md-0 w-60 w-md-30" style="font-size: 110%; font-weight: bold;">
                VIEW LESSONS
            </button>
        </div>
        <div style="height: 25vh;">
            &nbsp;
        </div>
        <section v-if="showModal == true" class="modal-wrapper">
            <section id="modal">
                <div class="d-flex flex-row justify-content-center w-100">
                    <div class="header w-100">
                        <span class="text-danger">Buy this course?</span><span class="text-primary ml-2">'{{ course.title }}'</span>
                    </div>
                    <div @click="showModal = false" class="text-right d-flex flex-row align-items-center justify-content-center" style="width: 5%; cursor: pointer;">
                        <img style="width: 20px;" src="@/assets/unsplash/close.png" alt="..." />
                    </div>
                </div>
                
                <hr />
                <div class="body">
                    <div class="overflow-ellipsis" style="height: 110px;">
                        <div class="row">
                            <div class="col-3 text-danger" style="font-size: 120%;">
                                Price:
                            </div>
                            <div class="col-9" style="font-size: 110%;">
                                ₦{{ course.price }}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3 text-danger" style="font-size: 120%;">
                                Description:
                            </div>
                            <div class="col-9" style="font-size: 110%;">
                                {{ course.description }}
                            </div>
                        </div>
                    </div>

                    <div class="row payments-container p-2 m-2">
                        <div class="block">
                            <button class="btn btn-warning">Pay With Bitcoin</button>
                            <img src="@/assets/unsplash/bitcoin.png" alt="" />
                        </div>
                        <div class="block">
                            <button class="btn btn-warning">Pay With Ethereum</button>
                            <img src="@/assets/unsplash/ethereum.png" alt="" />
                        </div>
                        <div class="block">
                            <button class="btn btn-warning">Pay With USDT</button>
                            <img src="@/assets/unsplash/tether.png" alt="" />
                        </div>
                        <div class="block">
                            <!-- <button class="btn btn-warning"> -->
                                <paystack class="btn btn-warning"
                                    :amount="course.price * 100"
                                    :email="user[0].email"
                                    :paystackkey="PAYSTACK_PUBLIC_KEY"
                                    :callback="processPayment"
                                    :reference="paystackReference"
                                    :metadata="paymentMeta"
                                    :close="closePaystackModal">
                                    Buy Course
                                </paystack>
                            <!-- </button> -->
                            <img src="@/assets/unsplash/payment.png" alt="" />
                        </div>
                    </div>

                    <div class="text-center powered-by">
                        <div class="text-secondary text-center">Powered by:</div>
                        <img src="@/assets/unsplash/paystack.png" alt="Paystack logo" />
                    </div>
                </div>
            </section>
        </section>
        <!-- <paystack :amount="course.price * 100"
            :email="user.email"
            :paystackkey="PAYSTACK_PUBLIC_KEY"
            :callback="processPayment"
            :reference="paystackReference"
            :metadata="paymentMeta"
            :close="closePaystackModal">
            Buy Course
        </paystack> -->
    </div>
</template>

<style scoped lang="scss">
    @media screen and (max-width: 568px) {
        .course-cover-image-wrapper {
            width: 98%;
            height: 30vh !important;

            img {
                max-width: 100%;
            }
        }

        .course-blurb {
            height: 35vh;
        }

        #buy-button_1 {
            margin-top: -1.4em;
            padding: 4px;
            font-size: 80%;
        }

        .payments-container {
            border: 1px solid grey;

            .block {
                border: 1px solid #ddd;
                height: 150px;
                width: 23%;
                margin: auto;
                text-align: center; 
                transition: all linear 800ms;

                .btn {
                    position: absolute !important;
                    // top: 44%;
                    left: 50%;
                    width: 170px;
                    margin-top: 2em;
                    margin-left: -85px !important;
                    visibility: hidden;
                    transition: all linear 600ms;
                }

                &:hover {
                    background-color: rgba(0, 0, 0, 0.692);
                    cursor: pointer;

                    img {
                        visibility: hidden;
                    }

                    .btn {
                        visibility: visible;
                    }
                }

                img {
                    width: 75%;
                    margin: 3px;

                }


            }
        }

        .modal-wrapper {
            background-color: rgba(0, 0, 0, 0.551);
            width: 100vw;
            height: 150vh !important;
            position: fixed;
            top: 25%;
            left: 0%;
            z-index: 13;
            padding: 2em;

            #modal {
                width: 100%;
                height: 100%;
                max-width: 900px;
                border-radius: 3px;
                box-shadow: 1px 1px 4px 2px #eee;
                color: #777;
                background-color: white;
                padding: 8px 14px;
                margin: auto;

                .header {
                    height: 10%;
                    text-align: center;
                    font-size: 130%;
                    padding-top: 12px;

                }

                .body {

                }
            }

        }

        .payments-container {
            border: 1px solid grey;

            .block {
                border: 1px solid #ddd;
                height: 150px;
                width: 150px !important;
                margin: auto;
                text-align: center; 
                transition: all linear 800ms;

                .btn {
                    position: absolute;
                    top: 44%;
                    width: 170px;
                    margin-left: -10px;
                    visibility: hidden;
                    transition: all linear 600ms;
                }

                &:hover {
                    background-color: rgba(0, 0, 0, 0.692);
                    cursor: pointer;

                    img {
                        visibility: hidden;
                    }

                    .btn {
                        visibility: visible;
                    }
                }

                img {
                    width: 75%;
                    margin: 3px;

                }


            }
        }
    }

    .payments-container {
        border: 1px solid grey;

        .block {
            border: 1px solid #ddd;
            height: 150px;
            width: 23%;
            margin: auto;
            text-align: center; 
            transition: all linear 800ms;

            .btn {
                position: absolute;
                top: 44%;
                width: 170px;
                margin-left: -10px;
                visibility: hidden;
                transition: all linear 600ms;
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.692);
                cursor: pointer;

                img {
                    visibility: hidden;
                }

                .btn {
                    visibility: visible;
                }
            }

            img {
                width: 75%;
                margin: 3px;

            }


        }
    }

    .powered-by {
        width: 100%;
        height: auto;
        max-height: 40px;

        img {
            width: 30%;
            height: auto;
            margin-top: 4%;
        }
    }

    .modal-wrapper {
        background-color: rgba(0, 0, 0, 0.551);
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 10%;
        z-index: 13;
        padding-top: 2em;
    }

    #modal {
        width: 100%;
        height: 80%;
        max-width: 900px;
        border-radius: 6px;
        // box-shadow: 1px 1px 4px 2px #eee;
        border: 1px solid grey;
        color: #777;
        background-color: white;
        padding: 8px 14px;
        margin: auto;

        .header {
            height: 10%;
            text-align: center;
            font-size: 190%;
            padding-top: 12px;

        }

        .body {

        }
    }

    .text-cyan {
        color: cadetblue;
    }
    #buy-button_1 {
        color: black;
    }
    .bordered {
        border: 1px solid #333 !important;
    }
    .course-cover-image-wrapper {
        height: 50vh;
        // background: linear-gradient(to right, cyan);
        background-color: rgb(22, 131, 131);
        border-radius: 4px;

        img {
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-self: center;
        }
    }
    .course-blurb {
        height: 87%;
        background-color: #efefef;
        border-radius: 4px;
        color: #333;
        box-shadow: 1px 1px 3px 2px #999;
        padding-left: 22px;

        p {
            height: 78%;
            background-color: white;
            border-radius: 4px;
            padding: 10px;

        }
    }
    .course-title {
        background-color: white;
        padding: 5px;
        font-size: 110%;
        color: rgb(66, 69, 73);
        font-weight: bold;
        border-radius: 2px;
        box-shadow: 1px 1px 3px 2px #999;
        padding-left: 12px;
    }
    .course-description {
        padding: 12px;
        margin-top: 1em;
        background-color: #efefef;
        border-radius: 4px;
        // box-shadow: 1px 1px 3px 2px #fff;
        border: 1px solid white;
    }
    .border-radius-4 {
        border-radius: 4px;
    }
    .infinite-scroll {
        border: 1px solid grey;
        padding: 10px;
        overflow-x: scroll;
        white-space: nowrap;
        scrollbar-color: lightblue #eee;
        scrollbar-width: thin;
        background-color: white;
        border-radius: 4px;

        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: lightblue;
            border-radius: 20px;
            margin: 2em;
        }
        &::-webkit-scrollbar-track {
            background: #eee;
            width: 4px;
        }

        .card {
            display: inline-block;
            width: 280px;
            height: 280px;
            margin: auto 0.4em;
            padding: 5px;

            .video-container {
                height: 80%;
                background-color: #efefef;
                border-radius: 4px;
                padding: 5px;

                video {
                    width: 100%;
                    border-radius: 4px;

                }
            }

            .video-descript {
                border-radius: 4px;
                padding: 5px;
                background-color: #efefef;
                margin-top: 1em;
                color: #333;
            }
        }
    }
    .w-30 {
        width: 30vw;
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { fetchCourse, getUser, listMyCourses, addSubscription, getCourseVideos, backendURI } from '../utils/endpoints';
import axios from 'axios';
import Modal from '../components/Modal.vue';
import paystack from 'vue-paystack';

@Component({
    components: {
        "modal": Modal,
        "paystack": paystack
    }
})
export default class CourseDetails extends Vue {
    course_id: string = this.$route.params.course_id;
    course: any = {};
    
    modal_header: string = 'This is a modal header';
    modal_body: string = 'This is a modal body';

    showModal: boolean = false;

    user: {} = {};
    user_id: string = localStorage.getItem("user_id")!;

    videos: any = [];

    isSubscribed: boolean = false;

    user_courses: [] = [];

    postDataForSubscriptions: {} = {};

    PAYSTACK_PUBLIC_KEY: string = 'pk_test_553064e41915a7bea88d0e7cb8f1ba69e51313a5';
    PAYSTACK_TRX_REF: string = '';
    paymentMeta: {} = {};

    mounted() {
        this.fetchCourseVideos();
        this.fetchCourse();
        this.fetchUser();
        this.isCourseSubscribed();
        this.fetchUserCourses();
        this.isCourseSubscribed();
        setTimeout(() => {
            console.log("Course :>>", this.course);
            console.log("User courses :>>", this.user_courses);

            if (this.isSubscribed == true) {
                this.showModal = false;
            } else {
                this.showModal = true;
            }
            console.log("Videos :>>", this.videos.length);

            const X = new FormData();
            X.append("user_id", localStorage.getItem("user_id")!);
            X.append("course_id", this.course_id);

            this.postDataForSubscriptions = X;

            console.log(this.isSubscribed);

        }, 6000);
    }

    processPayment() {
        axios.post(`${addSubscription}`, this.postDataForSubscriptions)
            .then(res => alert("You have successfully subscribed to this course :>> " + this.course_id))
            .catch(err => console.log("Error adding subscription :>>", err));
    }

    isCourseSubscribed() {
        const user_id = localStorage.getItem("user_id");
        axios.get(`${backendURI}/user/${user_id}/subscription_status/${this.course_id}`)
            .then(res => this.isSubscribed = res.data)
            .catch(err => console.log("Error getting course subsciption status :>>", err));
    }

    closePaystackModal() {
        console.log(this.PAYSTACK_TRX_REF);
        alert("You closed the modal!");
    }

    fetchCourseVideos() {
        axios.get(`${backendURI}/courses/videos/${this.course_id}`)
            .then(res => {
                console.log("Data :>>", res.data);
                this.videos = res.data;
                console.log("Videos just came through :>>", this.videos);
            })
            .catch(err => console.log("Error getting videos :>>", err));
    }

    fetchUserCourses() {
        const user_id = localStorage.getItem("user_id");
        axios.get(`${listMyCourses}/${user_id}`)
            .then(res => this.user_courses = res.data)
            .catch(err => console.log("Error fetching user courses :>>", err));
    }

    fetchUser() {
        let user_id = localStorage.getItem("user_id");
        axios.get(`${getUser}/${user_id}`)
            .then(res => this.user = res.data)
            .catch(err => console.log("Error fetching user details :>>", err));
    }

    paystackReference() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    fetchCourse() {
        axios.get(`${fetchCourse}/${this.course_id}`)
            .then(res => {
                this.course = res.data;
                let now = new Date().toString();
                this.PAYSTACK_TRX_REF = `${this.course.course_id}`;
                this.paymentMeta = {
                    course: this.course_id,
                    user: localStorage.getItem("user_id"),
                    time: new Date().getTime()
                }
            })
            .catch(err => console.log("Error fetching course object :>>", err));
    }

    viewCourse(title, id) {
        this.$router.push(`/academy/courses/view/${title}/${id}`);
    }
}

</script>