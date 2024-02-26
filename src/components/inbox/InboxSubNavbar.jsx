import {useState, useEffect} from "react";
import {Button,Select,Option, Dialog,Input, DialogHeader, DialogBody, DialogFooter, IconButton, Typography} from "@material-tailwind/react";
import {useSelector} from "react-redux";


const InboxSubNavbar = () =>{


    const [isOpen, setIsOpen] = useState(false);
    const [to, setTo] = useState();
    const [subject, setSubject] = useState();
    const [context, setContext] = useState();
    const [sending, setSending] = useState(false);

    const uid = useSelector((state)=>state.userId.uid);


    const clearState = () =>{
        setTo();
        setSubject();
        setContext();
    };

    const sendMessage = async() =>{
        setSending(true);
        try{
            await fetch("http://localhost:8080/sendMessage",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "employeeName":to,
                "sender":uid,
                "subject":subject,
                "context":context,
                "url":"http://demo.com"
            })
            });
            setSending(false);
            setIsOpen(false);
            clearState();
        }catch(error){
            alert(error.message);
            setSending(false);
        }
        
    }

   


    return(
        <>
            <Dialog size="md" open={isOpen} handler={() =>{}}>
                <DialogHeader className="justify-between">
                    <Typography className="capitalize" variant="h5" color="blue-gray">
                        compose a message
                    </Typography>
                    <IconButton color="blue-gray" size="sm" variant="text" onClick={()=>{setIsOpen(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </IconButton>
                    </DialogHeader>
                    <DialogBody className="pr-2"> 
                        <div className="mb-4">  
                            <Typography variant="p" className="capitalize text-black">to</Typography>
                            <Input onChange={(event) => setTo(event.target.value)} label="Enter User Name" color="gray"/>
                        </div>
                        <div className="mb-4">
                            <Typography variant="p" className="capitalize text-black">subject</Typography>
                            <Input onChange={(event)=> setSubject(event.target.value)} label="Subject of your message" color="gray"/>
                        </div>
                        <div className="">
                            <Typography variant="p" className="capitalize text-black">context</Typography>
                            <textarea onChange={(event) => setContext(event.target.value)} className="w-full border-2 border-gray-300 rounded-lg"></textarea>
                        </div>
                        <div className="mt-2">
                            {
                                (sending?
                                    <button onClick={sendMessage} className="uppercase inline-flex bg-primary hover:bg-primaryHover text-white px-8 py-3 text-sm rounded-lg animate-pulse">
                                        sending...
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                    :
                                    <button onClick={sendMessage} className="uppercase inline-flex bg-primary hover:bg-primaryHover text-white px-8 py-3 text-sm rounded-lg">
                                        send
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                )
                            }
                            
                        </div>
                    </DialogBody>
                    <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
                    <Typography variant="small" color="gray" className="font-normal">
                        Powered By Firebase Firestore Database
                    </Typography>
                    <Button variant="text" size="sm">
                        Learn More
                    </Button>
                </DialogFooter>
            </Dialog>
        
            <div className="px-4 py-2 border-2 border-b-gray-300 flex items-center">
                <div className="text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="text-gray-500 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <button onClick={() => setIsOpen(true)} className="uppercase text-sm bg-blue-700 hover:bg-blue-800 duration-300 text-white px-6 py-2 rounded-lg">
                    compose
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-flex mb-1 ml-2">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                </button>
           </div>
        </>
    )
};


export default InboxSubNavbar;