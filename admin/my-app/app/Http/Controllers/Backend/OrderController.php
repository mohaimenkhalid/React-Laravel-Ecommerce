<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index() {
        $orders = Order::with(['shippingAddress', 'customer'])->orderBy('created_at', 'DESC')->get();
        return view('backend.orders.index', compact('orders'));
    }

    public function view($orderId) {
         $order = Order::with(['orderDetails', 'shippingAddress'])->find($orderId);
         return view('backend.orders.view', compact('order'));

    }
}
