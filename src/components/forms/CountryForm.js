import React, { useState } from 'react';
import { API } from 'aws-amplify';

const CountryForm = ({countrys}) => {

    const [countryName, setCountryName] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [countryData, setCountryData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            countryname: countryName,
            countrycode: countryCode
        };

        API.post('countriesapi', '/countries', {
            body: data
        }).then(resData => console.log(resData))
            .then(setCountryData([...countryData, data]));
        setCountryName('');
        setCountryCode('');
        countrys();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={countryName} placeholder="country name" onChange={e => setCountryName(e.target.value)} />
                <input type="text" value={countryCode} placeholder="country code" onChange={e => setCountryCode(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CountryForm;
