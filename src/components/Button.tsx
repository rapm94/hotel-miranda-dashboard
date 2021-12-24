

import styled from 'styled-components'


interface ButtonProps {
    checkIn?: boolean
    checkOut?: boolean
    inProgress?: boolean
    archive?: boolean
    notes?: boolean
    contact?: boolean
    weight?: string
}

export default styled.button<ButtonProps>`
    background : ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : '#EEF9F2'};
    border: none;
    borderRadius: 12px;
    width: 120px;
    height: 45px;
    color: ${props => props.archive ? '#E23428' : props.notes ? '#212121' : props.contact ? '#135846' : '#FFFFFF'};
    font: normal normal normal 14px/21px Poppins;
    fontWeight: ${props => props.weight};
    cursor: pointer;
    &:hover{
    }
`