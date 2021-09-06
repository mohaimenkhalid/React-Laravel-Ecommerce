<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\HomeController;
use App\Http\Controllers\Backend\CategoryController;

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

Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
Route::get('/category', [CategoryController::class, 'index'])->name('admin.category.index');
Route::get('/category/create', [CategoryController::class, 'create'])->name('admin.category.create');
Route::post('/category/store', [CategoryController::class, 'store'])->name('admin.category.store');
