import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

// import Image2 from './cuisine2.jpeg';
// import Image3 from './cuisine3.png';
// import logo from './exam.png'; 
import Home from './Home';  
import Visite from './Visitez'; 
import Photo from './Photo';
class Accueil extends Component {
    introduction= () =>{
        window.location = '/introduction'
    }
    
    render() {
        return (
            <div class=" container ">
                <div class=" row ">
                <div class=" col-md-2 col-5 ">
                <Photo/>
                </div>
                
                <div class=" col-md-3 col-5 home">
                    <Home/>
                </div>
                
                <div class="visite col-md-3 ">
                    <Visite/>
                </div>
                </div>
            </div>
        );
    }
}

export default Accueil;
