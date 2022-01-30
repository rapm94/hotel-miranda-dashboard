import React, { useState } from "react";
import { 
    deleteAContact,
    deleteAllContacts,
    sortContacts,
    getAllContacts,
    contactSelector } from "../../reducers/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";


export const StyledReviewPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  min-width: 300px;
  height: 200px;
  margin: 10px auto;
  padding: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid ${(props) => props.theme.colors.border_grey_light};
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 16px 30px #00000014;
  }
`;

export const StyledDeleteReview = styled(TiDeleteOutline)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
`;

export const StyledPaginationReviews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledGreenRightIcon = styled(BsFillArrowRightSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.green_dark};
  backgroundColor: ${(props) => props.theme.colors.main_white};
  cursor: pointer;
`;

export const StyledGreenLeftIcon = styled(BsFillArrowLeftSquareFill)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.green_dark};
  cursor: pointer;
`;

export default function Contacts() {
  const myContact = useSelector(contactSelector);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const handleGoRight = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleGoLeft = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleDeleteReview = (contact) => {
    dispatch(deleteAContact(contact));
  };

  const handlePopUp = (contact) => {
    alert(contact.comment);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        {myContact.contact
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((contact) => (
            <StyledReviewPanel>
              <div>
                {contact.subject}
              </div>
              <div
                style={{ color: "#4E4E4E", lineHeight: "20px" }}
                onClick={() => handlePopUp(contact)}
              >
                {contact.comment}
              </div>
              <div style={{ color: "#4E4E4E", lineHeight: "20px" }}>
                {contact.date}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <img src={contact.photo} alt="" />
                <div>
                  <div style={{ color: "#262626", fontWeight: "600" }}>
                    {contact.customer}
                  </div>
                  <div style={{ color: "#799283", fontSize: "12px" }}>
                    {contact.mail}
                  </div>
                  <div style={{ color: "#799283", fontSize: "12px" }}>
                    {contact.phone}
                  </div>
                </div>
                <StyledDeleteReview
                  onClick={() => handleDeleteReview(contact)}
                />
              </div>
            </StyledReviewPanel>
          ))}
      </div>
      <StyledPaginationReviews style={currentPage === 1 ? {justifyContent: 'right'} : currentPage === Math.ceil(myContact.contact.length / postPerPage) ? {justifyContent: 'left'} : null}>
        {currentPage === 1 ? null : (
          <StyledGreenLeftIcon onClick={handleGoLeft} />
        )}
        {currentPage ===
        Math.ceil(myContact.contact.length / postPerPage) ? null : (
          <StyledGreenRightIcon onClick={handleGoRight} />
        )}
      </StyledPaginationReviews>
    </>
  );
}
