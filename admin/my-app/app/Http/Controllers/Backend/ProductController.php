<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index() {
        $products = Product::with(['product_details', 'category'])->get();
        return view('backend.product.index', compact('products'));
    }

    public function edit($id) {
        $product = Product::with(['product_details'])->first();
        return view('backend.product.edit', compact('product'));
    }

    public function create() {
        $categories = Category::where(['product_level' => 1])->get();
        return view('backend.product.create', compact('categories'));
    }
}
