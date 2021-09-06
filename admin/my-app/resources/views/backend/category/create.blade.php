@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h5>Category Create</h5>

                    <form class="mt-5" method="post" action="{{ route('admin.category.store') }}">
                        @csrf
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" placeholder="Enter Category Name">
                        </div>

                        <div class="form-group">
                            <label>Image</label>
                            <input type="file" name="image" class="form-control">
                        </div>

                        <div class="form-group">
                            <label>Parent</label>
                            <select class="form-control" name="parent_id">
                                <option>Select parent category</option>
                                <option>Select parent category</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Product Level** <span class="text-danger">(products adds only under those category item and can't create child category under this category)</span></label>
                            <div class="ml-4">
                                <input class="form-check-input" type="checkbox" id="defaultCheck1" name="product_level">
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
