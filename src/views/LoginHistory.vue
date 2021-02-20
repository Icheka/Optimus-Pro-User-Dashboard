<template>
    <div class="view-area">
        <div class="view-tagline">
            LOGIN HISTORY
            <span class="float-right text-danger">
                Logins:&nbsp;{{ history.length }}
            </span>
        </div>
        <div class="table-wrapper">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>TIME</th>
                        <th>IP ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in history" :key="row.sn">
                        <td>
                            {{ Object.values(history).indexOf(row) + 1 }}
                        </td>
                        <td>
                            {{ row.date }}
                        </td>
                        <td>
                            {{ row.ip_address }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss">
    .table-wrapper {
        border: 1px solid #eee;
        border-radius: 0px;
        padding: 0;
        width: 100%;
        max-width: 1100px;
        margin: auto;
        background-color: lightblue;

        table {
            border-radius: 40px;
            width: 100%;
            margin: auto;
            border: 0;
        }
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import axios from 'axios';
import { getUser, loginHistory } from '../utils/endpoints';

@Component
export default class LoginHistory extends Vue {
    user: {} = {};
    history: {} = {};

    user_id: string | null = localStorage.getItem("user_id");

    showAlert: boolean = false;

    alert_urgency: number = 0;
    alert_message: string = '';
    alert_header: string = '';
    alert_classes: string = '';

    mounted() {
        this.getUser();
        this.getLoginHistory();
        console.log("Login History :>>", this.history);
    }

    setAlert(header: string, message: string, urgency: number = 1, classes = 'mt-2 alert') {
        this.alert_header = header;
        this.alert_message = message;
        this.alert_urgency = urgency;
        this.alert_classes = classes;

    }

    getLoginHistory() {
        axios.get(`${loginHistory}/${this.user_id}`)
            .then(res => this.history = res.data)
            .catch(err => console.log("Error fetching login history :>>", err));
    }

    getUser() {
        axios.get(`${getUser}/${this.user_id}`)
            .then(res => {
                this.user = res.data[0];
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
}
</script>