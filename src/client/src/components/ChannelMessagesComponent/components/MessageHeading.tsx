import React, { FunctionComponent } from 'react';

import './date.css'

export interface MessageHeadingProps {
    username: string;
    date: Date;
}

export const MessageHeading: FunctionComponent<MessageHeadingProps> = ({ username, date }) => {
    return (
        <>
            <h3>
                {username}
                <span className={"date"}> {date.getTime()} </span>
            </h3>
        </>
     )
}