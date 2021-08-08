<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\ShippingAddress;
use Illuminate\Http\Request;
use App\Models\OrderDetails;

class OrderController extends Controller
{
    public function placeOrder(Request $request) {
        if($request->payment_type == 'cash_on_delivery') {
            $payment_type = Order::CASH_ON_DELIVERY;
        }

        $carts = Cart::where('user_id', auth()->user()->id)->get();

        $order = new Order;
        $order->customer_id = auth()->user()->id;
        $order->payment_type = $payment_type;
        $order->save();

        $shipping_address = new ShippingAddress;
        $shipping_address->order_id = $order->order_id;
        $shipping_address->customer_id = $order->customer_id;
        $shipping_address->full_name = $request->full_name;
        $shipping_address->phone_no = $request->phone_no;
        $shipping_address->region = $request->region;
        $shipping_address->city = $request->city;
        $shipping_address->area = $request->area;
        $shipping_address->address = $request->address;
        $shipping_address->save();

        $orderDetails = new OrderDetails;
        foreach($carts as $cart) {
            $orderDetails->order_id = $cart->order_id;
            $orderDetails->user_id = $cart->user_id;
            $orderDetails->product_id = $cart->product_id;
            $orderDetails->product_color = $cart->product_color;
            $orderDetails->product_size = $cart->product_size;
            $orderDetails->quantity = $cart->quantity;
            $orderDetails->unit_price = $cart->unit_price;
            $orderDetails->total_price = $cart->total_price;
            $orderDetails->save();

            $cart->delete();
        }

        return response(['json' => 'Order placed successfully.']);

    }
}
