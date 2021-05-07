import React from 'react';
import Cards  from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import { fetchData } from './helpers/apiHelpers';
import './styles/App.css';
import coronaImage from './images/titleImage.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    });

  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img className="image" src={coronaImage} alt="title"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
