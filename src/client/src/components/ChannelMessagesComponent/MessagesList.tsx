import React, { FunctionComponent } from 'react';
import {Message} from "./components/Message";

export interface MessagesListProps {

}

export const MessagesList: FunctionComponent<MessagesListProps> = ({  }) => {
    return (
        <>
            <ul>
                <Message />
            </ul>
        </>
     )
}