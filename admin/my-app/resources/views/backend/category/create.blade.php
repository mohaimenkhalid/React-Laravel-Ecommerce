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
                    <h5>Category Create</h5>

                    <form class="mt-5" method="post" action="{{ route('admin.category.store') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" placeholder="Enter Category Name" required>
                        </div>

                        <div class="form-group">
                            <label>Image</label>
                            <input type="file" name="image" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label>Parent</label>
                            <span class="text-success font-weight-bold">NB: if you are not select any category it will be parent level 1 category</span>
                            <select class="form-control" name="parent_id">
                                <option value="">Select parent category</option>
                                @foreach($categories as $category)
                                    <option value="{{$category->id}}">
                                        {{$category->name}} {{$category->level == 1 ? '(1 level)' : ''}}
                                    </option>
                                    @if(count($category->singleChildren))
                                        @foreach($category->singleChildren as $subcategory)
                                            <option value="{{$subcategory->id}}" class="ml-2">-- {{$subcategory->name}} {{$subcategory->level == 2 ? '(2 level)' : ''}}</option>
                                        @endforeach
                                    @endif
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Product Level** <span class="text-danger font-weight-bold">You can add product under this category if select YES</span></label>
                            <div class="ml-4">
                                <input class="form-check-input" type="checkbox" id="defaultCheck1" value="1" name="product_level">
                                <label class="form-check-label" for="defaultCheck1">
                                    yes
                                </label>
                            </div>
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
