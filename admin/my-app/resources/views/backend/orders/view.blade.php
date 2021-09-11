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
                        <h5>Order #{{ $order->invoice_number}}</h5>
                        <h6>Order Date: {{ $order->created_at}}</h6>
                        <h6>Order Status: <span class="badge badge-danger">{{ $order->shipping_status }}</span></h6>
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
                                @if($order->orderDetails)
                                    @foreach($order->orderDetails as $productDetail)
                                        <tr>
                                            <td><img src="{{ $productDetail->product->image }}" width="120" alt="image" /></td>
                                            <td>{{ $productDetail->product->name }}</td>
                                            <td>{{ $productDetail->unit_price }}</td>
                                            <td>{{ $productDetail->quantity }}</td>
                                            <td>{{ $productDetail->total_price }}</td>
                                        </tr>
                                    @endforeach
                                @endif
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>Subtotal</td>
                                    <td>
                                        {{ $order->total_amount }}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>Shipping</td>
                                    <td>
                                        {{ $order->shipping_price }}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3"></td>
                                    <td>Grand total</td>
                                    <td>
                                        {{ $order->total_amount + $order->shipping_price }}
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
                            <div class="col-md-6">
                                <h6>Shipping Address</h6>
                                <p>{{ $order->full_shipping_address }}</p>
                                <p>
                                    <i class="fa fa-phone-square mr-1"></i>
                                    {{ $order->shippingAddress->phone_no }}
                                </p>
                            </div>
                            <div class="col-md-6">
                                <h6>Payment Method</h6>
                                <p>{{ $order->payment_method }}</p>
                            </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
@endsection
