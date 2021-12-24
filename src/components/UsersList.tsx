import React from 'react'
import {Users} from '../data/users'
import { StyledData, StyledHeader, StyledTable } from './BookingList'

export function UsersList() {
    return (
    <StyledTable className='data-table'>
            <StyledHeader className='header-table'>
                <th className='header-table-sector'>Id</th>
                <th className='header-table-sector'>Name</th>
                <th className='header-table-sector'>Mail</th>
                <th className='header-table-sector'>Hash</th>
            </StyledHeader>
            {Users.map(user => (
                <StyledData className='data-card'>
                    <td className='data-element'>{user.id}</td>
                    <td className='data-element'>{user.name}</td>
                    <td className='data-element'>{user.mail}</td>
                    <td className='data-element'>{user.hash}</td>
                </StyledData>
            ))}
    </StyledTable>
    )
}