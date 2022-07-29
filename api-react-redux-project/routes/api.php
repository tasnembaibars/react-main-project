<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CostumersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/profile/{id}',[CostumersController::class,'index']);

//edit
Route::post('/profile',[CostumersController::class,'store']);
Route::put('/profile/{id}',[CostumersController::class,'update']);
Route::get('/profile/{id}',[CostumersController::class,'edit']);