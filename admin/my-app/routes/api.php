<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;


Route::get('/getVisitorDetails', [VisitorController::class, 'getVisitorDetails']);
Route::post('/postContactDetails', [ContactController::class, 'postContactDetails']);
Route::get('/getSiteInfo', [SiteInfoController::class, 'getSiteInfo']);

//category & product

Route::get('/getAllCategories', [CategoryController::class, 'getAllCategories']);
Route::get('/getFeaturedCategory', [CategoryController::class, 'getFeaturedCategory']);


Route::get('/getProductByRemark', [ProductController::class, 'getProductByRemark']);
Route::get('/getCategoryAndProductByCategory/{slug}', [ProductController::class, 'getCategoryAndProductByCategory']);
Route::get('/productSearch', [ProductController::class, 'productSearch']);
