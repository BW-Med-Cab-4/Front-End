import React, { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";
import "../styles/recommendstyles.css";

// Material UI Imports

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    marginTop: "2rem",
  },
}));

const NewRecommend = (props) => {
  const { userInput, setUserInput, getData } = useContext(Context);
  const userid = window.localStorage.getItem("id");

  // Web API POST request

  const addNewRecommend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://medical-cannabis.herokuapp.com/predict`, userInput)
      .then((res) => {
        console.log("Added New Recommend", res);
        axiosWithAuth()
          .post(`https://med-cab-user.herokuapp.com/api/recommendations`, {
            userid: userid,
            strain: res.data.prediction,
            description: res.data.description,
            rating: res.data.rating,
            effect: res.data.effect,
            flavor: res.data.flavor,
          })
          .then((res) => {
            console.log(res);
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
        // getData();
        console.log(userInput);
        userInput.id
          ? axiosWithAuth()
              .put(
                `https://med-cab-user.herokuapp.com/api/inputs/${userInput.id}`,
                userInput
              )
              .then((res) => {
                console.log("it worked", res);
                // res.data.length > 0 ? setUserInput(res.data) : console.log("no data");
                getData();
              })
              .catch((err) => {
                console.log(err);
              })
          : axiosWithAuth()
              .post(`https://med-cab-user.herokuapp.com/api/inputs`, userInput)
              .then((res) => {
                console.log("it worked", res);
              })
              .catch((err) => {
                console.log(err);
              });
      });
    getData();
  };
  // const editRecommend = (e) => {
  //   e.preventDefault();
  //   userInput.id
  //     ? axiosWithAuth()
  //         .put(
  //           `https://med-cab-user.herokuapp.com/api/inputs/${userInput.id}`,
  //           {
  //             userid: userid,
  //             ailment: userInput.ailment,
  //           }
  //         )
  //         .then((res) => {
  //           console.log("Recommend Changed", res);

  //           setUserInput(res.data.userInput);
  //           console.log(userInput);
  //         })
  //     : console.log("no id");
  // };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };
  const classes = useStyles();

  return (
    <div className="newRecommend">
      <h3 id="howDoYouFeelHeader">How do you feel today?</h3>
      <form>
        <div className="formSubmissionContainer">
          <div className="menuItemContainer">
            <input
              size="100"
              name="ailment"
              value={userInput.ailment}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
        </div>
        <div id="submitEditButtonContainer">
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => addNewRecommend(e)}
          >
            submit
          </Button>

          <Button onClick={(e) => addNewRecommend(e)}>submit</Button>

          <p>Example: "I'm feeling anxious and tired."</p>
        </div>
      </form>
    </div>
  );
};

export default NewRecommend;
