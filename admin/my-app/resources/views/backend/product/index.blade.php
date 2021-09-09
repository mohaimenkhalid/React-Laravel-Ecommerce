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
                        <h5><strong>Product List</strong></h5>
                        <a href="{{ route('admin.category.create') }}" class="btn btn-primary">Create Product</a>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <tr>
                            <th>SI#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Unit</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        @foreach($products as $key => $product)
                            <tr>
                                <td>{{ $key+1 }}</td>
                                <td>
                                    <img src="{{ $product->image }}" width="50">
                                </td>
                                <td>{{ $product->name }}</td>
                                <td>{{ $product->category->name }}</td>
                                <td>{{ $product->brand }}</td>
                                <td>{{ $product->unit }}</td>
                                <td>{{ $product->price }}</td>
                                <td>
                                    <a href="{{ route('admin.product.edit', $product->id) }}" class="btn btn-primary btn-sm">
                                        Edit
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
