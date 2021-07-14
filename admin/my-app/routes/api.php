<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\AuthController;

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::get('/getVisitorDetails', [VisitorController::class, 'getVisitorDetails']);
    Route::post('/postContactDetails', [ContactController::class, 'postContactDetails']);
    Route::get('/getSiteInfo', [SiteInfoController::class, 'getSiteInfo']);

    //category & product
    Route::get('/getAllCategories', [CategoryController::class, 'getAllCategories']);
    Route::get('/getFeaturedCategory', [CategoryController::class, 'getFeaturedCategory']);

    Route::get('/getProductByRemark', [ProductController::class, 'getProductByRemark']);
    Route::get('/getCategoryAndProductByCategory/{slug}', [ProductController::class, 'getCategoryAndProductByCategory']);
    Route::get('/productSearch', [ProductController::class, 'productSearch']);
    Route::get('/getProductDetails/{slug}', [ProductController::class, 'getProductDetails']);
    Route::get('/getNotifications', [NotificationController::class, 'getNotifications']);


    //Authentication api
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/register', [AuthController::class, 'register']);

    Route::middleware('auth:api')->group(function () {
        Route::post('/auth/logout', [AuthController::class, 'logout']);
    });
});


