import React, { useEffect } from 'react';
import BookingForm from '../components/forms/BookingForm';
import { API } from 'aws-amplify';

const Booking = ({users}) => {

    useEffect(() => {
        // API.get('bookingapi','/booking/').then(bookdata => console.log(bookdata))
    },[])

    return (
        <div className='App-page'>
            <div>
                <BookingForm users={users}/>
            </div>
            <div></div>
        </div>
    )
}

export default Booking
