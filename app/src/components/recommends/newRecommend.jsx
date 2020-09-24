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
          <input name="input" value={userInput.input} />

          <div className="menuItemContainer">
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <input
                  name="ailment"
                  value={userInput.ailment}
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
              </Paper>
            </Grid>
            <div id="submitEditButtonContainer">
              <Button
                color="primary"
                variant="contained"
                onClick={(e) => addNewRecommend(e)}
              >
                submit
              </Button>

              <Button onClick={(e) => addNewRecommend(e)}>submit</Button>
              {/* <Button

            variant="contained"
            color="secondary"
            id="editButton"
            onClick={(e) => editRecommend(e)}
          >

            Edit
          </Button>
          </div>

            Edit this Edit
          </Button> */}
              {/* <Grid item xs={4}>
            <Paper className={classes.paper}>
              <label>
                Favorite Flavor:
                <Select
                  name="flavor"
                  value={userInput.flavor}
                  onChange={onChangeHandler}
                >
                  <MenuItem value="Citrus">Citrus</MenuItem>
                  <MenuItem value="Sweet">Sweet</MenuItem>
                  <MenuItem value="Earthy">Earthy</MenuItem>
                  <MenuItem value="Skunk">Skunk</MenuItem>
                  <MenuItem value="Berry">Berry</MenuItem>
                  <MenuItem value="Lemon">Lemon</MenuItem>
                  <MenuItem value="Lime">Lime</MenuItem>
                  <MenuItem value="Blueberry">Blueberry</MenuItem>
                  <MenuItem value="Strawberry">Strawberry</MenuItem>
                  <MenuItem value="Mango">Mango</MenuItem>
                  <MenuItem value="Rose">Rose</MenuItem>
                  <MenuItem value="Pepper">Pepper</MenuItem>
                </Select>
              </label>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <label>
                Type:
                <Select
                  name="type"
                  value={userInput.type}
                  onChange={onChangeHandler}
                >
                  <MenuItem value="Sativa">Sativa</MenuItem>
                  <MenuItem value="Indica">Indica</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                </Select>
              </label>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <label>
                Ailment:
                <Select
                  name="ailment"
                  value={userInput.ailment}
                  onChange={onChangeHandler}
                >
                  <MenuItem value="Depression">Depression</MenuItem>
                  <MenuItem value="Pain">Pain</MenuItem>
                  <MenuItem value="Insomnia">Insomnia</MenuItem>
                  <MenuItem value="Stress">Stress</MenuItem>
                  <MenuItem value="Lack of Appetite">Lack of Appetite</MenuItem>
                  <MenuItem value="Muscle Spasms">Muscle Spasms</MenuItem>
                  <MenuItem value="Inflammation">Inflammation</MenuItem>
                  <MenuItem value="Nausea">Nausea</MenuItem>
                </Select>
              </label>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <label>
                Effects:
                <Select
                  name="effect"
                  value={userInput.effect}
                  onChange={onChangeHandler}
                >
                  <MenuItem value="Relaxed">Relaxed</MenuItem>
                  <MenuItem value="Happy">Happy</MenuItem>
                  <MenuItem value="Euphoric">Euphoric</MenuItem>
                  <MenuItem value="Uplifted">Uplifted</MenuItem>
                  <MenuItem value="Sleepy">Sleepy</MenuItem>
                  <MenuItem value="Dry Mouth">Dry Mouth</MenuItem>
                  <MenuItem value="Focused">Focused</MenuItem>
                  <MenuItem value="Energetic">Energetic</MenuItem>
                  <MenuItem value="Paranoid">Paranoid</MenuItem>
                  <MenuItem value="Anxious">Anxious</MenuItem>
                  <MenuItem value="Hungry">Hungry</MenuItem>
                  <MenuItem value="Talkative">Talkative</MenuItem>
                  <MenuItem value="Creative">Creative</MenuItem>
                </Select>
              </label>
            </Paper>
          </Grid>
           */}
            </div>
          </div>
        </div>
        y
      </form>
    </div>
  );
};

export default NewRecommend;
