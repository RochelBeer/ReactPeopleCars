import React from "react";
import axios from "axios";
import CarRow from "./CarRow";
import {Link} from 'react-router-dom';

class DeleteCars extends React.Component {
    state = { 
        cars:[] 
    }
    
    componentDidMount = async () => {
        const { id } = this.props.match.params
        console.log(id)
        const {data} = await axios.get(`/api/peoplecars/getcarsbypersonid?id=${id}`); 
       console.log(data)
        this.setState({ cars: data });  
                  
            }
     onYesDeleteClick= async() =>{
        const { id } = this.props.match.params
               await axios.post(`/api/peoplecars/deletecars?id=${id}`)
               this.props.history.push('/')
            }
            
    
    render() { 
        const{cars} = this.state
        return (<div className="container" >

        <div className="row">
            {/* <div className="col-md-10">
                <input type="text" className="form-control form-control-lg" placeholder="Search Cars" value=""/>
            </div> */}
            <div className="col-md-2">
                <button className="btn btn-dark btn-lg w-100">Clear</button>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-12">
                <table className="table table-hover table-striped table-bordered"><thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {cars.map(c => <CarRow car={c}/>)}
                </tbody>
            </table>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <h3>Are you sure you want to delete all of these cars?</h3>
        </div>
        
        <div className="col-md-6" >
            <Link to="/">
             <button className="btn btn-primary btn-lg w-100">No</button>
             </Link>
        </div>
        
        
        <div className="col-md-6">           
            <button className="btn btn-danger btn-lg w-100" onClick={this.onYesDeleteClick}>Yes</button>           
        </div>
    </div>
</div>);
    }
}
 
export default DeleteCars;






