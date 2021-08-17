import React, {useState} from 'react';

const ShipmentForm = (prop) => {

    const [datey, setDatey] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // const 
    }
    

    return (
        <div>
            <form className="App-form">
                <p style={{alignSelf: 'center'}}>SHIPMENT</p>
                <label htmlFor="date">DATE</label>
                <input type="date" name="date" onChange={(e) => setDatey(e.target.value) }/>
                <br />
                <label htmlFor="origin">ORIGIN</label>
                <select name="origin">
                    {/* {prop.countries.map((c) => (
                        <option value={c.countrycode} key={c.countrycode}>
                            {c.countryname}
                        </option>
                    ))} */}
                </select>
                <br />
                <label htmlFor="destination">DESTINATION</label>
                <select name="destination">
                    {/* {prop.countries.map((c) => (
                        <option value={c.countrycode} key={c.countrycode}>
                            {c.countryname}
                        </option>
                    ))} */}
                </select>
                <br />
                <button onClick ={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ShipmentForm;
