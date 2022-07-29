<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\CostumersController;

=======
use App\Http\Controllers\CommentsPostController;
>>>>>>> f1bd17273a9da65094ca9361e501d578847acc63
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

<<<<<<< HEAD
Route::get('/profile/{id}',[CostumersController::class,'index']);

//edit
Route::post('/profile',[CostumersController::class,'store']);
Route::put('/profile/{id}',[CostumersController::class,'update']);
Route::get('/profile/{id}',[CostumersController::class,'edit']);
=======








// comment on post
Route::post('/post',[CommentsPostController::class,'store']);
>>>>>>> f1bd17273a9da65094ca9361e501d578847acc63
