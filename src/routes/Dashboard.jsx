import {useEffect} from "react";
import Navbar from "../components/dashboard/Navbar.jsx";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import Context from "../components/dashboard/Context.jsx";
import {useNavigate} from "react-router-dom";
import { userIdActions } from "../store/index.js";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase.js";
import {useDispatch} from "react-redux";
const Dashboard = () =>{

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() =>{
        onAuthStateChanged(auth,(user) =>{
            if(user){
                dispatch(userIdActions.setUser(user.uid));
            }else{
                navigate('/');
            }
        })
        
    },[]);


    return(
        <div className="bg-gray-50">
            <div className="">
                <Navbar />
            </div>
            <div className="flex">
                <div className="w-[calc(25%)]">
                    <Sidebar />
                </div>
                <div className="w-[calc(75%)]">
                    <Context />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;