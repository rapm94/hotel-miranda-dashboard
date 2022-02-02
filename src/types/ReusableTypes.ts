import React from 'react';


export interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

export interface IUser {
    userName: string;
    password: string;
    email: string;
    token: string;
}

