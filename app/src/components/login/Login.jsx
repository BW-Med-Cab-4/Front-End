import React, { useState } from "react";
import LoginForm from "./LoginForm";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  email: "",
  password: "",
};
function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);

  let history = useHistory();

  const onInputChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("this login button works");
    axiosWithAuth()
      .post("https://med-cab-user.herokuapp.com/api/auth/login", formValues)
      .then((res) => {
        // setUsers([...users, res.data]);

        window.localStorage.setItem("id", res.data.id);
        localStorage.setItem("token", res.data.token);
        setFormValues(initialFormValues);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValues(initialFormValues);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <LoginForm
          values={formValues}
          onChange={onInputChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}

export default Login;
