import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../helpers/apiHelpers';
import {  Line, Bar } from 'react-chartjs-2';
import { registerables } from 'chart.js';
import '../styles/Chart.css';

const Chart = ()  => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetchDailyData();
      console.log('useeffect',response)
      setDailyData(response);
    }

    fetchAPI();
  }, []);

  const lineChart =  (
    dailyData.length
      ? (
        <Line
          data={{
            labels: dailyData.map( data => data.date), // returns all the dates
            datasets: [
              {
                data: dailyData.map( data => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              },
              {
                data: dailyData.map( data => data.deaths),
                label: 'Infected',
                borderColor: 'red',
                backgroundColor: 'rgba(255 , 0, 0, 0.5)',
                fill: true
              }
          ],
          }}
        />) : null
  );

  return (
    <div className="container">
      {lineChart}
    </div>
  )
}

export default Chart;
