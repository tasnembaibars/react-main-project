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



    public function view($id)
    {

        // return Posts::all()->where('costumer_id' ,$id);
        $tables =Posts::where('costumer_id', $id)->get();
        if($tables->count() > 0){

            return response()->json($tables);
        }
         return response()->json(['message' => 'No posts found'], 404);
         
    }
}
