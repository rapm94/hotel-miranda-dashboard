import React from 'react'
import styled from "styled-components";
import { BiBed, BiLogIn, BiLogOut } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { Calendar } from "../Calendar";
import { BarChart } from "../BarChart";

const StyledGrid = styled.div`
  height: 140%;
  width: 92.5%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto auto auto auto auto auto;
  grid-gap: 20px;
  justify-content: space-between;
`;


const StyledKpi = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 200px;
  min-height: 125px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  width: 100%;
  margin-top: 40px
`;

const StyledKpiData = styled.div``;

const StyledIconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  padding: 8px;
  margin: 0 22px 0 30px;
  background-color: ${(props) => props.theme.lightRed};
  border-radius: 8px;
  color: ${(props) => props.theme.errorColor};
  font-size: 30px;
  &:hover {
    background-color: ${(props) => props.theme.errorColor};
    color: ${(props) => props.theme.lightRed};
  }
`;

export const StyledBigPanel = styled.div`
  min-height: 513px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
`;

export default function Dashboard() {
  return (
    <StyledGrid>
      <StyledKpi >
        <StyledIconBackground>
          <BiBed />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>
            10
          </div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            New Booking
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi>
        <StyledIconBackground>
          <BsCalendarCheck />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>350</div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Scheduled Room
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi>
        <StyledIconBackground>
          <BiLogIn />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>753</div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Check In
          </div>
        </StyledKpiData>
      </StyledKpi>
      <StyledKpi >
        <StyledIconBackground>
          <BiLogOut />
        </StyledIconBackground>
        <StyledKpiData>
          <div style={{ font: "normal normal 600 30px/46px Poppins" }}>516</div>
          <div
            style={{
              font: "normal normal 300 14px/21px Poppins",
              letterSpacing: "0px",
              color: "#787878",
            }}
          >
            Check Out
          </div>
        </StyledKpiData>
      </StyledKpi>

      <StyledBigPanel
        style={{
          gridColumnStart: "1",
          gridColumnEnd: "3",
          gridRowStart: "2",
          gridRowEnd: "4",
        }}
      >
        <Calendar />
      </StyledBigPanel>
      <StyledBigPanel
        style={{
          gridColumnStart: "3",
          gridColumnEnd: "5",
          gridRowStart: "2",
          gridRowEnd: "4",
        }}
      >
        <BarChart />
      </StyledBigPanel>

      <StyledBigPanel
        style={{
          minHeight: "433px",
          gridColumnStart: "1",
          gridColumnEnd: "5",
          gridRowStart: "4",
          gridRowEnd: "5",
        }}
      >
        Latest Review by Customers
      </StyledBigPanel>
     
    </StyledGrid>
   
  );
}