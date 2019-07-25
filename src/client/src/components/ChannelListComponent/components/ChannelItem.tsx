import React, { FunctionComponent } from 'react';

export interface ChannelItemProps {
    name: string;
}

export const ChannelItem: FunctionComponent<ChannelItemProps> = ({ name }) => {
    return (
        <>
            <li>
                { name }
            </li>
        </>
     )
}