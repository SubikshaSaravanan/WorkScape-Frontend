import {useState, useEffect} from "react";
import InboxNavbar from "../components/inbox/InboxNavbar";
import Sidebar from "../components/dashboard/Sidebar";
import InboxSubNavbar from "../components/inbox/InboxSubNavbar";
import Chat from "../components/inbox/Chat";
import InboxLoader from "../components/inbox/InboxLoader";
import {auth} from "../firebase/firebase";
import { userIdActions } from "../store/index.js";
import {onAuthStateChanged} from "firebase/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Inbox = () =>{
    const [messages, setMessages] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() =>{
        onAuthStateChanged(auth,async(user) =>{
            if(user){
                dispatch(userIdActions.setUser(user.uid));
                const getMessages = async() => {
                    try{
                        const res = await fetch("http://localhost:8080/getMessages",{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json",
                            },
                            body:JSON.stringify({
                                uid:user.uid
                            })
                        });
                        const data = await res.json();
                        setMessages(data.messages)
                    }catch(error){
                        alert(error.message);
                    }
                   
                }
                getMessages();
            }else{
                return navigate('/signin');
            }
        })

       
        

        
    },[])



    return(
        <div className="">
            <div className="">
                <InboxNavbar />
            </div>
            <div className="flex">
                <div className="w-[calc(25%)] border-2 border-r-gray-300">
                    <Sidebar isDriverPage={false} />
                </div>
                <div className="w-[calc(75%)]">
                    <div className="">
                        <InboxSubNavbar />
                    </div>
                    {messages?
                        <div className="h-[calc(76vh)] overflow-auto">
                            {
                                messages.map((message,id) => (
                                    <Chat key={id} sender={message.sender} subject={message.subject}/>
                                ))
                            }
                        </div>
                        :
                        <InboxLoader />
                    
                    }
                    
                </div>
            </div>
        </div>    
    )
};


export default Inbox;