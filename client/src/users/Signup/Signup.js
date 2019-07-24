import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            specialite: "",
            password: "",
            cpassword: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if (this.state.email.length === 0) {
            return;
        }
        if (this.state.nom.length === 0) {
            return;
        }
        if (this.state.prenom.length === 0) {
            return;
        }
        if (this.state.password.length === 0 || this.state.password !== this.state.cpassword) {
            return;
        }
        var _send = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            password: this.state.password,
            specialite: this.state.specialite
        }
        API.signup(_send).then(function (data) {
            //localStorage.setItem('token', data.data.token);
            localStorage.setItem('id', data.data.id);
            if(!data.data.id){
                window.location = '/'
                document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            }else{
                window.location = '/dashboard'
            }
            
            // window.location = `/dashboard/${data.data.id}`
        }, function (error) {
            console.log(error);
            return;
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    signin = event => {
        window.location = "/login"
    }
    render() {
        return (
            <div className="Login">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">

                            <FormGroup controlId="nom" bsSize="large">
                                <FormLabel className='couleur'>Nom</FormLabel>
                                <FormControl autoFocus type="text" value={this.state.nom} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="prenom" bsSize="large">
                                <FormLabel className='couleur'>Prénom</FormLabel>
                                <FormControl autoFocus type="text" value={this.state.prenom} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="email" bsSize="large">
                                <FormLabel className='couleur'>Email</FormLabel>
                                <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="specialite" bsSize="large">
                                <FormLabel className='couleur'>Spécialité</FormLabel>
                                <FormControl autoFocus type="text" value={this.state.specialite} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <FormLabel className='couleur'>Password</FormLabel>
                                <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                            </FormGroup>
                            <FormGroup controlId="cpassword" bsSize="large">
                                <FormLabel className='couleur'>Confirm Password</FormLabel>
                                <FormControl value={this.state.cpassword} onChange={this.handleChange} type="password" />
                            </FormGroup>

                            <FormGroup  bsSize="large">
                                <FormLabel id='error'></FormLabel>
                            </FormGroup>
                            <Button
                                type="submit"
                                onClick={this.send}className='couleur'
                            >
                                Inscription
                            </Button>

                            <Button
                                onClick={this.signin}
                                type="submit"
                            >
                                Signin
                            </Button>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}