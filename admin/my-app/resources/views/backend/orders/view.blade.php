@extends('layouts.app')

@section('content')
    <style>
        .card {
            margin-bottom: 5px;
            margin-top: 0;
        }
    </style>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header mt-2">
                    <div class="d-flex justify-content-between">
                        <h5><strong>Order Details</strong></h5>
                    </div>
                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <h5>Order </h5>
                        <h6>Order Date:
                        </h6>
                        <h6>Order Status: <span class="badge badge-info">fghfh</span></h6>
                        <div>
                            <table class="table">
                                <thead>
                                <th>Thumbnail</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Amount</th>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <img src={`${AppURL.ServerBaseURL}${orderDetails.product.image}`} width="80" alt="image" />
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>Subtotal</td>
                                    <td>
                                        gertg
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>Shipping</td>
                                    <td>
                                        fxghtrfh
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>Grand total</td>
                                    <td>
                                        dfheyhhy
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h5>Order Information</h5>
                            </div>
                            <>
                            <div class="col-md-6">
                                <h6>Shipping Address</h6>
                                <p>
                                </p>
                                <p>
                                    <i class="fa fa-phone-square mr-1"/>
                                    tdyjky6uj
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h6>Payment Method</h6>
                                <p>dfhgrtdhg</p>
                            </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
@endsection
