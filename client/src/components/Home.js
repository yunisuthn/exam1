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
        document.getElementById("error").innerHTML = " Nous sommes " 
    }
    
    render() {
        return (
            <div class="container">
                <div class="col-md-2"> 
                     <img className = 'img imgT' src={Image1} alt="Logo" />
                    {/* <img className = 'img imgT' src={Image2} alt="Logo" />
                    <img className = 'img imgT' src={Image3} alt="Logo" /> */}
                </div>

                <div class="col-md-3">
                <ul>
                    <li className='li li1' 
                          onClick={this.introduction}> 
                    Introduction
                    </li>
                    <li className='li li2'>
                        Objectif
                    </li>
                    <li className='li li3'>
                        Les ateliers
                    </li>
                </ul>
                </div>
                <div class="error">
                
                </div>
                <div class="col-md-3 visite">
                    Visitez nos ateliers
                </div>
            </div>
        );
    }
}

export default Home;
