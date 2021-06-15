import React, {Component, Fragment} from 'react';

class Cart extends Component {
    render() {
        return (
            <Fragment>
                <div className="container main-section">
                    <div className="row">
                        <div className="col-lg-12 pb-2">
                            <h4>Your Shoping Cart </h4>
                        </div>
                        <div className="col-lg-12 pl-3 pt-3">
                            <table className="table table-hover border bg-white">
                                <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th width="10%">Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-lg-2 Product-img">
                                                <img src="http://nicesnippets.com/demo/sc-images.jpg" alt="..."
                                                     className="img-responsive"/>
                                            </div>
                                            <div className="col-lg-10">
                                                <h4 className="nomargin">Lenovo K6 Power</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td> 12,000</td>
                                    <td data-th="Quantity">
                                        <input type="number" className="form-control text-center" value="1" />
                                    </td>
                                    <td>12,000</td>
                                    <td className="actions" data-th="" width="10%">
                                        <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="row">
                                            <div className="col-lg-2 Product-img">
                                                <img src="http://nicesnippets.com/demo/sc-KHIP6xxGLD-webres.jpg"
                                                     alt="..." className="img-responsive"/>
                                            </div>
                                            <div className="col-lg-10">
                                                <h4 className="nomargin">Iphone 6s</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td> 35,000</td>
                                    <td data-th="Quantity">
                                        <input type="number" className="form-control text-center" value="1" />
                                    </td>
                                    <td> 35,000</td>
                                    <td className="actions" data-th="" width="10%">
                                        <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td><a href="#" className="btn btn-warning text-white"><i
                                        className="fa fa-angle-left"></i> Continue Shopping</a></td>
                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td className="hidden-xs text-center" width="10%"><strong>Total :
                                        47,000</strong></td>
                                    <td width="20%"><a href="#" className="btn btn-success btn-block">Checkout <i
                                        className="fa fa-angle-right"></i></a></td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Cart;
