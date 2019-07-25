
import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import TopNavigation from './TopNavigation';
import SideNavigation from './SlideNavigation';
import Footer from './Footer';
export default class AfficheProfil extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get(`http://localhost:8081/userArticle/${localStorage.id}`)
            .then(response => {
                console.log('user-article ==== ', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        

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
         var msg;
        if (this.state.checked) {
          msg = "checked";
        } else {
          msg = "unchecked";
        }
        return <table className="table">
                    <thead>
                        <tr>
                            <th>NOM</th>
                            <th>PRIX</th>
                            <th>DESCRIPTION</th>
                            <th>PHOTO</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                
                                return <tr key={obj._id}>
                                    <td>{obj.nom}</td>
                                    <td>{obj.prix}</td>
                                    <td>{obj.description}</td>
                                    <td>
                                        <img width="150px" height="50px" src={'http://localhost:8081/photos/'+obj.photo_profil} alt="pdp" />
                                    </td>
                                    <td>
                                        <Link to={"/edit/"+ obj._id} className="btn btn-primary">Edit</Link>
                                    </td>
                                    <td>
                                        <input type="checkbox" onChange={()=>{this.handleCheck(obj._id)}} defaultChecked={this.state.checked}/>
                                        <p>this box is {msg}.</p>
                                    </td>
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </tbody>
                </table>
    }
    render() {
        return (
            <div className="">
              <SideNavigation /> 
              <TopNavigation />
              <main id="content" className="p-5">
                <div className='app1'>
                    {this.liste()}


                </div>
                </main>
          <Footer />

            </div>
        );
    }
}