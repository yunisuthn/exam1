import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import axios from 'axios';
import Image1 from './plat1.jpg';
// import Image2 from './cuisine2.jpeg';
// import Image3 from './cuisine3.png';
// import logo from './exam.png'; 
class Home extends Component {
    introduction= () =>{
        window.location = '/introduction'
            /* this.props.history.push('/dashboard'); */
        
    }
    
    Objectif= () =>{
        window.location = '/introduction'
    }
    
    Atelier= () =>{
        window.location = '/atelier'
    }
    
    render() {
        return (
            <div class=" home col-md-6 ">
                <ul  class="col-md-2 ">
                    <li className='li li1' 
                          onClick={this.introduction}> 
                    Introduction
                    </li>
                    <li className='li li2 ' 
                          onClick={this.Objectif}>
                        Objectif
                    </li>
                    <li className='li li3' 
                          onClick={this.Atelier}>
                        Ateliers
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
