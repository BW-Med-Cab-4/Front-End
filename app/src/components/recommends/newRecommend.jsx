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
        <TextField>
        <input
          type="text"
          name="title"
          value={recommendToEdit.title}
          onChange={onChangeHandler}
          placeholder="title"
        />
        </TextField>
      </label>
        </Paper>
      </Grid>
      

      <Grid item xs={4}>
        <Paper className={classes.paper}>
        <label>
        Favorite Flavor:
        <Select value={recommendToEdit.flavor} onChange={onChangeHandler}>
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
          name="types"
          value={recommendToEdit.types}
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
        <Select value={recommendToEdit.ailments} onChange={onChangeHandler}>
          <MenuItem value="ailments">Grapefruit</MenuItem>
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
        <Select value={recommendToEdit.effects1} onChange={onChangeHandler}>
          <MenuItem value="effects">Grapefruit</MenuItem>
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
        <Select value={recommendToEdit.effects2} onChange={onChangeHandler}>
          <MenuItem value="effects">Grapefruit</MenuItem>
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
        <Select value={recommendToEdit.effects3} onChange={onChangeHandler}>
          <MenuItem value="effects">Grapefruit</MenuItem>
          <MenuItem value="grapefruit">Grapefruit</MenuItem>
          <MenuItem value="lime">Lime</MenuItem>
          <MenuItem value="coconut">Coconut</MenuItem>
          <MenuItem value="mango">Mango</MenuItem>
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
