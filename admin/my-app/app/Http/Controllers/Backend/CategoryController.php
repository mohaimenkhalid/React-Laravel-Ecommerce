<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        $parent_categories = Category::with('children')->whereNull('parent_id')->get();
        return view('backend.category.index', compact('parent_categories'));
    }

    public function create() {
        return view('backend.category.create');
    }

    public function store(Request $request) {
        return $request->all();
    }
}
