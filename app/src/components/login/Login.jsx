// import React, { useState } from "react";
// import LoginForm from "./LoginForm";

// const initialFormValues = {
//   email: "",
//   password: "",
// };
// function Login() {
//   const [formValues, setFormValues] = useState(initialFormValues);

//   const onInputChange = (evt) => {
//     setFormValues({
//       ...formValues,
//       [evt.target.name]: evt.target.value,
//     });
//   };

//   const onSubmit = (evt) => {
//     evt.preventDefault();
//     console.log("this login button works");
//     setFormValues(initialFormValues);
//   };

//   return (
//     <div>
//       <LoginForm
//         values={formValues}
//         onChange={onInputChange}
//         onSubmit={onSubmit}
//       />
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

const initialFormValues = {
  email: "",
  password: "",
};
function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("this login button works");
    axios
      .post("https://med-cab-user.herokuapp.com/api/auth/login", formValues)
      .then((res) => {
        // setUsers([...users, res.data]);

        window.localStorage.setItem("id", res.data.id);
        localStorage.setItem("token", res.data.token);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValues(initialFormValues);
  };

  return (
    <div>
      <LoginForm
        values={formValues}
        onChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Login;
