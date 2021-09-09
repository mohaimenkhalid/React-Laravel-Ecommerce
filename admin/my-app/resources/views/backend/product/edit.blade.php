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
                    <h5>Product Update</h5>

                    <form class="mt-5" method="post" action="{{ route('admin.category.update', $product->id) }}" enctype="multipart/form-data">
                        @csrf

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
