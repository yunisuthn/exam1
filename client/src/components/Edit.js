import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDebut = this.onChangeDebut.bind(this);
    this.onChangeDuree = this.onChangeDuree.bind(this);
    this.onChangePlacedispo = this.onChangePlacedispo.bind(this);
    this.onChangePlaceres = this.onChangePlaceres.bind(this);
    this.onChangePrix = this.onChangePrix.bind(this);
    //this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        titre: '',
        description: '',
        date: '',
        debut: '',
        duree: '',
        placedispo: '',
        placeres: '',
        prix: '',
        //photo_profil: '',
    }
  }

  componentDidMount() {
      axios.get('http://localhost:8081/article/'+this.props.match.params.id)
          .then(response => {
                this.setState({ 
                    titre:response.data.titre,
                    description: response.data.description,
                    date: response.data.date,
                    debut: response.data.debut,
                    duree: response.data.duree,
                    placedispo: response.data.placedispo,
                    placeres: response.data.placeres,
                    prix: response.data.prix
                })
            })
          .catch(function (error) {
              console.log(error);
          })
        }
  
  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }
  onChangeDebut(e) {
    this.setState({
      debut: e.target.value
    });
  }
  onChangeDuree(e) {
    this.setState({
      duree: e.target.value
    });
  }
  onChangePlacedispo(e) {
    this.setState({
      placedispo: e.target.value
    });
  }
  onChangePlaceres(e) {
    this.setState({
      placeres: e.target.value
    });
  }
  onChangePrix(e) {
    this.setState({
      prix: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      titre: this.state.titre,
      description: this.state.description,
      date: this.state.date,
      debut: this.state.debut,
      duree: this.state.duree,
      placedispo: this.state.placedispo,
      placeres: this.state.placeres,
      prix: this.state.prix
    };
    axios.post('http://localhost:8081/article/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    //this.props.history.push('/');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center" className='couleur'>Editer atelier</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className='couleur'>Titre:  </label>
                    <input 
                      type="text" 
                      className="form-control " 
                      value={this.state.titre} 
                      onChange={this.onChangeTitre}
                      />
                </div>
                <div className="form-group" >
                    <label className='couleur'>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                    <label className='couleur'>Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.date}
                      onChange={this.onChangeDate}
                      />
                </div>

                <div className="form-group">
                    <label className='couleur'>Début: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.debut}
                      onChange={this.onChangeDebut}
                      />
                </div>
                <div className="form-group">
                    <label className='couleur'>Durée: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.duree}
                      onChange={this.onChangeDuree}
                      />
                </div>
                <div className="form-group">
                    <label className='couleur'>Place Dispo: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.placedispo}
                      onChange={this.onChangePlacedispo}
                      />
                </div>
                <div className="form-group">
                    <label className='couleur'>Place reserv: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.placeres}
                      onChange={this.onChangePlaceres}
                      />
                </div>
                <div className="form-group">
                    <label className='couleur'>Prix: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.prix}
                      onChange={this.onChangePrix}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary couleur"/>
                </div>
            </form>
        </div>
    )
  }
}