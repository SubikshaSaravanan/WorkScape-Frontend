import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Enter a Your Name")
    .min(3,"You name must have Atleast 3 characters"),
    email: Yup.string().email("Please Enter a Valid Email").required("This Field is Required"),
    password: Yup.string().required("This Field is Required")
    .min(6,"Password must have atleast 6 characters")
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password Should contain at least one uppercase and lowercase character"),
   
    
});

export default validationSchema;