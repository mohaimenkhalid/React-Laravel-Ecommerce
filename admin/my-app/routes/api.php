<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteInfoController;


Route::get('/getVisitorDetails', [VisitorController::class, 'getVisitorDetails']);
Route::post('/postContactDetails', [ContactController::class, 'postContactDetails']);
Route::get('/getSiteInfo', [SiteInfoController::class, 'getSiteInfo']);
