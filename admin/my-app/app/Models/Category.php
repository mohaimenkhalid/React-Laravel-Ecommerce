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

    protected $appends = ['category_path'];

    public function singleChildren() {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->singleChildren()->with('children');
    }

    public function getCategoryPathAttribute() {
          $string = $this->name;
          $parent =  Category::find($this->parent_id);
          if($parent) {
              $string = $parent->name.'/'.$string;
              $parent_root =  Category::find($parent->parent_id);
              if($parent_root) {
                  $string = $parent_root->name.'/'.$string;
              }
          }
          return $string;
    }

}
