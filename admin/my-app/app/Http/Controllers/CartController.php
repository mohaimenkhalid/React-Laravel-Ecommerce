<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use App\Models\Product;

class CartController extends Controller
{
    public function addToCart(Request $request) {
        $product = Product::find($request->product_id);
        $user_id = auth()->user()->id;
        $product_color = $request->product_color;
        $product_size = $request->product_size;
        $quantity = $request->quantity;
        if($product->special_price) {
            $unit_price = $product->special_price;
        } else {
            $unit_price = $product->price;
        }
        $total_price = $unit_price * $quantity;

        $cart = new Cart;
        $cart->user_id = $user_id;
        $cart->product_id = $product->id;
        $cart->quantity = $quantity;
        $cart->product_color = $product_color;
        $cart->product_color = $product_size;
        $cart->unit_price = $unit_price;
        $cart->total_price = $total_price;
        $cart->save();

        return response()->json($cart);
    }
}
