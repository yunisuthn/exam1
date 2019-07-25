
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router-dom'
import Routes from './Routes';
import TopNavigation from './TopNavigation';
import SideNavigation from './SlideNavigation';
import Footer from '../../../tenaComponent/Footer';

import logo from "./exam.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      fontFamily: 'Verdana !important'
    }
    return (
      <div style={{ style }}>
        <div className="">
          <SideNavigation /> 
          <TopNavigation />
          <main id="content" className="p-5 acc">
          <h1>cher cuisinier, </h1> 
          <h3>bienvenu sur le page admin</h3>
          <p>vous pouvez :</p>
          <p>ajouter des ateliers</p>
          <p>voir vos ateliers</p>
          </main>
          <Footer />

        </div>
      </div>
    )
  }
}

export default Dashboard; 