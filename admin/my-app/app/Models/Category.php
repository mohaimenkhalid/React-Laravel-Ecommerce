<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, int $FEATURED_CATEGORY)
 */
class Category extends Model
{
    CONST FEATURED_CATEGORY = 1;
    CONST IMAGE_UPLOAD_PATH = '/upload/category/';

    public function singleChildren() {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->singleChildren()->with('children');
    }

}
