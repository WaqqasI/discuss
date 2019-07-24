import React, { FunctionComponent } from 'react';
import {MessageHeading} from "./MessageHeading";
import {MessageContent} from "./MessageContent";

export interface MessageProps {

}

export const Message: FunctionComponent<MessageProps> = ({  }) => {
    const lorem = 'lorem deleniti dicta earum eligendi eum exercitationem illo, labore nam nulla officia quo rem sit suscipit veniam. Adipisci,'
    return (
        <>
            <li className={'message'}>
                <MessageHeading username={'test'} date={new Date()}/>
                <MessageContent content={lorem} />
            </li>
        </>
     )
}