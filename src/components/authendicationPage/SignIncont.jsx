import {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import validationSchema from '../../yupSchemas/signInSchema.js';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/firebase.js";
import {useDispatch} from "react-redux";
import { userIdActions } from "../../store/index.js";
import { useNavigate } from "react-router-dom";

const SignIncont = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [onLoad, setOnLoad] = useState(false);

    const signIn = (values) =>{
        setOnLoad(true);
        signInWithEmailAndPassword(auth,values.email,values.password)
        .then((userDetails) =>{
            dispatch(userIdActions.setUser(userDetails.user.uid));
            navigate('/dashboard');
            setOnLoad(false);
        })
        .catch((error)=>{
            alert(error.message);
            setOnLoad(false);
        })
    };


    return(
        <div className="bg-white px-5 py-4 rounded-lg shadow-lg">
            <div className="">
                <h1 className="uppercase text-center text-3xl font-semibold text-primary">work<span className="text-tomato">scape</span></h1>
            </div>
            <div className="">
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Sign In
                </h4>
                <p className="mt-1 text-center block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your Login details.
                </p>
                <Formik initialValues={{email:"",password:""}} validationSchema={validationSchema} onSubmit={(values) =>signIn(values)}>
                    
                    {
                        () =>(
                            <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-4 flex flex-col gap-6">
                                <div className="mb-4 relative h-11 w-full min-w-[200px]">
                                    <Field name="email" id="email" type="email" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                    </label>
                                    <ErrorMessage component="p" name="email" className="text-tomato"/> 
                                </div>
                                <div className="mt-4 relative h-11 w-full min-w-[200px]">
                                    <Field name="password" id="password" type="password" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                    </label>
                                    <ErrorMessage component="p" name="password" className="text-tomato"/> 
                                </div>
                                </div>
                                <div className="inline-flex items-center">
                                <label
                                    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    </span>
                                </label>
                                </div>
                                <button
                                className="mt-6 block w-full select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary-500/20 transition-all hover:shadow-lg hover:shadow-primary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                                >
                                {
                                        (onLoad?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto animate-spin">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                            :
                                            "login"
            
                                            
                                        )
                                    }
                                </button>
                                <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                Don &apost Have an Account?
                                <a
                                    className="font-medium text-secondary transition-colors hover:text-blue-700"
                                    href="/signup"
                                >
                                    sign up
                                </a>
                                </p>
                            </Form>
                        )
                    }   
                </Formik>
                </div>
            </div>
        </div>
    )
};

export default SignIncont;