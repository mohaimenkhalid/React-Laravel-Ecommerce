<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function singleChildren() {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->singleChildren()->with('children');
    }

}
