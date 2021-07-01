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
}
