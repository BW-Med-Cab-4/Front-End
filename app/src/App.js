import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./components/utils/PrivateRoute";
// import axiosWithAuth from "./components/utils/axiosWithAuth";

import { Context } from "./components/utils/Context";

function App() {
  const [recommendList, setRecommendList] = useState([
    {
      id: "",
      user_id: "",
      title: "",
    },
  ]);
  const getData = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((res) => {
        setRecommendList(res.data.data);
        console.log(res.data.data);
        // console.log("GET REQUEST", res)
      })
      .catch((err) => {
        console.log(err);
        // debugger
      });
  };
  return (
    // <Router>
    //   <UserContext.Provider
    //     value={{ user_id, RecommendList, setRecommendList, getData, logOut }}
    //   >
    //     <div className="App">
    //       <PrivateRoute path="/Dashboard" component={Dashboard} />
    //       <Route path="/Login" component={Login} />
    //       <Route exact path="/" component={SignUp} />
    //     </div>
    //   </UserContext.Provider>
    // </Router>
    <Router>
      <Context.Provider value={{ recommendList, setRecommendList, getData }}>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
