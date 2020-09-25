import React, { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";
import "../styles/recommendstyles.css";

// Material UI Imports
import Button from "@material-ui/core/Button";

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
            effect: res.data.effects,
            flavor: res.data.flavors,
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
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

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
          <p>Example: "I'm feeling anxious and tired."</p>
        </div>
      </form>
    </div>
  );
};

export default NewRecommend;
