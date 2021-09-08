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
                        <h5><strong>Category List</strong></h5>
                        <a href="{{ route('admin.category.create') }}" class="btn btn-primary">Create Category</a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="accordion" id="accordionExample">
                        @foreach($parent_categories as $key => $category)
                        <div class="card">
                            <div class="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                <p>
                                    {{ $key+1 }} .
                                    <img src="{{$category->image}}">
                                    <strong>{{ $category->name }}</strong>
                                    <strong>{!! $category->product_level == 1 ? "<span class='badge badge-success'>product level</span>" : '' !!}</strong>
                                    <i class="fa fa-chevron-right"></i>
                                </p>
                                <a href="{{ route('admin.category.edit', $category->id) }}" class="btn btn-primary text-white">Edit</a>
                            </div>

                            <div id="collapseOne-{{$key}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    @if(count($category->children))
                                        @foreach($category->children as $subkey => $subcategory)
                                            <div class="accordion" id="accordionExample">
                                                <div class="card">
                                                    <div class="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                                        <p>
                                                            {{ $subkey+1 }} .
                                                            <img src="{{$subcategory->image}}" width="50px">
                                                            <strong>{{ $subcategory->name }}</strong>
                                                            <strong>{!! $subcategory->product_level == 1 ? "<span class='badge badge-success'>product level</span>" : '' !!}</strong>
                                                            @if(count($subcategory->children))
                                                                <i class="fa fa-chevron-right"></i>
                                                            @endif
                                                        </p>
                                                        <a href="{{ route('admin.category.edit', $subcategory->id) }}" class="btn btn-primary text-white">Edit</a>
                                                    </div>

                                                    <div id="subcategory-{{$subkey}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            @if(count($subcategory->children))
                                                                @foreach($subcategory->children as $subsubkey => $subsubcategory)
                                                                    <div class="accordion" id="accordionExample">
                                                                        <div class="card">
                                                                            <div class="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                                                                <p>
                                                                                    {{ $subsubkey+1 }} .
                                                                                    <img src="{{$subsubcategory->image}}" width="50px">
                                                                                    <strong>{{ $subsubcategory->name }}</strong>
                                                                                    <strong>{!! $subsubcategory->product_level == 1 ? "<span class='badge badge-success'>product level</span>" : '' !!}</strong>
                                                                                </p>
                                                                                <a href="{{ route('admin.category.edit', $subsubcategory->id) }}" class="btn btn-primary text-white">Edit</a>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                @endforeach
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
