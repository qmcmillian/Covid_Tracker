import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../helpers/apiHelpers';
import {  Line, Bar } from 'react-chartjs-2';
import '../styles/Chart.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country })  => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    }

    fetchAPI();
  }, []);

  const lineChart =  (
    dailyData.length ? (
        <Line
          data={{
            labels: dailyData.map( data => new Date(data.date).toLocaleDateString()), // returns all the dates
            datasets: [
              {
                data: dailyData.map( data => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              },
              {
                data: dailyData.map( data => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255 , 0, 0, 0.5)',
                fill: true,
              },
              {
                data: dailyData.map( data => data.recovered),
                label: 'Recovered',
                borderColor: 'Green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              }
          ],
          }}
        />) : null
  );

  const barChart = (
    confirmed ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}`}
          }}
        />
      ) : null
  );

  return (
    <div className="container">
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;
