<?php

namespace App\Http\Controllers;
use App\Models\Comments_post;
use Illuminate\Http\Request;

class CommentsPostController extends Controller
{

    public function store(Request $request){
        // Comments_post::create($request->all());
       $comment= new Comments_post;
       $comment->comment= $request->comment;
       $comment->costumer_id= $request->costumer_id;
       $comment->post_id= $request->post_id;
       $comment->save();  
    }

    public function create()
    {
       $comments= Comments_post::all();
        return response()->json($comments);
        

    }
}
