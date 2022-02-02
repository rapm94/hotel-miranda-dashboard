import React from 'react';


export interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

export interface IUser {
    password: string;
    email: string;
    token: string;
}

