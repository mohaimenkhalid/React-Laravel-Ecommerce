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

                    <form class="mt-5" method="post" action="{{ route('admin.category.update', $category->id) }}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value="{{ $category->name }}" class="form-control" placeholder="Enter Category Name" required>
                        </div>
                        <div class="form-group">
                            <label>Slug</label>
                            <input type="text" name="slug" value="{{ $category->slug }}" class="form-control" placeholder="Enter Category Slug" required>
                        </div>
                        <div class="form-group">
                            <label>Image</label><br />
                            @if($category->image !== null)
                                <img src="{{ asset($category->image) }}" width="100">
                            @endif
                            <input type="text" name="old_image" value="{{ $category->image }}" class="form-control">
                            <input type="file" name="image" class="form-control">
                        </div>

                        <div class="form-group">
                            <label>Parent</label>
                            <span class="text-success font-weight-bold">NB: if you are not select any category it will be parent level 1 category</span>
                            <select class="form-control" name="parent_id">
                                <option value="">Select category</option>
                                @foreach($categories as $categoryitem)
                                    <option value="{{$categoryitem->id}}" {{ $categoryitem->id == $category->parent_id ? 'selected' : '' }}>
                                        {{$categoryitem->name}}
                                    </option>
                                    @if(count($categoryitem->singleChildren))
                                        @foreach($categoryitem->singleChildren as $subcategory)
                                            <option value="{{$subcategory->id}}" {{ $subcategory->id == $category->parent_id ? 'selected' : '' }} class="ml-2">-- {{$subcategory->name}} {{$subcategory->level == 2 ? '(2 level)' : ''}}</option>
                                        @endforeach
                                    @endif
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Product Level** <span class="text-danger font-weight-bold">You can add product under this category if select YES</span></label>
                            <div class="ml-4">
                                <input class="form-check-input" type="checkbox" id="defaultCheck1" value="1" name="product_level" {{ $category->product_level == 1 ? 'checked' : '' }}>
                                <label class="form-check-label" for="defaultCheck1">
                                    yes
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Featured</label>
                            <div class="ml-4">
                                <input class="form-check-input" type="checkbox" id="defaultCheck1" value="1" name="featured" {{ $category->featured == 1 ? 'checked' : '' }}>
                                yes
                            </div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
