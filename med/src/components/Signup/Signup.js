import React, { useState, useEffect } from "react";
import * as yup from "yup";
import formSchema from "./FormSchema";
import SignupForm from "./SignupForm";
import axios from "axios";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
};
const initialErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
};

const initialUsers = [];

function Signup() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("this signup button works");

    const newUser = {
      email: formValues.email.trim(),
      firstname: formValues.first_name.trim(),
      lastname: formValues.last_name.trim(),
      phone: formValues.phone,
      password: formValues.password.trim(),
    };
    console.log(newUser);
    postNewUser(newUser);
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://med-cab-user.herokuapp.com/api/auth/register", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        console.log(res.data);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SignupForm
        values={formValues}
        onChange={onInputChange}
        onSubmit={onSubmit}
        errors={formErrors}
      />
    </div>
  );
}

export default Signup;
