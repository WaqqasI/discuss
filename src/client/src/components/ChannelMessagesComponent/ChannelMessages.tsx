import React, { Component } from 'react';
import {MessagesList} from "./MessagesList";
import {SendMessageForm} from "../SendMessageComponent/SendMessageForm";

import './messages.css'

import './messages.css';

export interface ChannelMessagesProps {

}

export interface ChannelMessagesState {

}

export class ChannelMessages extends Component<ChannelMessagesProps, ChannelMessagesState> {
    readonly state: ChannelMessagesState = {

    };
    public render() {
        return (
            <div className={'channel-messages hyphens word-break'}>
                <MessagesList />

            </div>
         )
    }
}