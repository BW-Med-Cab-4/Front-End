import React from "react";
import styled from "styled-components";
import EditRecommend from "./EditRecommend";

// Material UI Imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'


function Recommend(props) {
  const { recommend } = props;

  const openModal = (e) => {
    e.preventDefault();
    const modal = document.querySelector("#modalTest");
    const editbutton = document.querySelector("#editButton");
    const deletebutton = document.querySelector("#deleteButton");
    modal.classList.add("open-modal");
    editbutton.classList.add("hide-button");
    deletebutton.classList.add("hide-button");
  };

  const closeModal = () => {
    const modal = document.querySelector("#modalTest");
    const editbutton = document.querySelector("#editButton");
    const deletebutton = document.querySelector("#deleteButton");
    modal.classList.remove("open-modal");
    editbutton.classList.remove("hide-button");
    deletebutton.classList.remove("hide-button");
  };

  const StyledForm = styled.div`
    .cardBox {
      display: flex;
      align-items: center;
      justify-content: center;
      .card {
        margin-top: 3rem;
        background-color: cornsilk;
        width: 50%;
        border-radius: 2rem;
        p {
          font-size: 2rem;
          color: black;
        }
        button {
          margin-bottom: 1rem;
        }
      }
    }
  `;

  return (
    <StyledForm>
      <div className="cardBox">
        <Card className="card">
          <Button variant="contained" color="primary" id="editButton" onClick={openModal}>
            Edit
          </Button>
          <div id="modalTest">
            <p className="exit" onClick={closeModal}>
              X
            </p>
            <EditRecommend />
          </div>
          <Button variant="contained" color="primary" id="deleteButton">Delete</Button>
        </Card>
      </div>
    </StyledForm>
  );
}

export default Recommend;
