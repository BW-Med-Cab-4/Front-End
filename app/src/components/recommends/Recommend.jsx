import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";
// Material UI Imports
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// Material UI Imports

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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

function Recommend(props) {
  const { recommend } = props;
  const { userInput, setUserInput, getData, userid } = useContext(Context);
  const [editing, setEditing] = useState(false);

  const editRecommended = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://medical-cannabis.herokuapp.com/predict`, {
        ailment: userInput.ailment,
      })
      .then((res) => {
        console.log("Added New Recommend", res);
        axiosWithAuth()
          .put(
            `https://med-cab-user.herokuapp.com/api/recommendations/${recommend.id}`,
            {
              userid: userid,
              strain: res.data.prediction,
              description: res.data.description,
              rating: res.data.rating,
            }
          )
          .then((res) => {
            getData();
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
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  // Web API DELETE request
  const deletePost = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(
        `https://med-cab-user.herokuapp.com/api/recommendations/${recommend.id}`
      )
      .then((res) => {
        console.log("Recommend Deleted", res);
        getData();
      })
      .catch((err) => {
        getData();
        console.log(err);
      });
  };
  const classes = useStyles();
  return (
    <div>
      <div>
        <Card>
          <div>
            <p>X</p>
          </div>

          <h2>
            <span>Strain:</span> {recommend.strain}
          </h2>
          <p>
            <span>Desciption:</span> {recommend.description}
          </p>
          <p>
            <span>Rating:</span> {recommend.rating}
          </p>
          <p>number: {recommend.id}</p>
          <p>number: {recommend.effect}</p>
          <button onClick={() => setEditing(true)}>EDIT</button>
          {editing && (
            <form onSubmit={editRecommended}>
              <div className="menuItemContainer">
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    <label>
                      Favorite Flavor:
                      <Select name="flavor" onChange={onChangeHandler}>
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
                      <Select name="type" onChange={onChangeHandler}>
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
                        <MenuItem value="Lack of Appetite">
                          Lack of Appetite
                        </MenuItem>
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
                      <Select name="effect" onChange={onChangeHandler}>
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
                <button>submit</button>
              </div>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
          )}

          {/* <button>submit</button> */}
          <div className="editDeleteButtonContainer">
            <Button
              onClick={(e) => deletePost(e)}
              variant="contained"
              color="primary"
              id="deleteButton"
            >
              Delete
            </Button>
          </div>
        </Card>
        <button id="deleteButton">Delete</button>
      </div>
    </div>
  );
}

export default Recommend;
