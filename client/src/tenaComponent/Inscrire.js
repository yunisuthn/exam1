
import React, { Component } from 'react';
import axios from 'axios';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';


export default class Inscrire extends Component {

    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangePrenom = this.onChangePrenom.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          nom: '',
          prenom: '',
          email: '',
          tel: ''
  
        }
        this.state = { profil: [] };

    }

    onChangeNom(e) {
      this.setState({
        nom: e.target.value
      })
    }
    onChangePrenom(e) {
      this.setState({
        prenom: e.target.value
      })
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      })
    }
    onChangeTel(e) {
      this.setState({
        tel: e.target.value
      })
    }
    
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      tel: this.state.tel
    };
    axios.post('http://localhost:8081/particulier', obj)
      .then(res => console.log(res.data));

      // axios.post('http://localhost:8081/autoInc/'+localStorage.atel)
      // .then(res => console.log(res.data))
      // .catch(err => console.log('error === ',err))

    this.setState({
      nom: '',
      prenom: '',
      email: '',
      tel: '',
    })


  }
    componentDidMount() {
        axios.get(`http://localhost:8081/article/${localStorage.atel}`)
            .then(response => {
                console.log('user-article ==== ', response.data)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log('localS.atel === ', localStorage.atel);

        

    }

    ajout = event => {
        window.location = "/dashboard";
      }
    
      getInitialState= () => {
        return {checked: true}
      }
      handleCheck = (id) => {
        //this.setState({checked: !this.state.checked});
        console.log('checked == ', id);
        
        localStorage.setItem('checked', id);
        
      }
    liste() {       
        return <div className="row">
                  <h1 className='robot insc' >{this.state.profil.titre}</h1>
      {console.log('this.state.profil.titre ' , this.state.profil.titre  )
      }
                  <div className=' ' >
                    <div className='inscri col-md-5 col-6' >
                        <img width="300px" height="300px" src={'http://localhost:8081/photos/'+this.state.profil.photo_profil} alt="pdp" />
                    </div>
                    <div className='col-md-4 col-3  ' >
                      <p>{this.state.profil.description}</p>
                      <p>Le {this.state.profil.date}  </p>
                      <p>A partir {this.state.profil.debut}  </p>
                      <p>Pendant {this.state.profil.duree}  </p>
                      <p>Places disponibles :  {this.state.profil.placedispo}  </p>
                      <p>Places réservés :  {this.state.profil.placeres}  </p>
                      <p>Prix : {this.state.profil.prix} $</p>
                    </div >
                    {console.log(this.state.profil)}
                  </div>
                </div>
    }

    render() {
          return (
            <div className='container'>
              <div className='col'>
                <div className='col-md-2 col1 robot'> 
                <div className='titre'>
                  {this.state.profil.titre}
                </div>
                
                </div>
                <div className='col-md-5 col2'> 
                      <p>{this.state.profil.description}</p>
                  <img width="100%" height="100%" src={'http://localhost:8081/photos/'+this.state.profil.photo_profil} alt="pdp" />
                </div>
                <div className='col-md-3'> 
                  <div className='col3'> 
                soratako1
                  </div>
                  <div className='col4'> 
                soratako1
                  </div>
                </div>
              </div>
              </div>
  
  
          );
      }
    // render() {
    //     return (
    //         <div className=''>
    //             <div className='col-md-8'> 
    //               {this.liste()}
    //             </div> 
                
    //             <div className='col-md-6'>         
    //             {
    //               (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

    //                   return (
    //                       <MDBCol  id='colonne'  >
    //                           <MDBCard  id='carte' key={obj._id} onClick={()=>this.inscrire(obj._id)}>
    //                               <MDBCardImage id='sary'cascade className="img-fluid" src={'http://localhost:8080/photos/' + obj.photo_profil} alt="pdp" />
    //                               <MDBCardBody cascade>
    //                                   <MDBCardTitle>{obj.titre}</MDBCardTitle>
    //                                   <MDBCardText>{obj.description}</MDBCardText>
    //                                   <MDBCardText>{obj.date}</MDBCardText>
    //                                   <MDBCardText>{obj.debut}</MDBCardText>
    //                                   <MDBBtn  >
    //                                       S'inscrire
    //                                   </MDBBtn>
    //                               </MDBCardBody>
    //                               {/*console.log(obj)*/}
    //                           </MDBCard>
    //                       </MDBCol>)

    //               })) : ('')
    //             }
    //           </div>
    //             <MDBContainer>
    //                 <MDBRow>
    //                     <MDBCol md="6">

    //                         <FormGroup controlId="nom" bsSize="large">
    //                             <FormLabel>nom</FormLabel>
    //                             <FormControl autoFocus type="text" 
    //                             value={this.state.nom}
    //                             onChange={this.onChangeNom}/>
    //                         </FormGroup>
    //                         <FormGroup controlId="prenom" bsSize="large">
    //                             <FormLabel>Prénom</FormLabel>
    //                             <FormControl autoFocus type="text"
    //                             value={this.state.prenom}
    //                              onChange={this.onChangePrenom} />
    //                         </FormGroup>
    //                         <FormGroup controlId="email" bsSize="large">
    //                             <FormLabel>email</FormLabel>
    //                             <FormControl autoFocus type="email" 
    //                             value={this.state.email} 
    //                             onChange={this.onChangeEmail} />
    //                         </FormGroup>
    //                         <FormGroup controlId="tel" bsSize="large">
    //                             <FormLabel>Numéro de téléphone</FormLabel>
    //                             <FormControl value={this.state.tel} 
    //                             onChange={this.onChangeTel} 
    //                             type="text" 
    //                             />
    //                         </FormGroup>

    //                         <Button
    //                             type="submit"
    //                             onClick={this.onSubmit}
    //                         >
    //                             Envoyer
    //                         </Button>

    //                     </MDBCol>
    //                 </MDBRow>
    //             </MDBContainer>
    //         </div>


    //     );
    // }
}