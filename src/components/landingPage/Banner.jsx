


const Banner = () =>{



    return(
        <div className="w-full shadow-md">
            <div className="w-full flex justify-between items-center">
                <div className="w-1/2">
                    <img src="./bannerImg.png" alt="banner image" />
                </div>
                <div className="w-1/2 select-none">
                    <h1 className="capitalize text-3xl text-gray-600">boost your productivity with <br></br><span className="text-primary">work</span><span className="text-tomato">scape</span></h1>
                    <div className="mt-6 w-[calc(85%)]">
                        <ul className=" text-xl">
                            <li className="text-gray-600 mt-3"><span className="text-black font-semibold">Streamlined Collaboration:</span> Seamlessly collaborate with your team, no matter where they are located.</li>
                            <li className="text-gray-600 mt-3"><span className="text-black font-semibold">Enhanced Productivity:</span>  Effortlessly manage tasks, projects, and deadlines in one place.</li>
                            <li className="text-gray-600 mt-3"><span className="text-black font-semibold">Organized Workspace:</span> Keep all your files, notes, and communication organized and accessible.</li>
                            <li className="text-gray-600 mt-3"><span className="text-black font-semibold">Real-time Updates:</span> Stay up-to-date with instant notifications and updates.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;