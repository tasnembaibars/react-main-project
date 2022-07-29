<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\CostumersController;

=======
use App\Http\Controllers\CommentsPostController;
<<<<<<< HEAD
use App\Http\Controllers\PostsController;
=======
>>>>>>> f1bd17273a9da65094ca9361e501d578847acc63
>>>>>>> eb411ca52398c37adb9c85b011b73d536b6ce2ca
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
<<<<<<< HEAD
// Route::post('/post',[CommentsPostController::class,'store']);
Route::post('/post',[PostsController::class,'store']);
Route::get('/posts',[PostsController::class,'create']);
=======
Route::post('/post',[CommentsPostController::class,'store']);
>>>>>>> f1bd17273a9da65094ca9361e501d578847acc63
>>>>>>> eb411ca52398c37adb9c85b011b73d536b6ce2ca
