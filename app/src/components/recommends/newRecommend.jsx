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
    insomnia: false,
  });

  // Web API POST request

  const addNewRecommend = (e) => {
    e.preventDefault();
    axios
      .post(`https://reqres.in/api/users`, {
        name: "morpheus",
        job: "leader",
      })
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
  };

  return (
    <div className="newPost">
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
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>     <label><select>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>     <label><select>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>     <label><select>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
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
