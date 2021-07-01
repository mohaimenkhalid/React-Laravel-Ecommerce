<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductByRemark(Request $request) {
        $products = Product::where('remark', $request->remark)->get();
        return response()->json($products);
    }

}
