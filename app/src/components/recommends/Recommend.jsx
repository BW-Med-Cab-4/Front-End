import React from "react";
import styled from "styled-components";

function Recommend(props) {
  const { recommend } = props;

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
        <div className="card">
          <p>{recommend.email}</p>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    </StyledForm>
  );
}

export default Recommend;
