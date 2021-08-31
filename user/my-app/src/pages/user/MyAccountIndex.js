import React, {Component} from 'react';
import AppStorage from "../../helpers/AppStorage";
import noProfileImage from "../../assets/images/no-profile.jpg";
import axios from "axios";
import AppURL from "../../api/AppURL";
import {store} from "../../store/store";
import {setUserDetails} from "../../redux/actions/authActions";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {Dropdown} from "react-bootstrap";

class MyAccountIndex extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            first_name: '',
            last_name: '',
            email: '',
            image: '',
            oldProfile: '',
            processing: false,
        }
    }

    componentDidMount() {
        this.setUserDetails()
    }

    setUserDetails() {
        this.setState({
            first_name: AppStorage.getUser().first_name,
            last_name: AppStorage.getUser().last_name,
            email: this.props.user.email,
            oldProfile: this.props.user.image,
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
        console.log(e.target.value)
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
        fd.append('old_image', this.state.oldProfile)

        const headers = {
            'Accept' : 'application/json',
            "Content-Type": "multipart/form-data",
            'Authorization' : `Bearer ${AppStorage.getToken()}`
        };

        axios.post(AppURL.updateProfile, fd, {headers: headers})
            .then(res => {
                store.dispatch(() => setUserDetails(res.data.user))
                this.setState({processing: false, oldProfile: res.data.user.image})
                document.getElementById("file-upload").value = "";
                toast.success(res.data.message);
            })
            .catch()
    }


    render() {
        return (
            <div>
                <div className="card min-vh-100">
                    <div className="card-body">
                        <h3>My Account</h3>
                        {
                            this.state.editMode === false
                                ?
                                (
                                   <>
                                       <div className="account-details-view">
                                           <a href="#" onClick={this.openEditMode}><i className="fa fa-edit" /> Edit Profile </a>
                                           <hr />
                                           <div>
                                               <img style={{borderRadius: "3rem"}} alt="" src={this.props.user.image !== null ? `${AppURL.ServerBaseURL+'/'+this.props.user.profile_url}` : noProfileImage} width={100} className="mb-3"/>
                                           </div>
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
                                        <div className="account-details-edit">
                                            <div className="row">
                                                <div className='col-md-12'>
                                                    <a href="#" onClick={this.closeEditMode} className="float-right"><i className="fa fa-times" /> Close Edit </a>
                                                </div>
                                                <div className="col-12">
                                                    <hr />
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
                                                        <img style={{borderRadius: "3rem"}} src={this.props.user.image !== null ? `${AppURL.ServerBaseURL+'/'+this.props.user.profile_url}` : noProfileImage} alt="" width="100" />
                                                        {
                                                            this.state.processing === true ? (<i className="fa fa-spin fa-spinner ml-3" style={{fontSize: "30px"}} />) : ''
                                                        }
                                                        <input type="file" id="file-upload" className="form-control" onChange={this.handleImage}  />
                                                    </div>
                                                    <div className="form-group float-right">
                                                        <button className="btn btn-danger" disabled={this.state.processing} onClick={this.submitForm}>{this.state.processing === true ? (<><i className="fa fa-spin fa-spinner ml-3" style={{fontSize: "20px"}} /><span className="ml-2">Processing...</span></>) : 'Update'}</button>
                                                    </div>
                                                </div>
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


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(MyAccountIndex)
