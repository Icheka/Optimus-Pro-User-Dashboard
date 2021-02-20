import axios from 'axios';
import { backendURI, uploadProfilePhoto } from '../endpoints';

export interface IReport {
    title: string;
    body: string;
    user_id: string;
    grade?: any;
}

export class UploadProfilePhoto {
    constructor() {

    }

    do_upload(file: any | string | Blob, user_id: string) {
        let fileExt;
        if (file.type == 'image/jpeg') {
            fileExt = '.jpg';
        } else if (file.type == 'image/png') {
            fileExt = '.png';
        } else {
            fileExt = '.jpeg';
        }


        let X = new FormData();
        X.append('image', file, `${user_id}${fileExt}`);
        X.append("user_id", localStorage.getItem("user_id")!);

        axios.post(uploadProfilePhoto, X, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => console.log(res.data))
            .catch(err => console.log("An error occurred while uploading your profile photo :>>", err));
    }

}

export interface ICompleteUser {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country: string;
    city: string;
    state: string;
    class: string;
    profile_photo: string;
}


export interface INewUser {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    country: string;
    pass: string;
}

export interface ISubscriptionStatus {
    user_id: string;
    course_id: string;
}

export class SubscriptionStatus implements ISubscriptionStatus {
    user_id: string = '';
    course_id: string = '';

    getSubscriptionStatus(course_id: string): boolean | Promise<boolean> {
        const user_id = localStorage.getItem("user_id");

        return axios.get(`${backendURI}/user/${user_id}/subscriptions/${course_id}/status`)
            .then(res => {
                console.log("Subscription status :>>", res.data.length);
                if (res.data.length != 0) return res.data;
                else
                    return false;
            })
            .catch(err => console.log("Error fetching subscription status :>>", err));
    }
}