import React, { useState, useContext } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Context } from "../utils/Context";

// Material UI Imports
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    marginTop: '2rem'
  },
}));



const NewRecommend = (props) => {
  const { getData } = useContext(Context);

  const [recommendToEdit, setRecommendToEdit] = useState({
    id: "1",
    user_id: "2",
    title: "",
    flavor: "",
    types: "",
    ailments: "",
    effects1: "",
    effects2: "",
    effects3: "",
  });

  // Web API POST request

  const addNewRecommend = (e) => {
    e.preventDefault();
    axios
      .post(`https://reqres.in/api/users`, {})
      .then((res) => {
        console.log("Added New Recoomsend", res);
        getData();
        alert("New Recommend Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   setRecommendToEdit({
  //     title: recommendToEdit.title,
  //     insomnia: recommendToEdit.insomnia,
  //   });
  //   console.log(recommendToEdit);
  // };
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

    <div className="newRecommend">
    <h3>How do you feel today?</h3>
    <form onSubmit={addNewRecommend}>

    <div className='menuItemContainer'>
      

      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <label>
        Favorite Flavor:
        <Select value={recommendToEdit.flavor} onChange={onChangeHandler}>
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
          name="types"
          value={recommendToEdit.types}
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
        <Select value={recommendToEdit.ailments} onChange={onChangeHandler}>
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
        <Select value={recommendToEdit.effects1} onChange={onChangeHandler}>
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

      </div>

      <Button variant="contained" color="primary" id="addButton" type="submit">
        Add Recommend
      </Button>

    </form>

  </div>
  );
  
};

export default NewRecommend;
