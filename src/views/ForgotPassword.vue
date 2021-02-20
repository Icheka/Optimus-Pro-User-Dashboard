<template>
    <div class="view-area">
        <form @submit.prevent="submit()" class="py-3">
            <div class="input-group mt-5">
                <div class="input-group-prepend">
                    <span class="input-group-text">My email address is</span>
                </div>
                <input v-model="email" type="text" class="form-control" required aria-required="true" />
            </div>
            <div class="input-group mt-4">
                <div class="input-group-prepend">
                    <span class="input-group-text">My last known password is</span>
                </div>
                <input type="text" class="form-control" />
            </div>
            <div class="text-center mt-3">
                <button type="submit" class="btn btn-primary">
                    Reset My Password
                </button>
            </div>
        </form>

    </div>
</template>

<style lang="scss" scoped>
.input-group {
    max-width: 700px;
    margin: auto;
}
    
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { forgotPassword } from '../utils/endpoints';

@Component
export default class ForgotPassword extends Vue {
    email: string = '';

    submit() {


        axios.get(`${forgotPassword}?email=${this.email}`)
            .then(res => alert("Your request for password reset has been sent. If the email you entered exists, there'll be a mail from us soon with further instructions."))
            .catch(err => alert("A network error occurred and your password could not be reset now. Try again in a few minutes or report this incident to us if the problem persists."))
    }

}

</script>