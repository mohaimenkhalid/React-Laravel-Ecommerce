<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index() {
        $products = Product::with(['product_details', 'category'])->get();
        return view('backend.product.index', compact('products'));
    }

    public function edit($id) {
        $categories = Category::where(['product_level' => 1])->get();
        $product = Product::with('product_details')->where('id', $id)->first();
        return view('backend.product.edit', compact('categories', 'product'));
    }

    public function create() {
        $categories = Category::where(['product_level' => 1])->get();
        return view('backend.product.create', compact('categories'));
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'price' => 'required',
            'unit' => 'required',
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->slug = Str::slug(strtolower($request->name));
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->price = $request->price;
        $product->special_price = $request->special_price;
        $product->unit = $request->unit;
        $product->product_code = $request->product_code;

        $image = $request->image;
        if ($image) {
            $image_path = $this->imageUpload($image, Product::IMAGE_UPLOAD_PATH);
            $product->image = $image_path;
        }

        if($product->save()) {
            $product_details = new ProductDetails();
            $product_details->product_id = $product->id;
            $product_details->description = $request->description;
            $product_details->short_description = $request->short_description;
            $slider_image1 = $request->image1;
            $slider_image2 = $request->image2;
            $slider_image3 = $request->image3;
            $slider_image4 = $request->image4;
            if ($slider_image1) {
                $image_path1 = $this->imageUpload($slider_image1, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image1 = $image_path1;
            }
            if ($slider_image2) {
                $image_path2 = $this->imageUpload($slider_image2, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image2 = $image_path2;
            }
            if ($slider_image3) {
                $image_path3 = $this->imageUpload($slider_image3, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image3 = $image_path3;
            }
            if ($slider_image4) {
                $image_path4 = $this->imageUpload($slider_image4, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image4 = $image_path4;
            }
            $product_details->save();
        }
        return back()->with('success', 'Product added successfully');

    }

    public function update($id, Request $request) {
        $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'price' => 'required',
            'unit' => 'required',
        ]);

        $product = Product::find($id);
        $product->name = $request->name;
        $product->slug = Str::slug(strtolower($request->name));
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->price = $request->price;
        $product->special_price = $request->special_price;
        $product->unit = $request->unit;
        $product->product_code = $request->product_code;

        $image = $request->image;
        if ($image) {
            if(!empty($product->image)){
                unlink(public_path($product->image));
            }
            $image_path = $this->imageUpload($image, Product::IMAGE_UPLOAD_PATH);
            $product->image = $image_path;
        }

        if($product->save()) {
            $product_details = ProductDetails::where('product_id', $product->id)->first();
            if(!$product_details) {
                $product_details = new ProductDetails();
            }
            $product_details->product_id = $product->id;
            $product_details->description = $request->description;
            $product_details->short_description = $request->short_description;
            $slider_image1 = $request->image1;
            $slider_image2 = $request->image2;
            $slider_image3 = $request->image3;
            $slider_image4 = $request->image4;
            if ($slider_image1) {
                if(!empty($product_details->image1)){
                    unlink(public_path($product_details->image1));
                }
                $image_path1 = $this->imageUpload($slider_image1, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image1 = $image_path1;
            }
            if ($slider_image2) {
                if(!empty($product_details->image2)){
                    unlink(public_path($product_details->image2));
                }
                $image_path2 = $this->imageUpload($slider_image2, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image2 = $image_path2;
            }
            if ($slider_image3) {
                if(!empty($product_details->image3)){
                    unlink(public_path($product_details->image3));
                }
                $image_path3 = $this->imageUpload($slider_image3, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image3 = $image_path3;
            }
            if ($slider_image4) {
                if(!empty($product_details->image4)){
                    unlink(public_path($product_details->image4));
                }
                $image_path4 = $this->imageUpload($slider_image4, Product::SLIDER_IMAGE_UPLOAD_PATH);
                $product_details->image4 = $image_path4;
            }
            $product_details->save();
        }
        return back()->with('success', 'Product added successfully');
    }

    public function imageUpload($image, $IMAGE_UPLOAD_PATH) {
        $imageName = time().'-'.substr(str_replace(['+', '/', '='], '', base64_encode(random_bytes(32))), 0, 32).'.'. $image->getClientOriginalExtension();
        $image->move(public_path($IMAGE_UPLOAD_PATH), $imageName);
        return $image_path = $IMAGE_UPLOAD_PATH.$imageName;
    }
}
