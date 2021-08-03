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

        $check_cart = Cart::where([
            'user_id' => auth()->user()->id,
            'product_id' => $product->id,
            'product_color' => $product_color,
            'product_size' => $product_size
        ])->first();
        if(!empty($check_cart)) {
            $cart = $check_cart;
            $quantity = $quantity + $check_cart->quantity;
            $message = 'Your Cart Updated Successfully';
        } else {
            $cart = new Cart;
            $message = 'product successfully added your to cart';
        }

        if($product->special_price) {
            $unit_price = $product->special_price;
        } else {
            $unit_price = $product->price;
        }
        $total_price = $unit_price * $quantity;

        $cart->user_id = $user_id;
        $cart->product_id = $product->id;
        $cart->quantity = $quantity;
        $cart->product_color = $product_color;
        $cart->product_size = $product_size;
        $cart->unit_price = $unit_price;
        $cart->total_price = $total_price;
        $cart->save();

        return response()->json(['message' => $message]);
    }

    public function getCart() {
        $cart = Cart::with('product')->where(['user_id' => auth()->user()->id])->get();
        return response()->json($cart);
    }

    public function updateCartProductQuantity($cartId, $type) {
        $cartProduct = Cart::find($cartId);
        if($type == 'increment') {
            $cartProduct->increment('quantity');
            $cartProduct->total_price = $cartProduct->quantity * $cartProduct->unit_price;
            $cartProduct->save();
        } else {
            if($cartProduct->quantity == 1) {
                $cartProduct->delete();
            } else {
                $cartProduct->decrement('quantity');
                $cartProduct->total_price = $cartProduct->quantity * $cartProduct->unit_price;
                $cartProduct->save();
            }
        }
        return response()->json(['message' => 'Cart updated successfully.']);
    }
}
