<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index() {
        $parent_categories = Category::with('children')->whereNull('parent_id')->get();
        return view('backend.category.index', compact('parent_categories'));
    }

    public function create() {
        //we only get 3 level category which is not contain product level and level 3rd not contain any child
      $categories = Category::where(['product_level' => null, 'level' => 1])
                ->with('singleChildren' , function($q) {
                    $q->where('product_level', null);
                })->get();
        return view('backend.category.create', compact('categories'));
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $category = new Category();
        $category->name = $request->name;
        $category->slug = Str::slug(strtolower($request->name));
        $category->parent_id = $request->parent_id;
        $category->product_level = $request->product_level;
        $parent_category = Category::find($request->parent_id);
        if($parent_category) {
            $category->level = $parent_category->level+1;
        } else {
            $category->level = 1;
        }

        $image = $request->image;
        if ($image) {
            $imageName = Str::slug(strtolower($request->name)).'.'. $image->getClientOriginalExtension();
            $image->move(public_path(Category::IMAGE_UPLOAD_PATH), $imageName);
            $image_path = Category::IMAGE_UPLOAD_PATH.$imageName;
            $category->image = $image_path;
        }
        $category->save();

        return back()->with('success', 'Category added successfully');
    }

    public function edit(Category $category) {
        $categories = Category::where(['product_level' => null, 'level' => 1])
            ->with('singleChildren' , function($q) {
                $q->where('product_level', null);
            })->get();
        return view('backend.category.edit', compact('category', 'categories'));
    }

    public function update(Category $category, Request $request) {
        $request->validate([
            'name' => 'required',
            'slug' => 'required',
        ]);

        $category->name = $request->name;
        $category->slug = $request->slug;
        $category->parent_id = $request->parent_id;
        $category->product_level = $request->product_level ? $request->product_level : null;
        $category->featured = $request->featured ? $request->featured : 0;
        $parent_category = Category::find($request->parent_id);
        if($parent_category) {
            $category->level = $parent_category->level+1;
        } else {
            $category->level = 1;
        }
        $image = $request->image;
        if ($request->image) {
            if(!empty($category->image)){
                unlink(public_path($category->image));
            }
            $imageName = Str::slug(strtolower($request->name)).'.'. $image->getClientOriginalExtension();
            $image->move(public_path(Category::IMAGE_UPLOAD_PATH), $imageName);
            $image_path = Category::IMAGE_UPLOAD_PATH.$imageName;
            $category->image = $image_path;
        } else {
            $category->image = $request->old_image;
        }


        $category->save();

        return back()->with('success', 'Category updated successfully');
    }
}
