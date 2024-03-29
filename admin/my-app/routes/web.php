<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\HomeController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\ProductController;
use \App\Http\Controllers\Backend\OrderController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return response('Server is running...');
});

Auth::routes(['register' => false]);

Route::group(['middleware' => 'auth'], function() {
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
    Route::get('/category', [CategoryController::class, 'index'])->name('admin.category.index');
    Route::get('/category/create', [CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/category/store', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/category/edit/{category}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::post('/category/update/{category}', [CategoryController::class, 'update'])->name('admin.category.update');

    Route::get('/product', [ProductController::class, 'index'])->name('admin.product.index');
    Route::get('/product/create', [ProductController::class, 'create'])->name('admin.product.create');
    Route::post('/product/store', [ProductController::class, 'store'])->name('admin.product.store');
    Route::get('/product/edit/{product}', [ProductController::class, 'edit'])->name('admin.product.edit');
    Route::post('/product/update/{id}', [ProductController::class, 'update'])->name('admin.product.update');

    Route::get('/orders', [OrderController::class, 'index'])->name('admin.orders.index');
    Route::get('/orders/view/{id}', [OrderController::class, 'view'])->name('admin.orders.view');
});
