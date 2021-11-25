import React from 'react'
import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    height: 1592px;
    width: 100%;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 50px;
`

const StyledKpi = styled.div`
background-color: ${(props) => props.theme.bgColor};
box-shadow: 0px 4px 4px #00000005;
border-radius: 12px;
width: 340px;
height: 125px;
`

export default function Dashboard() {
    return (
        <StyledGrid>
            <StyledKpi>
                KPI1
            </StyledKpi>
            <StyledKpi>
                KPI2
            </StyledKpi>
            <StyledKpi>
                KPI3
            </StyledKpi>
            <StyledKpi>
                KPI4
            </StyledKpi>
        </StyledGrid>
    )
}