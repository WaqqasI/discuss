import React, {Component, createRef} from 'react';
import {MessagesList} from "./MessagesList";
import {SendMessageForm} from "../SendMessageComponent/SendMessageForm";


import './messages.css';
import {Message} from "./components/Message";

export interface ChannelMessagesProps {
    messages: Message[];
}

export interface ChannelMessagesState {

}

export class ChannelMessages extends Component<ChannelMessagesProps, ChannelMessagesState> {
    readonly state: ChannelMessagesState = {

    };
    private readonly overflowBox = createRef<HTMLDivElement>();

    constructor(props) {
        super(props);
    }

    componentDidUpdate(): void {
        const { current } = this.overflowBox;
        if (!current) return;
        current.scrollTop = current.scrollHeight;
    }

    public render() {
        return (
            <div className={'channel-messages hyphens word-break'} ref={this.overflowBox} >
                <MessagesList messages={this.props.messages}/>
            </div>
         )
    }
}