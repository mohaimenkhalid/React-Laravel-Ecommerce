<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['is_completed', 'status'];

    CONST CASH_ON_DELIVERY = 1;

    public static function boot() {
        parent::boot();
        static::creating(function($model) {
            $model->invoice_no = Order::max('invoice_no') + 1;
        });
    }
}
