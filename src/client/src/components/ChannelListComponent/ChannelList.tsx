import React, { FunctionComponent } from 'react';
import {ChannelItem} from "./components/ChannelItem";

export interface ChannelListProps {

}

export const ChannelList: FunctionComponent<ChannelListProps> = ({  }) => {
    return (
        <>
            <ul>
                <ChannelItem name={'test'} />
            </ul>
        </>
     )
}