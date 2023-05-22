import React from 'react';
import axios from 'axios';


class AddCar extends React.Component{
    state={
        person: {
            firstName:'',
            lastName:'',
            age:''
        },
        car:{
            make: '',
            model:'',
            year:'',
            personId:''
        }
    }
    componentDidMount = async () => {
       const { id } = this.props.match.params
       const {data} = await axios.get(`/api/peoplecars/getpersonbyid?id=${id}`); 
       console.log(data);      
       await this.setState({ person: data });  
    //    console.log(this.state.person)               
           }

           onAddCarClick = async () => {
            await axios.post('/api/peoplecars/addcar', this.state.car)
            this.props.history.push('/')
        }
           onTextBoxChange = e => {
            const { id } = this.props.match.params
            const copy = { ...this.state.car, personId: id }
            copy[e.target.name] = e.target.value
            this.setState({ car: copy })
        }
 
 render(){ 
    const {firstName, lastName, age} = this.state.person 
    const{make, model, year} = this.state.car  
    return (<>
        <div>
            <div className='col-md-6 offset-md-3 card bg-light p-4'>
                <h2>Add Car for {`${firstName} ${lastName}`} </h2>
                                           
                <div className='mt-2'>
                    <input type='text' value={make} placeholder='Make' name='make' className='form-control' onChange={this.onTextBoxChange}/>
                </div>
                <div className='mt-2'>
                    <input type='text' value={model} placeholder='Model' name='model'  className='form-control' onChange={this.onTextBoxChange} />
                </div>
                <div className='mt-2'>
                    <input type='text' value={year} placeholder='Year' name='year'  className='form-control' onChange={this.onTextBoxChange} />
                </div>
                <div className='mt-2'>
                    <button className='btn btn-block btn-primary' onClick={this.onAddCarClick}>Submit</button>
                </div>

            </div>
        </div>
    </>)
 }
}

export default AddCar;