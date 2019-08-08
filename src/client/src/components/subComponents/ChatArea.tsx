import React, {ChangeEvent, Component} from 'react';
import {ChannelHeader} from "../ChatHeadingComponent/ChannelHeader";
import {ChannelMessages} from "../ChannelMessagesComponent/ChannelMessages";
import * as _ from 'lodash/fp';
import './ChatAreaStyle.css';
import {SendMessageForm} from "../SendMessageComponent/SendMessageForm";
import {Message} from "../ChannelMessagesComponent/components/Message";

export interface ChatAreaProps {

}

export interface ChatAreaState {
    newMessages: Message[];
    value: string;
}

export class ChatArea extends Component<ChatAreaProps, ChatAreaState> {
    constructor(props) {
        super(props);
    }
    readonly state: ChatAreaState = {
        newMessages: [],
        value: ''
    };
    onSubmit = (e: Event) => {
        e.preventDefault();
        if (value.length <= 1) return;
        const changedMessages = [...this.state.newMessages, <Message content={this.state.value} username={'aaaaa'}/>]
        this.setState({newMessages: changedMessages, value: ''})
    };
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value =  e.target.value;
        this.setState({value});
    };
    public render() {
        return (
            <div className="chat-area">
                <ChannelHeader />
                <ChannelMessages messages={this.state.newMessages}/>
                <SendMessageForm onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.value}/>
            </div>
         )
    }
}