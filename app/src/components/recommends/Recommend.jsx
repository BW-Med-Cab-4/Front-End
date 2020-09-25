import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";
// Material UI Imports
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

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
        console.log(recommend, "reses");
        setEditing(false);
        axiosWithAuth()
          .put(
            `https://med-cab-user.herokuapp.com/api/recommendations/${recommend.id}`,
            {
              userid: userid,
              strain: res.data.prediction,
              description: res.data.description,
              rating: res.data.rating,
              effect: res.data.effects,
              flavor: res.data.flavors,
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
                console.log("it works", res);
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

  return (
    <div id="recommendCards">
      <div>
        <Card id="strainDescriptionCard">
          <CardContent>
            <h2>Strain: {recommend.strain}</h2>
            <p>Description: {recommend.description}</p>
            <p>Rating: {recommend.rating}</p>
            <p>Effect: {recommend.effect}</p>
            <p>Flavor: {recommend.flavor}</p>
            <div className="editDeleteButtonContainer">
              <Button
                onClick={() => setEditing(true)}
                variant="contained"
                color="secondary"
              >
                Edit
              </Button>

              <Button
                onClick={(e) => deletePost(e)}
                variant="contained"
                color="primary"
                id="deleteButton"
              >
                Delete
              </Button>
            </div>
          </CardContent>
          {editing && (
            <form onSubmit={editRecommended}>
              <div className="menuItemContainer">
                <input
                  name="ailment"
                  value={userInput.ailment}
                  onChange={onChangeHandler}
                  type="text"
                />
                <button>submit</button>
                <button onClick={() => setEditing(false)}>Cancel</button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Recommend;
