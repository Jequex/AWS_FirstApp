import React, { useEffect, useState } from 'react';
import CountryForm from './forms/CountryForm';
import PetsForm from './forms/PetsForm';
import PetsTable from './Tables/PetsTable';
import './App.css';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {
  const [pets, setPets] = useState([]);
  const [countries, setCountries] = useState([]);

  const petts = () => {
    API.get('petsapi', '/pets/name').then(
      petRes => { console.log(petRes); setPets([...petRes]) }
    );
  };

  const countrys = () => {
    API.get('countriesapi', '/countries/countrycode').then(
      countryRes => { console.log(countryRes); setCountries([...countryRes]) }
    );
  };

  useEffect(() => {
    petts();
    countrys();
    //eslint-disable-next-line
  }, []);


  return (
    <div className="App">
      <header className="App-header">

        Hello

        <br />


        <CountryForm />
        <PetsForm />

        <br />

        <PetsTable pets={pets} />

        <AmplifySignOut />

      </header>
    </div>
  );
}

export default withAuthenticator(App);
