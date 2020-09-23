import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import { Context } from "../utils/Context";

// Material UI Imports
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
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
  const { getData, recommendList, setRecommendList } = useContext(Context);
  const userid = window.localStorage.getItem("id");

  const [recommendToEdit, setRecommendToEdit] = useState({
    kind: "Hybrid",
    ailment: "Insomnia",
    effect: "Happy",
    flavor: "Blueberry",
  });

  // Web API POST request

  const addNewRecommend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://medical-cannabis.herokuapp.com/predict`, recommendToEdit)
      .then((res) => {
        console.log("Added New Recommend", res);
        axiosWithAuth()
          .post(`https://med-cab-user.herokuapp.com/api/recommendations`, {
            userid: userid,
            strain: res.data.prediction,
            description: res.data.description,
            rating: res.data.rating,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        // getData();
      })
      .catch((err) => {
        console.log(err);
      });
    // .finally(() => {
    //   setRecommendToEdit({
    //     id: "1",
    //     userid: "2",
    //     flavor: "",
    //     types: "",
    //     ailment: "",
    //     effect: "",
    //     prediction: "",
    //     description: "",
    //     raiting: "",
    //   });
    // });
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecommendToEdit({
      ...recommendToEdit,
      [name]: value,
    });
    console.log(recommendToEdit);
  };

  const classes = useStyles();

  return (
    <div>
      <div className="newRecommend">
        <h3>How do you feel today?</h3>
        <form onSubmit={addNewRecommend}>
          <div className="menuItemContainer">
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <label>
                  Favorite Flavor:
                  <Select
                    value={recommendToEdit.flavor}
                    onChange={onChangeHandler}
                  >
                    <MenuItem value="grapefruit">Grapefruit</MenuItem>
                    <MenuItem value="lime">Lime</MenuItem>
                    <MenuItem value="coconut">Coconut</MenuItem>
                    <MenuItem value="mango">Mango</MenuItem>
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
                    value={recommendToEdit.kind}
                    onChange={onChangeHandler}
                  >
                    <MenuItem value="">types</MenuItem>
                    <MenuItem value="lime">Lime</MenuItem>
                    <MenuItem value="coconut">Coconut</MenuItem>
                    <MenuItem value="jello">jello</MenuItem>
                  </Select>
                </label>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <label>
                  Ailment:
                  <Select
                    value={recommendToEdit.ailment}
                    onChange={onChangeHandler}
                  >
                    <MenuItem value="ailment">Grapefruit</MenuItem>
                    <MenuItem value="lime">Lime</MenuItem>
                    <MenuItem value="coconut">Coconut</MenuItem>
                    <MenuItem value="mango">Mango</MenuItem>
                  </Select>
                </label>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <label>
                  Effects:
                  <Select
                    value={recommendToEdit.effect}
                    onChange={onChangeHandler}
                  >
                    <MenuItem value="effect">Grapefruit</MenuItem>
                    <MenuItem value="lime">Lime</MenuItem>
                    <MenuItem value="coconut">Coconut</MenuItem>
                    <MenuItem value="mango">Mango</MenuItem>
                  </Select>
                </label>
              </Paper>
            </Grid>
          </div>

          <Button
            variant="contained"
            color="primary"
            id="addButton"
            type="submit"
          >
            Add Recommend
          </Button>
        </form>
      </div>
      {/* <h3>How do you feel today?</h3>
      <form onSubmit={addNewRecommend}>
        <label>
          Favorite Flavor:
          <select value={recommendToEdit.flavor} onChange={onChangeHandler}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Type:
          <select
            name="types"
            value={recommendToEdit.type}
            onChange={onChangeHandler}
          >
            <option value="">types</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="jello">jello</option>
          </select>
        </label>
        <label>
          Ailment:
          <select value={recommendToEdit.ailment} onChange={onChangeHandler}>
            <option value="ailments">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Effects:
          <select value={recommendToEdit.effects} onChange={onChangeHandler}>
            <option value="effects">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <button id="addButton" type="submit">
          Add Recommend
        </button>
      </form> */}
    </div>
  );
};

export default NewRecommend;
