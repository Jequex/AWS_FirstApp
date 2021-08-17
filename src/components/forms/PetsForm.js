import React, { useState } from 'react';
import { API } from 'aws-amplify';

const PetForm = ({petts}) => {

    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [pets, setPets] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: petName,
            type: petType
        };

        API.post('petsapi', '/pets', {
            body: data
        }).then(resData => console.log(resData))
            .then(setPets([...pets, data]));
        setPetName('')
        setPetType('')
        petts()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={petName} placeholder="pet name" onChange={e => setPetName(e.target.value)} />
                <input type="text" value={petType} placeholder="pet type" onChange={e => setPetType(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PetForm;
