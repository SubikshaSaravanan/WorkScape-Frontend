import {useState,useEffect} from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import TableCont from "../components/drive/TableCont";
import {Button,Progress,Dialog,DialogHeader,DialogBody,DialogFooter,IconButton,Typography,Input} from "@material-tailwind/react";
import {useSelector,useDispatch} from "react-redux";
import {uploadModalActions} from "../store/index.js";
import {storage} from "../firebase/firebase.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/firebase.js";
import { userIdActions } from "../store/index.js";
import TableContLoader from "../components/drive/TableContLoader";


const Drive = () =>{
    const navigate = useNavigate();
    const isOpen = useSelector((state) => state.modalActive.active);
    const dispatch = useDispatch();
    const uid = useSelector((state)=>state.userId.uid);
    const isDrivePage = true;

    const [file, setFile] = useState(false);
    const [uploadTask, setUploadTask] = useState(0);
    const [inputValue, setInputValue] = useState(false);

    useEffect(() =>{
        onAuthStateChanged(auth,async(user) =>{
            if(user){
                dispatch(userIdActions.setUser(user.uid));
               
            }else{
                return navigate('/signin');
            }
          })

    },[])
    console.log(file);

    const addFileRecord = async(url) =>{

        try{
                const res = await fetch("http://localhost:8080/uploadFile",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    "userid":uid,
                    "url":url,
                    "name":inputValue,
                    "type":file.type,
                    "size":file.size
                })
            })
            return res;
        }catch(error){
            alert(error.message);
        }
        
    }

    const handleUpload = () =>{
        alert("uploading")
        const storageRef = ref(storage,`${uid}/${inputValue}`);
        const uploadTask = uploadBytesResumable(storageRef,file);

        uploadTask.on("state_changed",(snapshot) =>{
            setUploadTask(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
        },(error) =>{
            console.log(error)
        },() =>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>{
                addFileRecord(downloadUrl);
            });
            dispatch(uploadModalActions.setActive());
            setUploadTask(0);
            
        })
        
    }

    return(
        <div className="bg-gray-50">
            <div className="">
                <Navbar />
            </div>
            <div className="">
                <Dialog size="lg" open={isOpen} handler={() =>{}}>
                    <DialogHeader className="justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Upload File To Cloud
                    </Typography>
                    <IconButton color="blue-gray" size="sm" variant="text" onClick={()=>{dispatch(uploadModalActions.setActive())}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </IconButton>
                    </DialogHeader>
                    <DialogBody className="pr-2"> 
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{(file?file.name:"No File Selected")}</p>
                                </div>
                                <input onChange={(event) => setFile(event.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> 
                        <div className="my-5">
                            {
                                (uploadTask<=0?
                                    <div className="flex">
                                        <Input onChange={(event) => setInputValue(event.target.value)} value={(inputValue?inputValue:"")} label="Enter File Name" type="text" />
                                        <Button disabled={!file} onClick={()=>{(setInputValue(file.name))}} className="bg-primary w-[calc(30%)]">use default file name</Button>
                                    </div>
                                    :
                                    <div className="">
                                        <Progress size="lg" color="blue" value={uploadTask} label="Completed" />
                                    </div>
                                )
                            }
                        </div>
                        <Button onClick={handleUpload} disabled={!file || !inputValue} className="bg-primary">Upload File</Button>
                        
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
            <div className="flex">
                <div className="w-[calc(25%)]">
                    <Sidebar isDrivePage={isDrivePage} />
                </div>
                <div className="w-[calc(75%)] h-[calc(85vh)] flex px-4 mt-2">
                    {
                        (uid?
                            <TableCont />
                            :
                            <TableContLoader />
                        )
                    }
                </div>
            </div>
        </div>
    )
};


export default Drive;