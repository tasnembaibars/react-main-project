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
 Route::post('login', [CostumersController::class, 'loginAPI']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//view user info
Route::get('/profile/{id}',[CostumersController::class,'index']);

//edit user info
Route::post('/profile',[CostumersController::class,'store']);
Route::put('/profile/{id}',[CostumersController::class,'update']);
Route::get('/profile/{id}',[CostumersController::class,'edit']);











Route::post('/post',[PostsController::class,'store']);
Route::get('/posts',[PostsController::class,'create']);




// comment on post
Route::post('/comments_post',[CommentsPostController::class,'store']);
Route::get('/comments',[CommentsPostController::class,'create']);
Route::get('/commentor/{id}',[CostumersController::class,'view']);
Route::post('/comments_post',[CommentsPostController::class,'store']);
Route::put('/comment/{id}',[CommentsPostController::class,'update']);
Route::get('/comment/{id}',[CommentsPostController::class,'edit']);
Route::delete('/comment/{comment}',[CommentsPostController::class,'delete']);
Route::delete('/comment/{id}',[CommentsPostController::class,'index']);







//Araa
// start Post
Route::post('/post',[PostsController::class,'store']);
Route::get('/posts',[PostsController::class,'create']);


Route::get('/userposts/{id}',[PostsController::class,'view']);

// Route::get('images', [PostsController::class, 'index'])->name('images');
// Route::post('images', [PostsController::class, 'upload'])->name('images');
// Route::post('/post',[CommentsPostController::class,'store']);




// start Booking
Route::post('/Book',[BooksController::class,'store']);
// end Booking
//Araa
