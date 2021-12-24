import React from 'react';


interface IProps {
    children: React.ReactNode | React.ReactNode[];
}

interface IUser {
    userName: string;
    password: string;
    email: string;
}



export {
    IProps,
    IUser
};