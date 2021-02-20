<template>
    <div class="view-area">
        <div class="view-tagline">
            CREATE REPORT<br />
            <span class="small">You write as detailed a report as you can on a course content and send it to Optimus Pro, and our in-house experts will assess and grade your report, and provide you with feedback. It's a great way to learn, grow and assess your progress.</span>
        </div>
        <div>
            <div class="bar">

            </div>

            <div class="row">
                <div class="col-12 col-md-10">
                    <div class="input-group mt-2">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Report Title</span>
                        </div>
                        <input v-model="report.title" type="text" class="form-control" placeholder="e.g My Report on 'Forex 101'" />
                    </div>
                    <div class="">
                        If you need to attach images and other media, upload them to Google Drive (or a similar online media storage provider), and include the link(s) in your report.
                    </div>
                    <div class="input-group mt-2">
                        <textarea v-model="report.body" class="form-control" style="min-height: 70vh;"></textarea>    
                    </div>
                </div>
                <div class="col-12 col-md-2">
                    <div v-if="show_saved_alert" class="text-danger">
                        This document has been autosaved!
                    </div>
                    <div class="d-flex flex-row col-12 justify-content-center">
                        <div class="btn-group text-center d-flex flex-row mt-3" style="max-width: 140px;">
                            <button @click="clear()" class="btn btn-danger">Clear</button>
                            <button @click="save()" class="btn btn-success">Save</button>
                            <button @click="submit()" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IReport } from '../utils/interfaces/interfaces';
import axios from 'axios';
import { newReport } from '../utils/endpoints';

@Component
export default class CreateReport extends Vue {
    report: IReport = {
        title: '',
        body: '',
        user_id: localStorage.getItem('user_id')!
    }

    show_saved_alert: boolean = false;

    mounted() {
        let report: string | null = localStorage.getItem("new_report");
        if (report == undefined || report == null) {
            this.report = {
                title: '',
                body: '',
                user_id: localStorage.getItem("user_id")!
            }
        } else {
            this.report = {
                title: JSON.parse(report).title,
                body: JSON.parse(report).body,
                user_id: localStorage.getItem("user_id")!
            }
        }

        this.autosave();
    }

    submit() {
        if (this.report.title.trim() == '') return alert("Your report must have a title!");
        
        if (this.report.body.trim().length == 0) return alert("Aren't you forgetting something? Your report is empty!");

        if (window.confirm("Are you sure you want to submit this report?") == true) {
            const X = new FormData();
            Object.keys(this.report).forEach(param => {
                X.append(param, this.report[param]);
            });
            axios.post(newReport, X)
                .then(res => alert("Your report has been submitted successfully!"))
                .catch(err => console.log("Error submitting a report :>>", err));
        }
    }

    save() {
        let report: IReport = {
                title: this.report.title,
                body: this.report.body,
                user_id: this.report.user_id
        }
        localStorage.setItem("new_report", JSON.stringify(report));
        this.show_saved_alert = true;
        setTimeout(() => {
            this.show_saved_alert = false;
        }, 4000);
    }

    clear() {
        if (window.confirm("Are you sure you want to clear this draft?")) {
            let report: IReport = {
                title: '',
                body: '',
                user_id: this.report.user_id
            }
            this.report = report;
            localStorage.setItem("new_report", JSON.stringify(report));
        }
    }

    autosave() {
        setInterval(() => {
            let report: IReport = {
                title: this.report.title,
                body: this.report.body,
                user_id: this.report.user_id
            }
            localStorage.setItem("new_report", JSON.stringify(report));
            
            this.show_saved_alert = true;
            setTimeout(() => {
                this.show_saved_alert = false;
            }, 4000);
        }, 15000);
    }


}

</script>