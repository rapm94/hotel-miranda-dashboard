

import styled from 'styled-components'

export default styled.button`
    background : ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : '#EEF9F2'};
    border: none;
    border-radius: 12px;
    width: 120px;
    height: 45px;
    color: ${props => props.archive ? '#E23428' : props.notes ? '#212121' : props.contact ? '#135846' : '#FFFFFF'};
    font: normal normal normal 14px/21px Poppins;
    font-weight: ${props => props.weight};
    cursor: pointer;
    &:hover{
    }
`