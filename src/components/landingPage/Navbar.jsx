import {useNavigate} from "react-router-dom";



const Navbar = () =>{

    const navigate = useNavigate();

    return(
        <div className="w-full p-3 shadow-lg sticky">
            <div className="flex items-center justify-between">
                <div className="select-none">
                    <h1 className="uppercase text-xl font-semibold text-primary">work<span className="text-tomato">scape</span></h1>
                </div>
                <div className="">
                    <button onClick={() =>{navigate('/signin')}} className="uppercase mr-8 duration-300 bg-primary hover:bg-primaryHover text-white px-6 py-2 rounded-lg">sign in</button>
                    <button onClick={() =>{navigate('/signup')}} className="uppercase duration-300 bg-primary hover:bg-primaryHover text-white px-6 py-2 rounded-lg">sign up</button>
                </div>
            </div>
        </div>
    )
};
export default Navbar;