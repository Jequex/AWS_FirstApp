import React, { useState } from 'react';

import { API } from 'aws-amplify';

const UserForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstname: firstName,
            lastname: lastName,
            email: email
        }

        API.post('userapi', '/users', {body: data}).then(
            res => console.log(res)
        )
        // API.get('userapi', '/users/firstname').then(
        //     res => console.log(res)
        // )
    }
    

    return (
        <div>
            <form className="App-form">
                <p style={{alignSelf: 'center'}}>CREATE A USER</p>
                <label htmlFor="firstname">FIRSTNAME</label>
                <input type="text" name="firstname" onChange={(e) => setFirstName(e.target.value) }/>
                <br />
                <label htmlFor="lastname">LASTNAME</label>
                <input type="text" name="lastname" onChange={(e) => setLastName(e.target.value)} />
                <br />
                <label htmlFor="email">EMAIL</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <button onClick ={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default UserForm;
