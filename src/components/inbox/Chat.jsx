import {useState} from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, IconButton, Typography} from "@material-tailwind/react";



const Chat = (props) =>{

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <Dialog size="md" open={isOpen} handler={() =>{}}>
                    <DialogHeader className="justify-between">
                    <Typography className="capitalize" variant="h5" color="blue-gray">
                        {`message from ${props.sender}`}
                    </Typography>
                    <IconButton color="blue-gray" size="sm" variant="text" onClick={()=>{setIsOpen(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </IconButton>
                    </DialogHeader>
                    <DialogBody className="pr-2"> 
                        <div className="w-full">
                            <h1 className="font-bold"><span className="uppercase">subject : </span>{props.subject}</h1>
                        </div> 
                        <div className="my-5">
                           <p className="">{props.context}</p>
                        </div>
                        <div className="">
                            <button className="uppercase inline-flex bg-red-700 hover:bg-red-800 text-white px-4 py-3 text-sm rounded-lg">
                                mark as read
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </button>
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
        <div onClick={() => setIsOpen(true)} className="mb-2">
            <div className="px-8 py-2">
                <div className="text-gray-700 hover:scale-105 duration-300 flex items-center justify-between rounded-lg shadow-lg w-full px-2 py-4">
                    <div className="inline-flex items-center select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <h1 className="uppercase ml-3 text-gray-900">{props.sender}</h1>
                    </div>
                    <div className="text-gray-900">
                        <h1 className="">{props.subject}</h1>
                    </div>
                    <div className="">
                        <h1 className="">13 JULY 2023</h1>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </>
    )
};


export default Chat;