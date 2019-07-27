import { FunctionComponent } from 'react';
import * as React from "react";

import './style.css'

export interface NavHeaderProps {
    channel: string;
}

export const NavHeader: FunctionComponent<NavHeaderProps> = ({ channel }) => {
    return (
        <>
            <h1> # {channel} </h1>
        </>
     )
}