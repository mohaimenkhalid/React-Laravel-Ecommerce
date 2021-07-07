<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductByRemark(Request $request) {
        $products = Product::where('remark', $request->remark)->get();
        return response()->json($products);
    }

    public function getCategoryAndProductByCategory($slug) {
        $category = Category::whereSlug($slug)->first();
        if($category->singleChildren->isEmpty()) {
            $data = Product::where('category_id', $category->id)->get();
            $response_type = 'product';
        } else {
            $response_type = 'category';
            $data = $category;
        }

        return response()->json([
            'response_type' => $response_type,
            'data' => $data
        ]);

    }

    public function productSearch(Request $request) {
        $query = $request->searchQuery;
        $products = Product::where('name', 'LIKE', '%'. $query .'%')->get();
        return response()->json($products);
    }

    public function getProductDetails($slug) {
        $product = Product::with(['category', 'product_details'])->where('slug', $slug)->first();
        return response()->json($product);
    }

}