import React from 'react';
import { Grid } from '@material-ui/core';
import SingleCard from '../components/SingleCard';
import '../styles/Cards.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } })  => {
  if (!confirmed) {
    return 'Loading...'
  }

  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <SingleCard
          className="infected"
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        >
        </SingleCard>
        <SingleCard
          className="recovered"
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        >
        </SingleCard>
        <SingleCard
          className="deaths"
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        >
        </SingleCard>
      </Grid>
    </div>
  )
}

export default Cards;
