import * as yup from "yup"

const FormSchema = yup.object().shape({
    first_name: yup
        .string()
        .min(3, "first name must be at least 3 characters long")
        .required("first name is required"),

    last_name: yup
        .string()
        .min(3, "last name must be at least 3 characters long")
        .required("last name is required"),

    email: yup
        .string()
        .email("Must be a valid email")
        .required("email is required"),

    phone: yup
    .number()
    .typeError('This must be a phone #')
    .integer("A phone number can't include a decimal point")
    .max(10, 'Full phone # required')
    .required('A phone number is required'),


    password: yup
        .string()
        .min(6, "password must be 6 characters long")
        .required("must enter a password")

})

export default FormSchema;