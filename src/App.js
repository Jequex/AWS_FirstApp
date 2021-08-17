import React, {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Shipment from './pages/Shipment';
import User from './pages/User';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {

  const [app, setApp] = useState({ loading:true, users: '' });

  useEffect(() => {
    API.get('userapi', '/users/firstname').then(
      res => {
        console.log(res);
        setApp({...app, users: res, loading: false });
      }
    )
  }, [])
  

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shipment' component={Shipment} />
          <Route path='/booking' component={() => <Booking users={app.users} />} />
          <Route path='/user' component={() => <User app={app}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
