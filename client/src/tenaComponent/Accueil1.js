import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

// import Image2 from './cuisine2.jpeg';
// import Image3 from './cuisine3.png';
import Navbar from './Navbar';
//import Footer from './Footer';
import Home from './Home';
import Visite from './Visitez';
import Photo from './Photo';
class Accueil extends Component {
    introduction = () => {
        window.location = '/introduction'
    }

    render() {
        return (
            <div>
                <div class=" container-fluid " >
                    <div class=" row ">
                        <Navbar />
                        <div class="container">
                            <div class=" col-md-2 col-5 ">
                                <Photo />
                            </div>
                            <div class=" col-md-3 col-5 home">
                                <Home />
                            </div>
                            <div class="visite col-md-3 ">
                                <Visite />
                            </div>
                        </div>
                    </div>
{/* 
                    < Footer /> */}
                </div>
            </div>
        );
    }
}

export default Accueil;
