import {useState,useEffect} from "react";
import {Button,Progress,Dialog,DialogHeader,DialogBody,DialogFooter,IconButton,Typography,Input} from "@material-tailwind/react";
import {useSelector} from "react-redux";



const TaskCard = () =>{

    const uid = useSelector((state)=>state.userId.uid);

    const [isOpen, setOpen] = useState(false);
    const [myFiles, setMyFiles] = useState([]);
    const [file, setFile] = useState(false);

    useEffect(() =>{




        const getFiles = async() =>{
            const response = await fetch("http://localhost:8080/getFile",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    "userId":uid,
                    
                })
            })
            const data = await response.json();
            if(data.files.length != 0){
                setMyFiles(data.files)
            }
            return response;
            
        }

        getFiles();

    },[])
    console.log(file);
    return(
        <>
            <div className="">
                <Dialog size="md" open={isOpen} handler={() =>{}}>
                    <DialogHeader className="justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Make Submission 
                    </Typography>
                    <IconButton color="blue-gray" size="sm" variant="text" onClick={()=>setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </IconButton>
                    </DialogHeader>
                    <DialogBody className="pr-2"> 
                        <Typography className="capitalize">
                        setup default route and nested routes in react router
                        </Typography>
                        <div className="mt-4">
                        <label className="block mb-2 text-md font-semibold text-gray-900 dark:text-white">Select a file</label>
                            <select onChange={(event) => setFile(event.target.value)} id="countries" className="bg-gray-50 overflow-x-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value={false}>Choose a File</option>
                            {
                                myFiles.map((file,id) =>(
                                    <option key={id} value={file.resourceUrl}>{file.resourceName}</option>
                                ))
                            }
                        </select>
                        </div>
                        <div className="mt-5">
                        {
                                (file?
                                    <button className="bg-primary w-full px-4 py-2 text-white rounded-lg uppercase">
                                        submit task
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-flex items-center ml-2 mb-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </button>
                                    :
                                    <></>
                                )
                            }
                            
                        </div>
                        
                    </DialogBody>
                    <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
                    <Typography variant="small" color="gray" className="font-normal">
                        Powered By Firebase Cloud Storage
                    </Typography>
                    <Button variant="text" size="sm">
                        Learn More
                    </Button>
                    </DialogFooter>
                </Dialog>
            </div>
            <div className="w-[calc(40%)] mt-2 px-6">
                <div className="w-full bg-white h-[calc(40vh)] shadow-lg p-5">
                    <h1 className="capitalize text-2xl">react router setup</h1>
                    <p className="uppercase text-gray-700 mt-2">cms002</p>
                    <p className="uppercase text-sm mt-2 bg-secondary w-fit text-white px-4 py-2 rounded-lg">due date : <span>19.10.2023</span></p>
                    <div className="mt-2">
                        <p className="capitalize">setup default route and nested routes in react router</p>
                    </div>
                    <div className="mt-2">
                        <button onClick={() => setOpen(true)} className="uppercase bg-primary text-white w-full rounded-lg py-2">
                            make submission
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2 mb-1 inline-flex items-center">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};


export default TaskCard;