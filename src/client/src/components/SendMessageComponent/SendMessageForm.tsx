import React, {ChangeEvent, Component} from 'react';

import './style.css'

export interface SendMessageFormProps {
    onSubmit: (e: Event) => any;
    onChange: (e: ChangeEvent<HTMLInputElement>) => any;
    value: string;
}

export class SendMessageForm extends Component<SendMessageFormProps>  {
    render() {
        return (
            <div className="message-form">
                <form onSubmit={this.props.onSubmit} style={{height: '100%'}}>
                    <label>
                        <input type="text" placeholder="type stuff" onChange={this.props.onChange} value={this.props.value} />
                    </label>
                    <button>submit</button>
                </form>
            </div>
         )
    }
}