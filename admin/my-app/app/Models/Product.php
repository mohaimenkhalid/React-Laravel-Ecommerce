<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    CONST FEATURED_PRODUCT = 1;
    CONST NEW_PRODUCT = 2;
    CONST COLLECTION_PRODUCT = 3;
    CONST IMAGE_UPLOAD_PATH = '/upload/products/';
    CONST SLIDER_IMAGE_UPLOAD_PATH = '/upload/products/slider/';

    public function product_details() {
        return $this->hasOne(ProductDetails::class, 'product_id');
    }

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
