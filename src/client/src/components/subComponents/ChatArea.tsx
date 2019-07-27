import React, { Component } from 'react';
import {ChannelHeader} from "../ChatHeadingComponent/ChannelHeader";
import {ChannelMessages} from "../ChannelMessagesComponent/ChannelMessages";

import './ChatAreaStyle.css';
import {SendMessageForm} from "../SendMessageComponent/SendMessageForm";

export interface ChatAreaProps {

}

export interface ChatAreaState {

}

export class ChatArea extends Component<ChatAreaProps, ChatAreaState> {
    readonly state: ChatAreaState = {

    };
    public render() {
        return (
            <div className="chat-area">
                <ChannelHeader />
                <ChannelMessages />
                <SendMessageForm />
            </div>
         )
    }
}