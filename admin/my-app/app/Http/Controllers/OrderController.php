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

        if($request->payment_type == 'pay_with_stripe') {
            $payment_type = Order::PAY_WITH_STRIPE;
        }

        $carts = json_decode($request->carts);
        $order = new Order;
        $order->customer_id = auth()->user()->id;
        $order->total_amount = $request->total_amount;
        $order->payment_type = $payment_type;
        $order->save();

        $shipping_address = new ShippingAddress;
        $shipping_address->order_id = $order->id;
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
            $orderDetails->order_id = $order->id;
            $orderDetails->product_id = $cart->product_id;
            $orderDetails->product_color = $cart->product_color;
            $orderDetails->product_size = $cart->product_size;
            $orderDetails->quantity = $cart->quantity;
            $orderDetails->unit_price = $cart->price;
            $orderDetails->total_price = $cart->subtotal;
            $orderDetails->save();
        }

        $order->update(['is_completed' => 1, 'status' => 'success']);

        return response()->json(['message' => 'Order placed successfully.']);
    }

    public function getMyOrder() {
        $orders = Order::with(['customer'])->where(['customer_id' => auth()->user()->id])->get();
        return response()->json($orders);
    }

    public function getOrderById($orderId) {
        $order = Order::with(['customer', 'orderDetails', 'shippingAddress'])->where(['customer_id' => auth()->user()->id, 'id' => $orderId])->first();
        if($order) {
            return response()->json($order);
        }
        return response()->json(['message' => 'Order not found.']);
    }


}
