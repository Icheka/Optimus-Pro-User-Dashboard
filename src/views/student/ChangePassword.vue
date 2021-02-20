<template>
  <div id="content" class="main-content">
    <div class="container my-5">
      <form @submit.prevent="changePassword()" class="col-12 col-sm-8 mx-auto" action="#" method="post">
        <custom-alert
            :message="alert_message"
            :header="alert_header"
            :urgency="alert_urgency"
            classes="mb-3"
            v-if="showAlert"
        />
        <div class="input-group mb-4">
          <input
            v-model="old_password"
            id="old-password"
            type="password"
            class="w-100 form-control"
            placeholder="Old Password"
            aria-placeholder="Old Password"
          />
          <div id="error_old" class="error-msg text-danger old_password"></div>
        </div>
        <div class="input-group mb-4">
          <input
            v-model="new_password1"
            id="new-password_1"
            type="password"
            class="w-100 form-control"
            placeholder="New Password"
            aria-placeholder="New Password"
            minlength="8"
          />
          <div id="error_new1" class="error-msg text-danger new_password"></div>
        </div>
        <div class="input-group mb-4">
          <input
            v-model="new_password2"
            id="new-password_2"
            type="password"
            class="w-100 form-control"
            placeholder="Confirm Password"
            aria-placeholder="Confirm Password"
            minlength="8"
          />
          <div id="error_new2" class="error-msg text-danger confirm_password"></div>
        </div>

        <div class="input-group mb-4 d-flex flex-row justify-content-end">
          <button id="change_password" type="submit" class="btn btn-danger">
            Change Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import CustomAlert from '@/components/Alert.vue';
import axios from 'axios';
import { changePasswordRoute } from '@/utils/endpoints';

@Component({
    components: {
        "custom-alert": CustomAlert
    }
})
export default class ChangePassword extends Vue {
    old_password: string = '';
    new_password1: string = '';
    new_password2: string = '';

    error_empty: string = 'Field cannot be empty';
    error_nomatch: string = 'Fields do not match';

    showAlert: boolean = false;

    alert_header: string = '';
    alert_message: string = '';
    alert_urgency: number = 0;

    user_id: string = localStorage.getItem("user_id")!;

    changePassword() {
        this.submit();
        if (this.isEmpty(this.old_password) == false) {
            document.getElementById("error_old")!.innerText = this.error_empty;
            return;
        } else {
            document.getElementById("error_old")!.innerText = '';
        }
        if (this.isEmpty(this.new_password1) == false) {
            document.getElementById("error_new1")!.innerText = this.error_empty;
            return;
        } else {
            document.getElementById("error_new1")!.innerText = '';
        }
        if (this.isEmpty(this.new_password2) == false) {
            document.getElementById("error_new2")!.innerText = this.error_empty;
            return;
        } else {
            document.getElementById("error_new2")!.innerText = '';
        }

        if (this.new_password1 !== this.new_password2) {
            document.getElementById("error_new2")!.innerText = this.error_nomatch;
        } else {
            this.submit();
        }

    }

    submit() {
        let data: {} = {
            'old': this.old_password,
            'pass': this.new_password1,
            'user_id': this.user_id
        }
        let bodyFormData = new FormData();
        bodyFormData.append("old", this.old_password);
        bodyFormData.append("pass", this.new_password1);
        bodyFormData.append("user_id", this.user_id);

        axios.post(`${changePasswordRoute}`, bodyFormData)
            .then(res => {
                console.log("Req data :>>", data);

                if (res.data == "Success.") {
                    this.alert_header = "Success";
                    this.alert_message = "Password change was successful.";
                    this.alert_urgency = 1;
                } else {
                    this.alert_header = "Error";
                    this.alert_message = res.data[0];
                    this.alert_urgency = 3;
                }
            })
            .catch(err => {
                console.log("Error :>>", err);
                this.alert_header = "Error";
                this.alert_message = "An error occurred and your password could not be changed.";
                this.alert_urgency = 3;
            });
            this.showAlert = true;
    }

    isEmpty(param: string) {
        return param.trim().length > 0;
    }
}
</script>