



const Navbar = () =>{



    return(
        <div className="w-full">
            <div className="w-full p-4 shadow-lg flex items-center justify-between">
                <div className="select-none">
                    <h1 className="uppercase text-xl font-semibold text-primary">work<span className="text-tomato">scape</span></h1>
                </div>
                <div className="">
                <img
                    className="relative inline-block h-10 w-10 rounded-lg object-cover object-center"
                    alt="Image placeholder"
                    src="https://cdn.dribbble.com/users/7923/screenshots/4248848/media/288a658ffde2a8469b6233495644695f.jpg?resize=800x600&vertical=center"
                    />
                </div>
            </div>
        </div>
    )
};


export default Navbar;