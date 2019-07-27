import React, { FunctionComponent } from 'react';

import './style.css'

export interface SendMessageFormProps {

}

export const SendMessageForm: FunctionComponent<SendMessageFormProps> = ({  }) => {
    return (

        <div className="message-form">
            <label>
                <input type="text" placeholder="type your name" />
            </label>
            <button>submit</button>
        </div>

     )
}