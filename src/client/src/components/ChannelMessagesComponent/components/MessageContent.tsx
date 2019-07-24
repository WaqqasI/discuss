import React, { FunctionComponent } from 'react';

export interface MessageContentProps {
    content: string;
}

export const MessageContent: FunctionComponent<MessageContentProps> = ({ content }) => {
    return (
        <>
            <p className={'message-content'}>
                {content}
            </p>
        </>
     )
}