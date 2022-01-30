import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../reducers/usersSlice";
import styled from "styled-components";
import Button from "../Button";
import { RiArrowGoBackFill } from "react-icons/ri";
import {
  StyledNewRoomPanel,
  StyledForm,
  StyledNewRoomInput,
  StyledTextArea,
  StyledNewRoomSubmit,
} from "./newRoom";
import { StyledDivColumn, StyledDivRow } from "./booking-details";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledBigPanelHeader = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.letter_grey_dark};
`;

const NewUser: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();

const initialState = {
  photo: "",
  name: "",
  job: "",
  id: "",
  mail: "",
  phone: "",
  status: 'inactive',
  jobDescription: "",
}

  const [newUser, setNewUser] = useState(initialState);

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newUser));
    setNewUser(initialState);
  };

  return (
    <div style={{ width: "1000px" }}>
      <StyledNewRoomPanel style={{ minHeight: "500px" }}>
        <StyledBigPanelHeader style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ textAlign: "left" }}>NEW USER</div>
          <StyledLink to="/users">
            <Button style={{width: '50px', backgroundColor: "#135846" }}>
              <RiArrowGoBackFill />
            </Button>
          </StyledLink>
        </StyledBigPanelHeader>

        <StyledForm
          id="newUserForm"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleNewUserSubmit}
        >
          <StyledDivRow>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Photo URL"
                onChange={(e) =>
                  setNewUser({ ...newUser, photo: e.target.value })
                }
              />
              <StyledNewRoomInput
                type="text"
                placeholder="Full Name"
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Start Date"
                  style={{ width: "180px" }}
                  onChange={(e) =>
                    setNewUser(oldProp => ({ ...oldProp, startDate: e.target.value }))
                  }
                />
                <StyledNewRoomInput
                  type="text"
                  placeholder="End Date"
                  style={{ width: "180px" }}
                  onChange={(e) =>
                    setNewUser(oldProp => ({ ...oldProp, endDate: e.target.value }))
                  }
                />
              </StyledDivRow>
              <StyledNewRoomInput
                type="text"
                placeholder="Email"
                onChange={(e) =>
                  setNewUser({ ...newUser, mail: e.target.value })
                }
              />
              <StyledDivRow>
                <StyledNewRoomInput
                  type="text"
                  placeholder="Phone"
                  style={{ width: "180px" }}
                  onChange={(e) =>
                    setNewUser({ ...newUser, phone: e.target.value })
                  }
                />
                <StyledNewRoomInput
                  type="text"
                  placeholder="ID"
                  style={{ width: "180px" }}
                  onChange={(e) =>
                    setNewUser({ ...newUser, id: e.target.value })
                  }
                />
              </StyledDivRow>
            </StyledDivColumn>
            <StyledDivColumn>
              <StyledNewRoomInput
                type="text"
                placeholder="Job Desk"
                onChange={(e) =>
                  setNewUser({ ...newUser, job: e.target.value })
                }
              />
              <StyledTextArea
                placeholder="Job Description"
                style={{ height: "100%" }}
                onChange={(e) =>
                  setNewUser({ ...newUser, jobDescription: e.target.value })
                }
              ></StyledTextArea>
            </StyledDivColumn>
          </StyledDivRow>
          <StyledDivRow
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <StyledNewRoomSubmit type="submit" value="Add User" />
          </StyledDivRow>
        </StyledForm>
      </StyledNewRoomPanel>
    </div>
  );
}

export default NewUser;