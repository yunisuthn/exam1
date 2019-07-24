import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Acceuil from './components/Accueil';
import Login from './users/Login/Login';
import PostFrontToBack from './users/Dashboard/postWithUpload_frontToBack';
import './App.css'
import AfficheProfil from './users/Dashboard/AfficheProfil'

// import { Dashboard } from './users/Dashboard/Dashboard.js';
import Signup from './users/Signup/Signup';
import { PrivateRoute } from './users/PrivateRoute.js';
import Inscrire from './components/Inscrire';
import Edit from './components/Edit';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Introduction from './components/Introduction';


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Router>
          <div className='div'>
            <Navbar/>
           
            <Switch className='margin'>
              <Route exact path='/' component={Home} />
              <Route exact path='/acceuil' component={Acceuil} />
              <PrivateRoute path="/dashboard" component={PostFrontToBack} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Signup} />
              <Route path='/inscrire' component={Inscrire} />
              <Route path='/introduction' component={Introduction} />

              {/* <PrivateRoute path="/profil" component={ListTous} /> */}
              <PrivateRoute path="/userArticle" component={AfficheProfil} />
              <PrivateRoute path="/edit/:id" component={Edit} />
              {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;