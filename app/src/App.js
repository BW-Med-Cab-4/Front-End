import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/utils/PrivateRoute";
import axiosWithAuth from "./components/utils/axiosWithAuth";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";

import { Context } from "./components/utils/Context";

function App() {
  const userid = window.localStorage.getItem("id");
  const [recommendList, setRecommendList] = useState([
    {
      id: "1",
      userid: "1",
      prediction: "",
      description: "",
      rating: "",
    },
  ]);
  const getData = () => {
    axiosWithAuth()
      .get(`https://med-cab-user.herokuapp.com/api/recommendations/${userid}`)
      .then((res) => {
        console.log(res);
        res.data.length > 0
          ? setRecommendList(res.data)
          : console.log("no data");
      })
      .catch((err) => {
        console.log(err);
        // debugger
      });
  };
  const logOut = () => {
    window.localStorage.clear();
  };
  return (
    <Router>
      <Nav />
      <Context.Provider
        value={{ userid, recommendList, setRecommendList, getData, logOut }}
      >
        <div className="App">
          <PrivateRoute path="/Dashboard" component={Dashboard} />
          <Route path="/Login" component={Login} />
          <Route exact path="/" component={SignUp} />
        </div>
      </Context.Provider>
    </Router>
    // <Router>
    //   <Context.Provider
    //     value={{ userid, recommendList, setRecommendList, getData, logOut }}
    //   >
    //     <div className="App">
    //       <Route exact path="/" component={SignUP} />
    //     </div>
    //   </Context.Provider>
    //   //{" "}
    // </Router>
  );
}

export default App;
