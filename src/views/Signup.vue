<template>
    <div class="d-flex flex-column" style="height: 100vh; overflow-y: scroll;">
        <custom-alert v-if="showAlert" :header="alert_header" :message="alert_message" :urgency="alert_urgency" :classes="alert_classes" />
        <form @submit.prevent="submit()" action="#" method="post">
            <div class="input-group mb-3">
                <label class="w-100">First Name
                    <input v-model="user.first_name" class="w-100 form-control" type="text" name="first_name" placeholder="First Name" aria-placeholder="First Name" required aria-required="true" />
                </label>
            </div>
            <div class="input-group mb-3">
                <label class="w-100">Last Name
                    <input v-model="user.last_name" class="w-100 form-control" type="text" name="last_name" placeholder="Last Name" aria-placeholder="Last Name" required aria-required="true" />
                </label>
            </div>
            <div class="input-group mb-3">
                <label class="w-100">Email
                    <input v-model="user.email" class="w-100 form-control" type="email" name="email" placeholder="Email" aria-placeholder="Email" minlength="6" required aria-required="true" />
                </label>
            </div>
            <div class="input-group mb-3">
                <label class="w-100">Phone Number
                    <input v-model="user.phone_number" class="w-100 form-control" type="tel" name="phone_number" placeholder="+11234567890" aria-placeholder="+11234567890" minlength="6" required aria-required="true" />
                </label>
            </div>
            <div class="input-group mb-3">
                <label class="w-100">Country
                    <select v-model="user.country" class="form-control" name="country" required aria-required="true">
                        <option disabled aria-disabled="true" selected value="">Choose country</option>
                        <option v-for="country in countries" :key="country.code" :value="country.name">
                            {{ country.name }}
                        </option>
                    </select>
                </label>
            </div>

            <div class="input-group mb-3">
                <label class="w-100">A strong password
                    <input v-model="user.pass" class="w-100 form-control" type="password" name="pass" placeholder="Password" aria-placeholder="Password" minlength="8" required />
                </label>
            </div>
            <div class="input-group mb-3">
                <label class="w-100">Confirm password
                    <input v-model="pass2" class="w-100 form-control" type="password" name="pass2" placeholder="Password" aria-placeholder="Password" minlength="8" required />
                </label>
            </div>

            <div class="input-group d-flex flex-row justify-content-center">
                <button type="submit" class="btn btn-primary">Sign up</button>
            </div>

            <div class="mt-3">
                <div class="small text-center">
                    <span class="text-danger">Already have an account?</span> <router-link to="/auth">Sign In</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">
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
import { signup } from '../utils/endpoints';
import CustomAlert from '../components/Alert.vue';
import { INewUser } from '../utils/interfaces/interfaces';
import { countriesList } from '../services/services';

@Component({
    components: {
        "custom-alert": CustomAlert
    }
})

export default class Signup extends Vue {
    user: INewUser = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: '',
        pass: ''
    }

    pass2: string = '';

    // countries: { name: string, code: string }[] = [];
    countries: any = '';

    showAlert: boolean = false;

    alert_urgency: number = 0;
    alert_message: string = '';
    alert_header: string = '';
    alert_classes: string = '';

    signedUp: boolean = false;

    mounted() {
        this.countries = countriesList;
    }

    submit() {
        // validate input 
        Object.keys(this.user).forEach(key => {
            if (this.isEmpty(this.user[key]) == true) {
                this.setAlert("Error!", "Fields cannot be empty :>>" + key, 3);
                this.showAlert = true;
                setTimeout(() => {
                    this.showAlert = false;
                }, 4000);
                return;
            }
        });

        if (this.user.pass !== this.pass2) {
            this.setAlert("Error!", "Passwords do not match", 3);
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 4000);
            return;
        }

        this.post(this.$router);
    }

    post(Router) {
        let X = new FormData();

        Object.keys(this.user).forEach(key => {
            X.append(key, this.user[key].trim());
        });

        axios.post(signup, X)
            .then(res => {
                if (res.data == "Success.") {
                    this.setAlert("Success!", "The system will automatically redirect you.", 1);
                    this.showAlert = true;
                    this.signedUp = true;
                    setTimeout(() => {
                        this.showAlert = false;
                    }, 4000);
                    setTimeout(() => {
                        Router.push("/auth");
                    }, 6000);

                    return;
                }
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.status == 401) {
                        this.setAlert("Failed!", "A user with that email already exists.", 3);
                        this.showAlert = true;
                        setTimeout(() => {
                            this.showAlert = false;
                        }, 4000);
                        return;
                    }
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