import React, { FunctionComponent } from 'react';

import './date.css'
import {Avatar} from "./Avatar";

export interface MessageHeadingProps {
    username: string;
    date: Date;
}

export const MessageHeading: FunctionComponent<MessageHeadingProps> = ({ username, date }) => {
    return (
        <div className={'message-head'}>
            <div className={'message-heading-part'}>
                <Avatar url={'https://api.adorable.io/avatars/44/test@discuss.glitch.me'} username={'test'}/>
            </div>
            <div className={'message-heading-part'}>
                <p className={'message-user'}>
                    {username}
                </p>
                <p className={"date"}> {date.toUTCString()} </p>
            </div>
        </div>
     )
}