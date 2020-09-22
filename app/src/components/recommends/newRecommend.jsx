import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import { Context } from "../utils/Context";

const NewRecommend = (props) => {
  const { userid, getData } = useContext(Context);

  const [recommendToEdit, setRecommendToEdit] = useState({
    flavor: "",
    types: "",
    ailment: "",
    effect: "",
    prediction: "",
    description: "",
    raiting: "",
  });

  // Web API POST request

  const addNewRecommend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://med-cab-user.herokuapp.com/api/inputs`, {
        userid: userid,
        flavor: recommendToEdit.flavor,
        type: recommendToEdit.type,
        ailment: recommendToEdit.ailment,
        effect: recommendToEdit.effect,
      })
      .then((res) => {
        console.log("Added New Recommend", res);

        // getData();
        alert("New Recommend Added");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setRecommendToEdit({
          id: "1",
          userid: "2",
          flavor: "",
          types: "",
          ailment: "",
          effect: "",
          prediction: "",
          description: "",
          raiting: "",
        });
      });
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecommendToEdit({
      ...recommendToEdit,
      [name]: value,
    });
    console.log(recommendToEdit);
  };

  return (
    <div className="newRecommend">
      <h3>How do you feel today?</h3>
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
      </form>
    </div>
  );
};

export default NewRecommend;
