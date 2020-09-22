import * as Yup from "yup"
const FormSchema = Yup.object().shape({
    first_name: Yup
        .string()
        .min(3, "first name must be at least 3 characters long")
        .required("first name is required"),

    last_name: Yup
        .string()
        .min(3, "last name must be at least 3 characters long")
        .required("last name is required"),

    email: Yup
        .string()
        .email("Must be a valid email")
        .required("email is required"),

    password: Yup
        .string()
        .min(6, "password must be 6 characters long")
        .required("must enter a password")

})

export default FormSchema;