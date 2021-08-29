import React, {Component} from 'react';

class MyAccountIndex extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false
        }
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
                                               <div className="ml-2">Mohaimen Khalid</div>
                                           </div>
                                           <div className="d-flex">
                                               <strong>Last Name: </strong>
                                               <div className="ml-2">Mohaimen Khalid</div>
                                           </div>
                                           <div className="d-flex">
                                               <strong>Email: </strong>
                                               <div className="ml-2">mohaimen@gmail.com</div>
                                           </div>
                                       </div>
                                   </>
                                )
                                :
                                (
                                    <>
                                        <div className="account-details-edit px-5">
                                            <a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                this.setState({editMode: false})
                                            }}>Close Edit </a>
                                            <div className="form-group">
                                                <strong>First Name: </strong>
                                                <input type="text" placeholder="Enter First Name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <strong>Last Name: </strong>
                                                <input type="text" placeholder="Enter First Name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <strong>Profile Image: </strong>
                                                <input type="file" className="form-control" />
                                            </div>
                                            <div className="form-group float-right">
                                                <button className="btn btn-danger">Update</button>
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
