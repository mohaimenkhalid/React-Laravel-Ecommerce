<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategories() {
        return $parent_categories = Category::with('children')->whereNull('parent_id')->get();
    }

    public function getFeaturedCategory(){
        $category = Category::where('featured', Category::FEATURED_CATEGORY)
                    ->take(6)->get();
        return response()->json($category);
    }

}
