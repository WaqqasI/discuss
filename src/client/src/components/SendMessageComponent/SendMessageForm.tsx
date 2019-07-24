import React, { FunctionComponent } from 'react';

export interface SendMessageFormProps {

}

export const SendMessageForm: FunctionComponent<SendMessageFormProps> = ({  }) => {
    return (

        <div className="typing">
            <label>
                <input type="text" placeholder="type your name" />
            </label>
            <button>submit</button>
        </div>

     )
}