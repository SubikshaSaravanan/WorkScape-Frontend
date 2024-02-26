import Navbar from "../components/dashboard/Navbar.jsx";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import TasksContainer from "../components/tasks/TasksContainer.jsx";

const Task = () =>{




    return(
        <div className="">
            <div className="bg-gray-50">
                <div className="">
                    <Navbar />
                </div>
                <div className="flex">
                    <div className="w-[calc(25%)]">
                        <Sidebar />
                    </div>
                    <div className="w-[calc(75%)]">
                        <TasksContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Task;