import Cards  from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import './styles/App.css';
import { fetchData } from './helpers/apiHelpers';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchData();;
      setData(fetchedData);
  })();
  }, []);

  return (
    <div className="container">
      <Cards data={data}/>
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
