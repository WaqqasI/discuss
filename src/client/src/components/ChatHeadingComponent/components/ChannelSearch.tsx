import React, { FunctionComponent } from 'react';

import './search.css'

export interface ChannelSearchProps {

}

export const ChannelSearch: FunctionComponent<ChannelSearchProps> = ({  }) => {
    return (
        <div className="channel-search">
            <label>
                <input type="text"  />
            </label>
            <button> Search </button>
        </div>
     )
}