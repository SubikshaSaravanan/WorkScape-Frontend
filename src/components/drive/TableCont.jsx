import {useState,useEffect} from "react";
import {useSelector} from "react-redux";

const TableCont = () =>{


    const [myFiles, setMyFiles] = useState([]);
    const uid = useSelector((state)=>state.userId.uid);

    useEffect(() =>{
        
        const getFiles = async()=>{
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
        }

        getFiles();

        

    },[])
    console.log(myFiles);
    return(
        <div className="bg-white h-fit w-full">
          <div className="">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                File name
                            </th>
                            <th scope="col" className="px-6 py-3 max-w-[calc(20%)]">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                                Uploaded on
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                myFiles.map((file) => (
                                    <>
                                         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {file.resourceName.substring(0,20)}
                                            </th>
                                            <td className="uppercase px-6 py-4">
                                                {file.resourceType.substring(0,15)}
                                            </td>
                                            <td className="px-6 py-4">
                                                {file.uploardedAt._seconds}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a target="blank" href={file.resourceUrl} className="text-primary capitalize hover:underline">click here</a>
                                            </td>
                                        </tr>
                                    </>
                                ))
                            }
                               
                    </tbody>
                </table>
            </div>
          </div>
          <div className="mt-2 px-5 pb-4">
                <h1 className="capitalize text-2xl">250 MB <span className="text-lg text-gray-600">used of 1 GB</span></h1>
                <div className="flex w-full flex-col gap-4 mt-4 border-2 border-gray-400 rounded-lg">
                    <div className="flex-start flex h-2 rounded-lg w-full overflow-hidden bg-blue-gray-50 font-sans text-xs font-medium">
                        <div
                        className="flex h-full p-5 w-[calc(25%)] items-baseline justify-center overflow-hidden break-all bg-blue-500 text-white"
                        ></div>
                    </div>
                </div>
           </div>

        </div>
    )
};


export default TableCont;