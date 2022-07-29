<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CostumersController;

use App\Http\Controllers\CommentsPostController;

use App\Http\Controllers\PostsController;

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
/*Login and Register */
 Route::post('register', [CostumersController::class, 'registerAPI']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/profile/{id}',[CostumersController::class,'index']);

//edit
Route::post('/profile',[CostumersController::class,'store']);
Route::put('/profile/{id}',[CostumersController::class,'update']);
Route::get('/profile/{id}',[CostumersController::class,'edit']);









// comment on post

// Route::post('/post',[CommentsPostController::class,'store']);
Route::post('/post',[PostsController::class,'store']);
Route::get('/posts',[PostsController::class,'create']);
Route::post('/comments_post',[CommentsPostController::class,'store']);

