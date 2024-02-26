


const Features = () =>{




    return(
        <div className="w-full px-8 bg-gray-50">
            <div className="w-full">
                <h1 className="capitalize text-2xl text-center mt-5">key features & options</h1>
            </div>
            <div className="w-full mt-10">
                <div className="w-full flex items-center justify-between">
                    <div className="w-1/4 h-[calc(460px)] hover:scale-110 duration-300 bg-white flex flex-col items-center shadow-lg rounded-lg py-4">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </div>
                        <div className="px-8 text-justify">
                            <h1 className="uppercase font-semibold text-xl text-center mb-4">teamwork</h1>
                            <h1 className="capitalize text-gray-600 text-sm">designed to facilitate teamwork, communication, and the sharing of resources among individuals or groups. These apps are typically web-based, meaning they can be accessed from a web browser without the need for installation, and they are used in various contexts, from business and education to personal projects. </h1>
                        </div>
                    </div>
                    <div className="w-1/4 h-[calc(460px)] hover:scale-110 duration-300 bg-white flex flex-col items-center shadow-lg rounded-lg py-4">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-tomato">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                        </div>
                        <div className="px-8 text-justify">
                            <h1 className="uppercase font-semibold text-xl text-center mb-4">collaborate</h1>
                            <h1 className="capitalize text-gray-600 text-sm">workscape allows users to upload, store, share, and access files and documents over the internet. These applications are designed to simplify the process of sharing files, whether for personal or business purposes this file-sharing web application redefines the way individuals and organizations share and collaborate on files. </h1>
                        </div>
                    </div>
                    <div className="w-1/4 h-[calc(460px)] hover:scale-110 duration-300 bg-white flex flex-col items-center shadow-lg rounded-lg py-4">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-secondary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="px-8 text-justify">
                            <h1 className="uppercase font-semibold text-xl text-center mb-4">community</h1>
                            <h1 className="capitalize text-gray-600 text-sm">designed to foster collaboration, knowledge sharing, and networking among software developers and tech enthusiasts. Such an application serves as a hub for developers to connect, learn, collaborate on projects, and stay updated on industry trends and innovations.  </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Features;