<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['is_completed', 'status'];
    protected $appends = ['invoice_number'];

    CONST CASH_ON_DELIVERY = 1;

    CONST NOT_SHIPPED = 0;
    CONST SHIPPED = 1;

    public static function boot() {
        parent::boot();
        static::creating(function($model) {
            $model->invoice_no = Order::max('invoice_no') + 1;
        });
    }

    public function getInvoiceNumberAttribute() {
        return "K-". str_pad($this->invoice_no, 5, 0, STR_PAD_LEFT);
    }

    public function customer() {
        return $this->belongsTo(User::class, 'customer_id');
    }
}
