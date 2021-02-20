<template>
    <div class="view-area">
        <div class="view-tagline">MY REPORTS</div>
        <div class="row desktop">
            <div class="col-3 border my-2" style="min-height: 80vh;">
                <div class="title text-primary" style="font-size: 120%; font-weight: bold;">Reports</div>
                <div v-if="reports.length == 0">
                    You do not have any reports yet.
                </div>
                <button @click="active = report" v-for="report in reports" :key="report.report_id" class="btn btn-link btn-block">
                    <div>{{ report.title }}</div>
                    <div class="d-flex flex-row justify-content-between mt-2">
                        <span class="grade text-danger">{{ report.grade }}</span>
                        <!-- <span class="created small text-primary">{{ report.created_at.slice(0, 10) }}</span> -->
                    </div>
                </button>
            </div>
            <div class="col-9 py-2">
                <div v-if="reports.length == 0" class="text-center">
                    Your reports will show here.
                </div>
                <div class="title border p-2 bg-primary text-white d-flex flex-row justify-content-between">
                    <span>{{ active.title }}</span>
                    <span style="font-weight: bold; border-left: 3px solid white; padding-left: 10px; width: 30%; text-align: right;">
                        <span v-if="active.grade == ''">Not yet graded.</span>
                        <span v-else>{{ active.grade }}</span>
                    </span>
                </div>
                <div class="body border p-2" style="height: 80vh;">
                    <div style="height: 70%; overflow-y: scroll; border-bottom: 2px solid #333;">
                        {{ active.body }}
                    </div>
                    <div style="height: 30%; overflow-y: scroll; border-top: 2px solid #333;">
                        <div class="text-danger">Remark(s)</div>
                        <div v-if="active.remark == ''">
                            No remarks.
                        </div>
                        <div v-else>{{ active.remark }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mobile p-3">
            YOU NEED TO LOG IN WITH A COMPUTER TO VIEW THIS PAGE.
        </div>
    </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
    .desktop {
        display: none;
    }
}
@media (min-width: 768.1111px) {
    .mobile {
        display: none;
    }
}
    
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { getReports } from '../utils/endpoints';

@Component
export default class Reports extends Vue {
    user_id: string = localStorage.getItem("user_id")!;
    reports: Array<object> = [{ title: '', body: '...', grade: '' }];

    active: {} = this.reports[0];

    mounted() {
        this.retrieveReports();
    }

    retrieveReports() {
        axios.get(`${getReports}/${this.user_id}`)
            .then(res => {
                this.reports = res.data;
                this.active = this.reports[0];
            })
            .catch(err => console.log("Error fetching reports :>>", err));
    }

}
</script>