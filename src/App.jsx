import {Routes,Route} from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Drive from "./routes/Drive";
import Task from "./routes/Tasks";
import Inbox from "./routes/Inbox";
import Community from "./routes/Community";

const App = () =>{



  return(
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  )
};


export default App;