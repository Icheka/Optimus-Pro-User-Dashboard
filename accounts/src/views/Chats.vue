<template>
    <div class="view-area">
        <div class="view-tagline">CHAT</div>
        <div class="messages-area">
            <div v-for="message in messages" :key="message.message_id">
                <div v-if="message.sender == 'admin'" class="border-1 border-danger">
                    <div class="received chat-msg text-black-50">
                        <div class="small">OPTIMUS PRO:<span class="float-right">{{ message.sent_at }}</span></div>
                        <div class="mt-3">
                            {{ message.body }}
                        </div>
                    </div>
                </div>
                <div v-else-if="message.sender == user_id" class="border-1 border-danger">
                    <div class="sent chat-msg text-white">
                        <div class="small">ME:<span class="float-right">{{ message.sent_at }}</span></div>
                        <div class="mt-3">
                            {{ message.body }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="input-area">
            <textarea @keyup.enter="sendMessage()" v-model="message" class="form-control" placeholder="Enter to send..." aria-placeholder="Enter to send..."></textarea>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .chat-msg {
        width: 100%;
        max-width: 400px;
        border-radius: 4px;
        background-color: red;
        margin: 14px;
        padding: 10px;
        clear: both;

        &.received {
            background-color: cyan;
            // position: absolute;
            // right: 10px;
        }

        &.sent {
            background-color: lightblue;
            float: right;
        }
    }

    .messages-area {
        height: 70vh;
        background-color: cadetblue;
        margin: 10px 0;
        padding: 8px 0;
        overflow-y: scroll;
    }

    .input-area textarea {
        resize: none;
        max-height: 50px;
        
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sendMessage, getMessages } from '../utils/endpoints';
import axios from 'axios';

@Component
export default class Chats extends Vue {
    message: string = '';
    messages: [] = [];
    user_id: string = localStorage.getItem('user_id')!;

    mounted() {
        this.getMessages();

        setInterval(() => {
            this.getMessages();
        }, 6000);
    }

    getMessages() {
        axios.get(`${getMessages}/${localStorage.getItem('user_id')}`)
            .then(res => {
                this.messages = res.data;
                console.log(res.data)
            })
            .catch(err => console.log("Error retrieving chats"));
    }

    sendMessage() {
        const X = new FormData();
        X.append('sender', localStorage.getItem('user_id')! as string);
        X.append('receiver', 'admin');
        X.append('body', this.message);

        this.message = '';

        axios.post(sendMessage, X)
        .then(res => this.getMessages())
        .catch(err => console.log(err));
    }
}
</script>