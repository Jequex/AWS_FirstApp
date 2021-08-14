import React,{ useEffect, useState } from 'react';
import './App.css';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {

  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState('')
  const [pets, setPets] = useState([])

  useEffect(() => {
    API.get('petsapi', '/pets/name')
    .then(petRes => setPets([...petRes]))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
        name: petName,
        type: petType
      }
    API.post('petsapi', '/pets', {
      body: data
    }).then(resData => console.log(resData))
      .then(setPets([...pets, data]))
    setPetName('')
    setPetType('')
  }

  return (
    <div className="App">
      <header className="App-header">

        Hello

        <br />

        <form onSubmit={ handleSubmit } >
          <input value={petName} placeholder="fiddo" onChange={ (e) => setPetName(e.target.value) }/>
          <input value={petType} placeholder="dog" onChange={(e) => setPetType(e.target.value)} />
          <button>Add Pet</button>
        </form>

        <br />

        <ul>{pets.map(pet => <li>{pet.name}</li>) }</ul>

        <AmplifySignOut />

      </header>
    </div>
  );
}

export default withAuthenticator(App);
