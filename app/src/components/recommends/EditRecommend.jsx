import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";

const EditRecommend = (props) => {
  const { userid, getData, userInput, setUserInput } = useContext(Context);

  // Web API PUT request
  useEffect(() => {
    axiosWithAuth()
      .get(`https://med-cab-user.herokuapp.com/api/inputs/${userid}`)
      .then((res) => {
        // console.log(res);
        res.data.length > 0 ? setUserInput(res.data) : console.log("no data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const editRecommend = (e, id) => {
    e.preventDefault();
    userInput.id
      ? axiosWithAuth()
          .put(`https://med-cab-user.herokuapp.com/api/inputs/${id}`, {
            userid: userid,
            effect: userInput.effect,
            ailment: userInput.ailment,
            flavor: userInput.flavor,
            type: userInput.type,
          })
          .then((res) => {
            // console.log("Recommend Changed", res);

            setUserInput({
              userid: userid,
              effect: userInput.effect,
              ailment: userInput.ailment,
              flavor: userInput.flavor,
              type: userInput.type,
            });
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
    console.log(userInput);
  };

  return (
    <div>
      <h1>Update Recommend</h1>
      <form>
        <label>
          Favorite Flavor:
          <select value={userInput.flavor} onChange={onChangeHandler}>
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
            value={userInput.type}
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
          <select value={userInput.ailment} onChange={onChangeHandler}>
            <option value="ailments">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Effects:
          <select value={userInput.effects} onChange={onChangeHandler}>
            <option value="effects">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <button id="editbutton" onClick={(e) => editRecommend(e, props.id)}>
          Edit this
        </button>
      </form>
    </div>
  );
};

export default EditRecommend;
