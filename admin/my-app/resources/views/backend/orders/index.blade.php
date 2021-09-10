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
                        <h5><strong>Order List</strong></h5>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <tr>
                            <th>SI#</th>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Total Amount</th>
                            <th>Shipping price</th>
                            <th>Payment Type</th>
                            <th>status</th>
                            <th>shipped status</th>
                            <th>Action</th>
                        </tr>
                        @foreach($orders as $key => $order)
                            <tr>
                                <td>{{ $key+1 }}</td>
                                <td>
                                    {{ $order->invoice_number }}
                                </td>
                                <td>{{ $order->customer->first_name }}</td>
                                <td>{{ $order->total_amount }}</td>
                                <td>{{ $order->shipping_price }}</td>
                                <td>{{ $order->payment_method  }}</td>
                                <td>{{ $order->status }}</td>
                                <td>
                                    <span class="badge badge-info">
                                        {{ $order->shipping_status }}
                                    </span>
                                </td>
                                <td>
                                    <a href="{{ route('admin.orders.view', $order->id) }}" class="btn btn-primary btn-sm">
                                        View
                                    </a>
                                    <a href="" class="btn btn-danger btn-sm">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
