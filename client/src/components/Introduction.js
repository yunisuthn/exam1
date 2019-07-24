import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import Home from './Home';
// import Image2 from './cuisine2.jpeg';
// import Image3 from './cuisine3.png';
// import logo from './exam.png'; 
class Introduction extends Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="col-md-11">
                    <Home/>
                </div>
                <div class="col-md-1"> 
                Nous sommes un centre de formation de cuisine qui propose des ateliers à nos élèves à
partir de 12 ans, mais aussi à des particuliers.
Les cours proposés aux particuliers permettent de financer l’achat de matériels et de
matières premières.
C’est la raison pour laquelle nous souhaitons booster cette activité en grâce à une
application web.
                </div>
                </div>
            </div>
        );
    }
}

export default Introduction;
