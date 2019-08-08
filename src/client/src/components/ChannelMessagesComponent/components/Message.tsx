import React, { FunctionComponent } from 'react';
import {MessageHeading} from "./MessageHeading";
import {MessageContent} from "./MessageContent";

import './message-style.css'

export interface MessageProps {
    content: string;
    username: string;
}

export const Message: FunctionComponent<MessageProps> = ({ content, username }) => {

    return (
        <>
            <li className={'message'}>
                <MessageHeading username={username} date={new Date()}/>
                <MessageContent content={content} />
            </li>
            <hr />
        </>
     )
}