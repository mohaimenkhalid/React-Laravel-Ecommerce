import React, {Component} from 'react';
import AppStorage from "../../helpers/AppStorage";
import noProfileImage from "../../assets/images/no-profile.jpg";
import axios from "axios";
import AppURL from "../../api/AppURL";

class MyAccountIndex extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            first_name: '',
            last_name: '',
            email: '',
            image: '',
            processing: '',
        }
    }

    componentDidMount() {
        this.setUserDetails()
    }

    setUserDetails() {
        this.setState({
            first_name: AppStorage.getUser().first_name,
            last_name: AppStorage.getUser().last_name,
            email: AppStorage.getUser().email,
            image: AppStorage.getUser().image,
        })
    }

    closeEditMode = (e) => {
        e.preventDefault();
        this.setUserDetails()
        this.setState({editMode: false})
    }

    openEditMode = (e) => {
        e.preventDefault();
        this.setUserDetails()
        this.setState({editMode: true})
    }

    handleFirstName = (e) => {
        e.preventDefault();
        this.setState({first_name: e.target.value})
    }

    handleLastName = (e) => {
        e.preventDefault();
        this.setState({last_name: e.target.value})
    }

    handleImage = (e) => {
        e.preventDefault();
        this.setState({'image': e.target.files[0]})
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({processing: true})

        let fd = new FormData();
        fd.append('first_name', this.state.first_name)
        fd.append('last_name', this.state.last_name)
        fd.append('image', this.state.image)

        const headers = {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${AppStorage.getToken()}`
        };

        axios.post(AppURL.updateProfile, fd, {headers: headers})
            .then(res => {
                console.log(res)
            })
            .catch()
    }


    render() {
        return (
            <div>
                <div className="card min-vh-100">
                    <div className="card-body">
                        <h3>My account</h3>
                        {
                            this.state.editMode === false
                                ?
                                (
                                   <>
                                       <div className="account-details-view">
                                           <a href="#" onClick={(e) => {
                                               e.preventDefault();
                                               this.setState({editMode: true})
                                           }}>Edit <i className="fa fa-edit" /> </a>
                                           <div className="d-flex">
                                               <strong>First Name: </strong>
                                               <div className="ml-2">{this.state.first_name}</div>
                                           </div>
                                           <div className="d-flex">
                                               <strong>Last Name: </strong>
                                               <div className="ml-2">{this.state.last_name}</div>
                                           </div>
                                           <div className="d-flex">
                                               <strong>Email: </strong>
                                               <div className="ml-2">{this.state.email}</div>
                                           </div>
                                       </div>
                                   </>
                                )
                                :
                                (
                                    <>
                                        <div className="account-details-edit px-5">
                                            <a href="#" onClick={this.closeEditMode}>Close Edit </a>
                                            <div className="form-group">
                                                <strong>First Name: </strong>
                                                <input type="text" onChange={this.handleFirstName} value={this.state.first_name} placeholder="Enter First Name" className="form-control" readOnly={this.state.processing} />
                                            </div>
                                            <div className="form-group">
                                                <strong>Last Name: </strong>
                                                <input type="text" onChange={this.handleLastName} value={this.state.last_name} placeholder="Enter First Name" className="form-control" readOnly={this.state.processing} />
                                            </div>
                                            <div className="form-group">
                                                <strong>Profile Image: </strong> <br />
                                                <img src={this.state.image !== null ? this.state.image : noProfileImage } alt="" width="100" />
                                                <input type="file" className="form-control" onChange={this.handleImage}  />
                                            </div>
                                            <div className="form-group float-right">
                                                <button className="btn btn-danger" disabled={this.state.processing} onClick={this.submitForm}>{this.state.processing === true ? 'Processing...' : 'Update'}</button>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccountIndex;
