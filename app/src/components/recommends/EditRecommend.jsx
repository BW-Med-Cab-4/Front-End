import React, { useState, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Context } from "../utils/Context";

const EditRecommend = (props) => {
  const { userid, getData } = useContext(Context);

  const [recommendToEdit, setRecommendToEdit] = useState({
    id: "1",
    userid: "2",
    flavor: "",
    types: "",
    ailments: "",
    effects: "",
  });

  // // Web API PUT request
  // const editRecommend = (e, id) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .put(`https://med-cab-user.herokuapp.com/api/inputs${id}`, {
  //       userid: userid,
  //       effect: recommendToEdit.effect,
  //       ailment: recommendToEdit.ailment,
  //       flavor: recommendToEdit.flavor,
  //       type: recommendToEdit.type,
  //     })
  //     .then((res) => {
  //       // console.log("Recommend Changed", res);
  //       setRecommendToEdit({
  //         userid: userid,
  //         effect: recommendToEdit.effect,
  //         ailment: recommendToEdit.ailment,
  //         flavor: recommendToEdit.flavor,
  //         type: recommendToEdit.type,
  //       });
  //     });
  // };
  //       //Resubmits recommend to DS API
  //       axios
  //         .post(``, {
  //
  //         })
  //         .then((res) => {
  //           console.log("Submitted recommend to DS API", res);
  //
  //           // alert("Recommend Submitted")
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //       getData();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setRecommendToEdit({
      ...recommendToEdit,
      [name]: value,
    });
    console.log(recommendToEdit);
  };
  return (
    <div>
      <h1>Update Recommend</h1>
      <form>
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

        {/* <button id="editbutton" onClick={(e) => editRecommend(e, props.id)}>
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default EditRecommend;
