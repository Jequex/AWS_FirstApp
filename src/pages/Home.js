import React, { useEffect, useState } from 'react';
import CountryForm from '../components/forms/CountryForm';
import PetsForm from '../components/forms/PetsForm';
import PetsTable from '../components/Tables/PetsTable';
import CountriesTable from '../components/Tables/CountriesTable';

import { API } from 'aws-amplify';

const Home = () => {

    const [pets, setPets] = useState([]);
  const [countries, setCountries] = useState([]);

  const petts = () => {
    API.get('petsapi', '/pets/name').then(
      petRes => { setPets([...petRes]); }
    );
  };

  const countrys = () => {
    API.get('countriesapi', '/countries/countrycode').then(
      countryRes => { setCountries([...countryRes]); }
    );
  };

  // useEffect(() => {
  //   petts();
  //   countrys();
  //   //eslint-disable-next-line
  // }, []);

    
    return (
      <div className='App-page'>

      <div className='App-form'>
        <CountryForm countrys={countrys} />
        <br />
        <PetsForm  petts={petts}/>
      </div>
      <div>
        <PetsTable pets={pets} />
      </div>
      <div>
        <CountriesTable countries={countries} />
      </div>
      
      </div>
    )
}

export default Home
