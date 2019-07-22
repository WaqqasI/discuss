import React, { FunctionComponent } from 'react';

export interface ChannelSearchProps {

}

export const ChannelSearch: FunctionComponent<ChannelSearchProps> = ({  }) => {
    return (
        <>
            <label>
                <input type="text" className="channel-search" />
            </label>
            <button> Search </button>
        <>
     )
}