<template>
    <div class="d-flex flex-column" style="height: 100vh;">
        <custom-alert v-if="showAlert" :header="alert_header" :message="alert_message" :urgency="alert_urgency" :classes="alert_classes" />
        <form @submit.prevent="submit()" action="#" method="post">
            <div class="input-group mb-5">
                <input v-model="email" class="w-100 form-control" type="email" name="email" placeholder="Email" aria-placeholder="Email" />
            </div>
            <div class="input-group mb-5">
                <input v-model="pass" class="w-100 form-control" type="password" name="pass" placeholder="Password" aria-placeholder="Password" />
            </div>
            <div class="input-group d-flex flex-row justify-content-center">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="mt-4">
                <div class="small text-danger text-center">
                    Don't have an account? <router-link to="/signup">Sign Up</router-link>
                </div>
                <div class="small text-danger mt-2 text-center">
                    <router-link class="btn" to="/forgot_password">Forgot Password?</router-link>
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

    }

    form {
        margin: 10em auto auto;
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
import { login } from '../utils/endpoints';
import CustomAlert from '../components/Alert.vue';

@Component({
    components: {
        "custom-alert": CustomAlert
    }
})

export default class Login extends Vue {
    email: string = '';
    pass: string = '';

    showAlert: boolean = false;

    alert_urgency: number = 0;
    alert_message: string = '';
    alert_header: string = '';
    alert_classes: string = '';

    mounted() {
        let user_id = localStorage.getItem("user_id");

        if (user_id !== null) {
            this.$router.push("/#/student");
        }
    }

    submit() {
        let payload = {
            email: this.email,
            password: this.pass
        }
        let X = new FormData();

        Object.keys(payload).forEach(key => {
            X.append(key, payload[key]);
        });

        axios.post(login, X)
            .then(res => {
                localStorage.setItem("user_id", res.data[0].user_id);
                this.setAlert('Success!', 'Welcome', 1);
                this.showAlert = true;

                setTimeout(() => {
                    this.showAlert = false;
                }, 4000);

                // Redirects 
                // alert(res.data[0].class);
                if (res.data[0].class == null || res.data[0].class == 1 || res.data[0].class == 0) {
                    localStorage.setItem('user_id', res.data[0].user_id);
                    this.$router.push("/student/dashboard");
                } else if (res.data[0].class == 2) {
                    this.$router.push("/investor/dashboard");
                }
            })
            .catch(err => {
                this.setAlert('Error!', 'The email or password you entered is incorrect', 3);
                this.showAlert = true;

                setTimeout(() => {
                    this.showAlert = false;
                }, 4000);
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