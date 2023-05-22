import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddPerson from './AddPerson';
import AddCar from './AddCar';
import axios from 'axios';
import PersonRow from './PersonRow';
import {Link} from 'react-router-dom';

class App extends React.Component {

    state = {
        people: [],
        cars: [],
        person:{
            firstName:'',
            lastName:'',
            age:''
        }

    }
    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const response = await axios.get('/api/peopleCars/getpeople');
        const people = response.data;
        await this.setState({ people });
    }

    onAddPersonClick = (p) => {
       <AddPerson person={p}/>
    }
    onAddCarClick = () => {
       <AddCar/>
    }

    render() {
        const {people} = this.state;
        return (
            <div className="app-container">
                <div className='row'>
             <div className='col-md-6'>
                <Link to="/addperson" >
                    <button className="btn btn-success btn-lg w-100">Add Person</button>
                    </Link> 
             </div>     
                     
                    <table className='table table-hover table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Car Count</th>
                                <th>Add Car</th>
                                <th>Delete Cars</th>
                            </tr>
                        </thead>
                        <tbody>
                          {people.map(p => <PersonRow person={p}/>)}
                        </tbody>
                    </table>

                </div>  
                </div>          
        );
    }
};

export default App;