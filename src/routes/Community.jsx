import Messages from "../components/community/Messages";
import Sidebar from "../components/community/Sidebar";
import Navbar from "../components/dashboard/Navbar";
const Community = () =>{




    return(
        <div className="">
            <div className="">
                <Navbar />
            </div>
            <div className="w-full flex">
                <div className="w-[calc(25%)]">
                    <Sidebar />
                </div>
                <div className="w-[calc(75%)]"> 
                    <Messages />
                </div>
            </div>
        </div>
    )
};

export default Community;