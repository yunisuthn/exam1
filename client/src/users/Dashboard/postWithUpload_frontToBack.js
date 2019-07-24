
import React from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';


import API from '../../utils/API';
class PostFrontToBack extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      titre: '',
      description: '',
      date: '',
      debut: '',
      duree: '',
      placedispo: '',
      placeres: '',
      prix: '',
      user: '',
      photo_profil: '',

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.disconnect.bind(this);
  }
  disconnect = event => {
    API.logout();
    window.location = "/";
  }

  liste = event => {
    window.location = "/userArticle";
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUploadImage(ev) {

    ev.preventDefault();

    const data = new FormData();
    data.append('photo_profil', this.uploadInput.files[0]);
    data.append('titre', this.state.titre);
    data.append('description', this.state.description)
    data.append('date', this.state.date);

    data.append('debut', this.state.debut);
    data.append('duree', this.state.duree);
    data.append('placedispo', this.state.placedispo);
    data.append('placeres', this.state.placeres)

    data.append('prix', this.state.prix);
    data.append('user', localStorage.id)



    fetch('http://localhost:8081/article', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        console.log('this.state.titre == ', body);
        this.setState({ photo_profil: `http://localhost:8081/article/${body.photo_profil}` });
        console.log('ity ilay body.fil', body);

      });
    });
  }

  componentDidMount() {
    console.log('this.props.location.pathname', localStorage.id);
  }

  render() {
    return (
      <div className="Login">

          <MDBContainer>
              <MDBRow>
                  <MDBCol md="6">

                      <FormGroup controlId="titre" bsSize="large">
                          <FormLabel className='couleur'>Titre:</FormLabel>
                          <FormControl autoFocus type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="titre"/>
                      </FormGroup>
                      <FormGroup controlId="description" bsSize="large">
                          <FormLabel className='couleur'>Description:</FormLabel>
                          <FormControl type="textarea"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="description" />
                      </FormGroup>
                      <FormGroup controlId="date" bsSize="large">
                          <FormLabel className='couleur'>Date:</FormLabel>
                          <FormControl type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="date" />
                      </FormGroup>

                      <FormGroup controlId="debut" bsSize="large">
                          <FormLabel className='couleur'>Horaire début:</FormLabel>
                          <FormControl type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="debut" />
                      </FormGroup>
                      <FormGroup controlId="duree" bsSize="large">
                          <FormLabel className='couleur'>Durée:</FormLabel>
                          <FormControl type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="duree" />
                      </FormGroup>
                      <FormGroup controlId="placedispo" bsSize="large">
                          <FormLabel className='couleur'>Nombre place disponible:</FormLabel>
                          <FormControl type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="placedispo" />
                      </FormGroup>
                      <FormGroup controlId="placeres" bsSize="large">
                          <FormLabel className='couleur'>Nbre place reservé:</FormLabel>
                          <FormControl type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="placeres" />
                      </FormGroup>
                      <FormGroup controlId="prix" bsSize="large">
                          <FormLabel className='couleur'>Prix:</FormLabel>
                          <FormControl type="text"
                            value={this.state.value}
                            onChange={this.onChange}
                            name="prix" />
                      </FormGroup>

                      <FormGroup controlId="file" bsSize="large">
                          <FormControl 
                          ref={(ref) => { this.uploadInput = ref; }} 
                          type="file"
                           name="photo_profil" />
                      </FormGroup>

                      <Button variant="primary" className='couleur'
                          onClick={this.handleUploadImage}
                          type="submit">
                           Ajouter
                      </Button>

                      <Button className='couleur'
                          onClick={this.disconnect}
                          type="submit"
                      >
                          Deconnecter
                      </Button>
                      <Button className='couleur'
                          onClick={this.liste}
                          type="submit"
                      >
                          Mes produits
                      </Button>


                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      {/* <form onSubmit={this.handleUploadImage}>
        <label>Nom:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="nom" /><br></br>
        <label>Prix:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="prix" /><br></br>
        <label>Description:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="description" /><br></br>

        <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil" />

        <button>Ajouter</button>
        <Button
          onClick={this.disconnect}
          block
          bsSize="large"
          type="submit"
        >
          Se déconnecter
                </Button>
        <Button
          onClick={this.liste}
          block
          bsSize="large"
          type="submit"
        >
          Tous mes produits
                </Button>
      </form> */}
      </div>
    );
  }
}

export default PostFrontToBack;
