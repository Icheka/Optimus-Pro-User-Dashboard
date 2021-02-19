<template>
    <div class="view-area">
        <div class="view-tagline">COMPLETE REGISTRATION</div>
        <custom-alert v-if="showAlert" :header="alert_header" :message="alert_message" :urgency="alert_urgency" :classes="alert_classes" />
        <div class="d-flex flex-row justify-content-space-between">
            <section class="form col-12 col-sm-6 col-md-7">
                <form @submit.prevent="submit()" action="#" method="post">
                    <div class="input-group">
                        <label class="w-100">
                            First Name
                            <input type="text" class="form-control" name="first_name" :value="user.first_name" disabled aria-disabled="true" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="w-100">
                            Last Name
                            <input type="text" class="form-control" name="last_name" :value="user.last_name" disabled aria-disabled="true" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="w-100">
                            Email
                            <input type="email" class="form-control" name="email" :value="user.email" disabled aria-disabled="true" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="w-100">
                            Phone
                            <input type="tel" class="form-control" name="phone_number" :value="user.phone_number" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="w-100">
                            City
                            <input v-if="user.city.length > 2" type="text" class="form-control" name="city" :value="user.city" required aria-required="true" disabled />
                            <input v-else type="text" class="form-control" name="city" v-model="user.city" required aria-required="true" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="w-100">
                            State/Region
                            <input v-if="user.state.length > 2" type="text" class="form-control" name="state" :value="user.state" required aria-required="true" disabled />
                            <input v-else type="text" class="form-control" name="state" v-model="user.state" required aria-required="true" />
                        </label>
                    </div>
                    <div class="input-group">
                        <label class="w-100">
                            Country
                            <input type="text" class="form-control" name="country" :value="user.country" disabled aria-disabled="true" />
                        </label>
                    </div>
                    <div class="input-group">
                        <button type="submit" class="btn btn-success">Update</button>
                    </div>
                </form>
            </section>
            <section class="photo col-12 d-none d-sm-block col-sm-6 col-md-5">
                <div class="img-wrapper">
                    <img v-if="user.profile_photo !== null" :src="user.profile_photo" alt="" />
                    <img v-else src="@/assets/img/user.png" :alt="user_id" />
                </div>
                <div class="mt-3" style="max-width: 330px; max-height: 40px; overflow-y: hidden;">
                    <label class="btn btn-primary w-100">
                        Upload Profile Picture
                        <input @change="e => UploadProfilePhoto(e)" class="mt-5" style="visibility: hidden;" type="file" name="profile_picture" />
                    </label>
                </div>
            </section>

            {{ user.first_name }}
        </div>
    </div>
</template>

<style scoped lang="scss">
    .view-area {
        
        .photo {

            .img-wrapper {
                max-width: 330px;
                height: 100%;
                max-height: 330px !important;
                border-radius: 6px;
                border: 1px solid white;
                // background-color: white;
                padding: 1em;
                margin-top: 14px;

                img {
                    width: 290px;
                    height: 290px;
                    border: 10px solid white;
                    border-radius: 50%;
                }
            }
        }
    }

    .alert {
        width: 100%;
        max-width: 768px;
        margin: auto;
        position: absolute;
        align-self: center;
        z-index: 3;

    }

    form {
        margin: 1em auto auto;
        width: 100%;
        max-width: 768px;
        display: flex;
        flex-direction: column;
        // border: 1px solid #efefef;
        background: white;
        justify-self: center;
        align-self: center;
        box-shadow: 1px 1px 4px 1px #eee, -1px -1px 4px 1px #eee, -1px 1px 4px 1px #eee, 1px -1px 4px 1px #eee;
        border-radius: 10px;
        padding: 2em;
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import axios from 'axios';
import { backendURI, getUser, updateUser } from '../utils/endpoints';
import CustomAlert from '../components/Alert.vue';
import { ICompleteUser, UploadProfilePhoto } from '../utils/interfaces/interfaces';
import { countriesList } from '../services/services';

@Component({
    components: {
        "custom-alert": CustomAlert
    }
})

export default class CompleteRegistration extends Vue {
    User: any = {};

    user_id: string | null = localStorage.getItem("user_id");

    user: any = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: '',
        city: '',
        state: '',
        profile_photo: '',
        class: ''
    }

    showAlert: boolean = false;

    alert_urgency: number = 0;
    alert_message: string = '';
    alert_header: string = '';
    alert_classes: string = '';

    mounted() {
        this.getUser();
    }

    updateProfilePhoto() {
        axios.get(`${backendURI}/user/${this.user_id}/profile_photo`)
            .then(res => this.user.phone_number = res.data)
            .catch(err => console.log("Error fetching profile photo :>>", err));
    }

    UploadProfilePhoto(e) {
        let ProfilePhoto = new UploadProfilePhoto();
        ProfilePhoto.do_upload(e.target!.files[0], this.user_id!);
        setTimeout(() => {
            axios.get(`${backendURI}/user/${this.user_id}/profile_photo`)
                .then(res => {
                    this.user.profile_photo = '';
                    this.user.profile_photo = res.data;
                })
                .catch(err => console.log("Error fetching profile photo :>>", err));
        }, 5000);
    }

    getUser() {
        axios.get(`${getUser}/${this.user_id}`)
            .then(res => {
                this.User = res.data[0];
                // alert(this.user.first_name);
                // this.user = this.User;

                this.user = {
                    first_name: this.User.first_name,
                    last_name: this.User.last_name,
                    email: this.User.email,
                    phone_number: this.User.phone_number,
                    country: this.User.country,
                    city: this.User.city,
                    state: this.User.state,
                    profile_photo: this.User.profile_photo,
                    class: this.User.class,
                }
            })
            .catch(err => {
                this.setAlert("Error!", "There was an error while fetching your details. Check your network connection and refresh this page.", 3);
                this.showAlert = true;
                setTimeout(() => {
                    this.showAlert = false;
                }, 4000);
                return;
            })
    }

    submit() {
        this.post();
    }

    post() {
        let X = new FormData();
        let payload = {
            ...this.user,
            user_id: localStorage.getItem("user_id")
        }
        // console.log("Payload :>>", payload);
        // console.log("USer ID onow ", payload.user_id);

        Object.keys(payload).forEach(key => {
            X.append(key, payload[key]);
        });

        axios.post(updateUser, X)
            .then(res => {
                if (res.data == "Success.") {
                    this.setAlert("Success!", "Your changes will take effect immediately.", 1);
                    this.showAlert = true;
                    setTimeout(() => {
                        this.showAlert = false;
                    }, 4000);

                    return;
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status == 401) {
                        this.setAlert(":(", "A problem occurred.", 3);
                        this.showAlert = true;
                        setTimeout(() => {
                            this.showAlert = false;
                        }, 4000);
                        return;
                    }
                } else {
                    this.setAlert(":(", "A problem occurred.", 3);
                    this.showAlert = true;
                    setTimeout(() => {
                        this.showAlert = false;
                    }, 4000);
                    return;
                }
            })

    }

    setAlert(header: string, message: string, urgency: number = 1, classes = 'mt-2 alert') {
        this.alert_header = header;
        this.alert_message = message;
        this.alert_urgency = urgency;
        this.alert_classes = classes;

    }

    isGreaterThan(param: string, len:number=3) {
        return param.trim().length > len;
    }

    isEmpty(param: string) {
        return param.trim().length == 0;
    }
}

</script>