import React from 'react';
import axios from 'axios';

class AddPerson extends React.Component{
 
state = {
person:{
    firstName:'',
    lastName:'',
    age:''
}
}

onTextBoxChange = e => {
    const copy = {...this.state.person}
    copy[e.target.name] = e.target.value
   this.setState({person: copy})
 }
 onAddPersonClick = async () => {
await axios.post('/api/peoplecars/addperson', this.state.person)
this.setState({person:{
    firstName:'',
    lastName:'',
    age:''
}})
this.props.history.push('/');
 }

    render(){
        const {firstName, lastName, age} = this.state.person
return (<>
        <div>
            <div className='col-md-6 offset-md-3 card bg-light p-4'>
                <h2>Add Person </h2>
                <div className='mt-2'>
                    <input type='text' value={firstName} placeholder='First Name' name='firstName'  className='form-control' onChange={this.onTextBoxChange} />
                </div>
                <div className='mt-2'>
                    <input type='text' value={lastName} placeholder='Last Name' name='lastName'  className='form-control' onChange={this.onTextBoxChange} />
                </div>
                <div className='mt-2'>
                    <input type='text' value={age} placeholder='Age' name='age'  className='form-control' onChange={this.onTextBoxChange} />
                </div>
                <div className='mt-2'>
                    <button className='btn btn-block btn-primary' onClick={this.onAddPersonClick}>Submit</button>
                </div>

            </div>
        </div>
    </>)

    }

    
}

export default AddPerson;


