import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css'


const Chart = ({ data:{confirmed, deaths, recovered }, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []); 


    const lineChart =(
        dailyData.length
        ?(
            <Line
            data ={{
                labels: dailyData.map(({date}) =>date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: 'red',
                    fill: true,
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: 'black',
                    backgroundColor: 'rgba(17, 15, 15, 0.774)',
                    fill: true,
                }],

            }}
        />) : null
    );



    const barChart =(
        confirmed
        ? (
            <Bar 
                data={{
                    labels: [ 'Infected', 'Recovered', 'Deaths' ],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'red',
                            'lawngreen',
                            'black'
                        ],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: {display:false},
                    title: {display: true, text: `Current State In ${country}`},
                }}
            />
        ): null
    )

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 chart">
                        {country ? barChart : lineChart}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart