



const Footer = () =>{



    return(
        <div className="w-full bg-white py-6">
            <div className="w-full flex items-center justify-between">
                <div className="w-1/2">
                    <div className="select-none">
                        <h1 className="uppercase text-xl font-semibold text-primary">work<span className="text-tomato">scape</span></h1>
                        <p className="capitalize text-gray-600 text-sm">copyrights @ workscape.IO</p>
                        <p className="capitalize text-gray-600 text-sm">all rights reserved</p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="">
                        <ul className="capitalize inline-flex">
                            <li className="mr-4 hover:text-gray-600"><a href="#">developer info</a></li>
                            <li className="mr-4 hover:text-gray-600"><a href="#">license</a></li>
                            <li className="mr-4 hover:text-gray-600"><a href="#">customer support</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Footer;