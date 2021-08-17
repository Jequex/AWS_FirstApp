import React, {useState} from 'react';

const BookingForm = (prop) => {

    const [product, setProduct] = useState('');
    const [weight, setWeight] = useState('');
    const [sender, setSender] = useState('');
    const [shipment, setShipment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // const 
    }
    

    return (
        <div>
            <form className="App-form">
                <p style={{ alignSelf: 'center' }}>BOOKING</p>
                <label htmlFor="product">PRODUCT</label>
                <input type="text" name="product" onChange={(e) => setProduct(e.target.value)} />
                <br />
                <label htmlFor="weight">WEIGHT</label>
                <input type="text" name="weight" onChange={(e) => setWeight(e.target.value) }/>
                <br />
                <label htmlFor="sender">SENDER</label>
                <select name="sender">
                    {}
                </select>
                <br />
                <label htmlFor="shipment">SHIPMENT</label>
                <select name="shipment">
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

export default BookingForm;
