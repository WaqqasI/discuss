import React, { FunctionComponent } from 'react';
import {ChannelSearch} from "./components/ChannelSearch";

import './style.css'

export interface ChannelHeaderProps {

}

export const ChannelHeader: FunctionComponent<ChannelHeaderProps> = ({  }) => {
    return (
        <div className={'channel-header'}>
            <h1># Channel</h1>
            <ChannelSearch />
        </div>
     )
}