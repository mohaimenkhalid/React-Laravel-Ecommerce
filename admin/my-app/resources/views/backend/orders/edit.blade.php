@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    @if (session('success'))<div class="alert alert-success alert-block">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <strong>{{ session('success') }}</strong>
                    </div>
                    @endif
                    @if (session('error'))<div class="alert alert-danger alert-block">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        <strong>{{ session('error') }}</strong></div>
                    @endif
                    <h5>Update product</h5>

                    <form class="mt-5" method="post" action="{{ route('admin.product.update', $product->id) }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label>Product Name</label>
                            <input type="text" name="name" value="{{ $product->name }}" class="form-control" placeholder="Enter product name" required>
                        </div>
                        <div class="form-group">
                            <label>Product Category</label>
                            <select name="category_id" class="form-control" required>
                                <option value="">Select category</option>
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}" {{$category->id == $product->category_id ? 'selected': ''}}>{{ $category->category_path }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Brand</label>
                            <select name="brand_id" class="form-control">
                                <option value="">Select brand</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Product Price</label>
                            <input type="number" value="{{ $product->price }}" name="price" class="form-control" placeholder="Enter product price" required>
                        </div>

                        <div class="form-group">
                            <label>Special Price</label>
                            <input type="number" value="{{ $product->special_price }}" name="special_price" class="form-control" placeholder="Enter special price" >
                        </div>

                        <div class="form-group">
                            <label>Unit</label>
                            <input type="text" value="{{ $product->unit }}" name="unit" class="form-control" placeholder="Enter product unit" required>
                        </div>
                        <div class="form-group">
                            <label>Product Code</label>
                            <input type="text" name="product_code" value="{{ $product->product_code }}" class="form-control" placeholder="Enter product code" >
                        </div>
                        <div class="form-group">
                            <label>Product Title Image</label> <br />
                            <img src="{{ $product->image }}" width="50">
                            <input type="file" name="image" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Short Description</label>
                            <input type="text" value="{{$product->product_details ? $product->product_details->short_description : ''}}" name="short_description" placeholder="Enter short description" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" value="{{$product->product_details ? $product->product_details->description: ''}}" name="description" placeholder="Enter details description"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Product Slider Image 1</label> <br />
                            <img src="{{ $product->product_details ? $product->product_details->image1 : '' }}" width="50">
                            <input type="file" name="image1" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Product Slider Image 2</label> <br />
                            <img src="{{ $product->product_details ? $product->product_details->image2 : '' }}" width="50">
                            <input type="file" name="image2" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Product Slider Image 3</label> <br />
                            <img src="{{ $product->product_details ? $product->product_details->image3 : '' }}" width="50">
                            <input type="file" name="image3" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Product Slider Image 4</label> <br />
                            <img src="{{ $product->product_details ? $product->product_details->image4 : '' }}" width="50">
                            <input type="file" name="image4" class="form-control">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
