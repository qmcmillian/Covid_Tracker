import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../helpers/apiHelpers';
import '../styles/CountryPicker.css';

const CountryPicker = ({ handleCountryChange })  => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetchCountries();
      setFetchedCountries(response);
    }
    fetchAPI();
  }, []);


  return (
    <FormControl className="formControl">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {
          fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )
        }
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;
