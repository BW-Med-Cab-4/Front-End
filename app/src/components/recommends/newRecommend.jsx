import React, { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";

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
  const { userInput, setUserInput } = useContext(Context);
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
  };
  const editRecommend = (e) => {
    e.preventDefault();
    userInput.id
      ? axiosWithAuth()
          .put(
            `https://med-cab-user.herokuapp.com/api/inputs/${userInput.id}`,
            {
              userid: userid,
              input: userInput.input,
            }
          )
          .then((res) => {
            console.log("Recommend Changed", res);

            setUserInput(res.data.userInput);
            console.log(userInput);
          })
      : console.log("no id");
  };
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
          
              <input 

                name="input"
                value={userInput.input}
                onChange={onChangeHandler}
                type="text"
              />
              {/* <TextField
                placeholder={userInput.input}
                id="filled-basic"
                label="Type Here"
                variant="filled"
                onChange={onChangeHandler}
              /> */}
          <div id="submitEditButtonContainer">
          <Button color="primary" variant="contained" onClick={(e) => addNewRecommend(e)}>submit</Button>
          <Button
            variant="contained"
            color="secondary"
            id="editButton"
            onClick={(e) => editRecommend(e)}
          >
            Edit
          </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRecommend;
