import Cards  from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import './styles/App.css';
import { fetchData } from './helpers/apiHelpers';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    (async () => {
      const data = await fetchData();;
      console.log(data);
  })();
  }, []);

  return (
    <div className="container">
      <Cards/>
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
