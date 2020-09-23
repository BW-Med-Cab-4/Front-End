import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";

const EditRecommend = (props) => {
  const { getData, userInput, setUserInput } = useContext(Context);

  const editRecommend = (e) => {
    e.preventDefault();
    userInput.id
      ? axiosWithAuth()
          .put(
            `https://med-cab-user.herokuapp.com/api/inputs/${userInput.id}`,
            {
              userid: userid,
              effect: userInput.effect,
              ailment: userInput.ailment,
              flavor: userInput.flavor,
              type: userInput.type,
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

  return (
    <div>
      <h1>Update Recommend</h1>
      <form>
        <label>
          Favorite Flavor:
          <select
            name="flavor"
            value={userInput.flavor}
            onChange={onChangeHandler}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Type:
          <select name="type" value={userInput.type} onChange={onChangeHandler}>
            <option value="">types</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="jello">jello</option>
          </select>
        </label>
        <label>
          Ailment:
          <select
            name="ailment"
            value={userInput.ailment}
            onChange={onChangeHandler}
          >
            <option value="ailments">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Effects:
          <select
            name="effect"
            value={userInput.effects}
            onChange={onChangeHandler}
          >
            <option value="effects">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>

        <button id="editbutton" onClick={(e) => editRecommend(e)}>
          Edit this
        </button>
      </form>
    </div>
  );
};

export default EditRecommend;
// {
//   userid: userid,
//   effect: userInput.effect,
//   ailment: userInput.ailment,
//   flavor: userInput.flavor,
//   type: userInput.type,
// }
