import React, { FunctionComponent } from 'react';

export interface AvatarProps {
    url: string;
    username: string;
}

export const Avatar: FunctionComponent<AvatarProps> = ({ url, username }) => {
    return (
        <>
            <img src={url} className={'avatar'}  alt={username}/>
        </>
     )
}