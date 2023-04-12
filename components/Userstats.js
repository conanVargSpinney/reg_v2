import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Table from "./table/Table";


export default function Userstats() {
    const [userProposals, setUserProposals] = useState();
    const [userYachtData, setUserYachtData] = useState();
    const [userServices, setUserServices] = useState();

    ChartJS.register(ArcElement, Tooltip, Legend);


    const data = {
        labels: ['Overdue', 'In progress', 'Done',],
        datasets: [
            {
                label: 'Services',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="grid gap-3 grid-cols-3">
            <div className="bg-light-lighter p-9 mx-2 rounded-lg text-center">
                <h2 className="font-semibold">Current Proposals</h2>
                <p className="text-center">6</p>
            </div>
            <div className="bg-light-lighter p-9 mx-2 rounded-lg text-center">
                <h2 className="font-semibold">Total Uninvoiced Services</h2>
                <div className="flex justify-around">
                    <p className="text-center">£1,000.00</p>
                    <p className="text-center">€1,000.00</p>
                    <p className="text-center">$1,000.00</p>
                </div>

            </div>
            <div className="bg-light-lighter p-9 mx-2 rounded-lg text-center">
                <h2 className="font-semibold">Total Unpaid Invoices</h2>
                <p className="text-center">6</p>
            </div>
            <div className="bg-light-lighter p-9 mx-2 rounded-lg text-center">
                <h2>Proposals Overview <br /> Jan-2022</h2>
                <Doughnut data={data} />
            </div>
            <div className="bg-light-lighter p-9 mx-2 rounded-lg text-center">
                <h2>Services Overview <br /> Jan-2022</h2>
                <Doughnut data={data} />
            </div>
            <div className="bg-light-lighter p-9 mx-2 rounded-lg text-center">
                <h2>Invoices Overview <br /> Jan-2022</h2>
                <Doughnut data={data} />
            </div>
        </div>
    )
}