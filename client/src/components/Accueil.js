import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import axios from 'axios';
import Bienvenu from './Bienvenu';
import logo from './exam.png'; 
class Accueil extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8081/article')
            .then(response => {
                //console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    inscrire = (x)=> {
        //console.log('cccc == ', x);
       
        localStorage.setItem('atel', x);
        //console.log('localStorage', localStorage.atel);
        this.props.history.push('/inscrire');
        //window.location = "/inscrire"
      
    }

    carte (){
        return <div>
        {
            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                return (
                    <MDBCol  className='row col-md-4' >
                        <MDBCard  id='carte' key={obj._id} onClick={()=>this.inscrire(obj._id)}>
                            <MDBCardImage id='sary'cascade className="img-fluid" src={'http://localhost:8081/photos/' + obj.photo_profil} alt="pdp" />
                            <MDBCardBody cascade>
                                <MDBCardTitle>{obj.titre}</MDBCardTitle>
                                <MDBCardText>{obj.description}</MDBCardText>
                                <MDBCardText>{obj.date}</MDBCardText>
                                <MDBCardText>{obj.debut}</MDBCardText>
                                <MDBBtn  >
                                    S'inscrire
                                </MDBBtn>
                            </MDBCardBody>
                            {/*console.log(obj)*/}
                        </MDBCard>
                    </MDBCol>)

            })) : ('')
        }
        </div>
    }
    render() {
        return (
                <div  class="container">
                    <div className='row margin' >
                        <div className='col-md-4'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className='col-md-8'>
                            <Bienvenu/>
                        </div>
                    </div>
                    <div>
                {this.carte()}
                    </div>
            </div>
        );
    }
}

export default Accueil;
