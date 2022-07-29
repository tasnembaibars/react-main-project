<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{

    // function store2 (Request $request){
    //     Posts::create($request->all());
    //     // return redirect('/post');

    // }
    public function store(Request $request){
       $Posts= new Posts;
       $Posts->post= $request->post;
       $Posts->rule= $request->rule;
       $Posts->costumer_id= $request->costumer_id;
       $Posts->likes= $request->likes;
       $Posts->save();
    }
    function create (){
        $posts = Posts::all()->where('rule' , 1);
        // return response()->json($posts);
        return response()->json(['message' => 'task was successful']);
    }
}
