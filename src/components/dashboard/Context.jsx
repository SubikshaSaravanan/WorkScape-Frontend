import {useEffect,useState} from "react";
import {useSelector} from "react-redux";
import Chart from "chart.js/auto";
import DashboardLoader from "./DashboardLoader";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const Context = () =>{


    const [projects, setProjects] = useState([]);
    const [projectNames, setProjectNames] = useState([]);
    const [profile, setProfile] = useState();
    const userId = useSelector((state) => state.userId.uid);
    

    useEffect(() =>{

        

        


        const getData = async() =>{
            
          let response = await fetch("http://localhost:8080/overAll");
          let data = await response.json();
          setProjects(data.projects);
          setProjectNames(data.projectNames);


          response = await fetch("http://localhost:8080/getUser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "employeeId":userId,
                
            })
          });
          data = await response.json();
          setProfile(data.profile);

        };

        getData();

    },[userId])


    const BarChartData = {
        labels: projectNames,
        datasets: [{
            label: 'Progress',
            data: projects,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
    };

    const lineChartData = {
        labels: [2019,2020,2021,2022,2023],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56,],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
   

    return(
        <div className="w-full mt-2 px-6">
            {
                (profile?(
                    <div>
                    <div className="w-full">
                        <div className="select-none">
                            <h1 className="text-semibold text-2xl capitalize">hello {profile[0].employeeName}</h1>
                            <p className="mt-2 capitalize text-md">everything looks good today....<a href="#" className="text-primary hover:underline">you have 3 notifications!</a></p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 select-none">
                        <div className="w-1/3 bg-primary text-white rounded-lg px-5 py-4 mr-5">
                            <h1 className="capitalize text-xl ">employee credit score</h1>
                            <p className="text-2xl mt-2">{profile[0].employeeCredits}</p>
                        </div>
                        <div className="w-1/3 bg-tomato text-white rounded-lg px-5 py-4 mr-5">
                            <h1 className="capitalize text-xl ">no.of tasks completed</h1>
                            <p className="text-2xl mt-2">{profile[0].tasksCompleted}</p>
                        </div>
                        <div className="w-1/3 bg-secondary text-white rounded-lg px-5 py-4 ">
                            <h1 className="capitalize text-xl ">Currently working on</h1>
                            <p className="text-2xl mt-2 capitalize">2 projects</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-10">
                        <div className="w-1/2 bg-white px-4 py-2 mr-2">
                        <h1 className="uppercase font-semibold text-md mb-4">companies overall project's status</h1>
                        <Bar
                            data={BarChartData}
                            options={{
                            plugins: {
                                legend: {
                                display: false
                                }
                            }
                            }}
                        />
                        </div>
                        <div className="w-1/2 bg-white px-4 py-2 ml-2">
                        <h1 className="uppercase font-semibold text-md mb-4">past 5 years revenue</h1>
                        <Line
                            data={lineChartData}
                            options={{
                            plugins: {
                                legend: {
                                display: false
                                }
                            }
                            }}
                        />
                        </div>
                    </div>
                </div>

                )
                :
                <DashboardLoader />)
            }
            
        </div>
    )
};


export default Context;