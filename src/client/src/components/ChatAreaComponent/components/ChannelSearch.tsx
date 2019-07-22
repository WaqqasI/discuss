import React, { FunctionComponent } from 'react';

export interface ChannelSearchProps {

}

export const ChannelSearch: FunctionComponent<ChannelSearchProps> = ({  }) => {
    return (
        <>
            <input type="text" className="channel-search" />
            <button> Search </button>
        <>
     )
}