<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{

    function store (Request $request){
        Posts::create($request->all());
        return redirect('/post');
    }
    function create (){
        $posts = Posts::all()->where('rule' , 1);
        return response()->json($posts);
    }
}
