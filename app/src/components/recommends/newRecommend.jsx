import React, { useState, useContext } from "react";
// import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import { Context } from "../utils/Context";

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
        console.log("ADDED NEW POST", res);
        getData();
        alert("New Post Added");
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
    setRecommendToEdit({
      ...recommendToEdit,
      [e.target.name]: e.target.value,
    });
    console.log(recommendToEdit);
  };

  return (
    <div className="newRecommend">
      <h3>How do you feel today?</h3>
      <form onSubmit={addNewRecommend}>
        <label>
          <input
            type="text"
            name="title"
            value={recommendToEdit.title}
            onChange={onChangeHandler}
            placeholder="title"
          />
        </label>
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
          <select value={recommendToEdit.types} onChange={onChangeHandler}>
            <option value="recommendToEdit.types">types</option>
            <option value="recommendToEdit.types">Lime</option>
            <option value="recommendToEdit.types">Coconut</option>
            <option value="recommendToEdit.types">Mango</option>
          </select>
        </label>
        <label>
          Ailment:
          <select value={recommendToEdit.ailments} onChange={onChangeHandler}>
            <option value="ailments">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Effects:
          <select value={recommendToEdit.effects1} onChange={onChangeHandler}>
            <option value="effects">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Effects:
          <select value={recommendToEdit.effects2} onChange={onChangeHandler}>
            <option value="effects">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Effects:
          <select value={recommendToEdit.effects3} onChange={onChangeHandler}>
            <option value="effects">Grapefruit</option>
            <option value="grapefruit">Grapefruit</option>
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
