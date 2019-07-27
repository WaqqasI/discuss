import React, { Component } from 'react';
import {NavHeader} from "../NavHeaderComponent/NavHeader";
import {ChannelList} from "../ChannelListComponent/ChannelList";
import {NavFooter} from "../NavFooterComponent/NavFooter";

import './NavigationStyle.css';

export interface NavigationProps {

}

export interface NavigationState {

}

export class Navigation extends Component<NavigationProps, NavigationState> {
    readonly state: NavigationState = {

    };
    public render() {
        return (
            <div className={'nav'}>
                <NavHeader channel={'channel'}/>
                <ChannelList />
                <NavFooter />
            </div>
         )
    }
}