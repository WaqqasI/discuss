import React, { FunctionComponent, ReactElement } from 'react';
import {Message} from "./components/Message";

export interface MessagesListProps {
    messages: Message[];
}

export const MessagesList: FunctionComponent<MessagesListProps> = ({ messages }) => {
    return (
        <>
            <ul>
                { messages }
            </ul>
        </>
     )
}