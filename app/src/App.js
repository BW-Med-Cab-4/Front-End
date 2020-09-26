import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/utils/PrivateRoute";
import axiosWithAuth from "./components/utils/axiosWithAuth";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import { Context } from "./components/utils/Context";

function App() {
  const userid = window.localStorage.getItem("id");
  const [recommendList, setRecommendList] = useState([]);
  const [userInput, setUserInput] = useState({
    ailment: "I'm feeling...",
  });
  // Get inputs data. set userInput to that data
  useEffect(() => {
    axiosWithAuth()
      .get(`https://med-cab-user.herokuapp.com/api/inputs/${userid}`)
      .then((res) => {
        console.log(res);
        res.data.length > 0
          ? setUserInput(res.data[0])
          : console.log("no data");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Get recommendations data. Set recommendList to that data.
  const getData = () => {
    axiosWithAuth()
      .get(`https://med-cab-user.herokuapp.com/api/recommendations/${userid}`)
      .then((res) => {
        console.log(res);
        res.data.length > 0 ? setRecommendList(res.data) : setRecommendList({});
      })
      .catch((err) => {
        console.log(err);
        // debugger
      });
  };
  // Log out by clearing local storage
  const logOut = () => {
    window.localStorage.clear();
  };
  return (
    <Router>
      <Nav />
      <Context.Provider
        value={{
          userid,
          recommendList,
          setRecommendList,
          userInput,
          setUserInput,
          getData,
          logOut,
        }}
      >
        <div className="App">
          <PrivateRoute path="/Dashboard" component={Dashboard} />

          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={SignUp} />
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
