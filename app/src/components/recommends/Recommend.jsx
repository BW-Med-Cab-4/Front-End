import React from "react";
import styled from "styled-components";
import EditRecommend from "./EditRecommend";

// Material UI Imports
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

function Recommend(props) {
  const { recommend } = props;

  return (
    <div>
      {" "}
      <div>
        <Card>
          <div>
            <p>X</p>
            <EditRecommend />
          </div>

          <div className="editDeleteButtonContainer">
            <Button variant="contained" color="primary" id="editButton">
              Edit
            </Button>
            <Button variant="contained" color="primary" id="deleteButton">
              Delete
            </Button>
          </div>
        </Card>
        <button id="deleteButton">Delete</button>
      </div>
      <h2>
        <span>Strain:</span> {recommend.strain}
      </h2>
      <p>
        <span>Content:</span> {recommend.description}
      </p>
      <p>
        <span>Content:</span> {recommend.rating}
      </p>
    </div>
  );
}

export default Recommend;
