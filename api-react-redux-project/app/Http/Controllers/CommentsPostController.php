<?php

namespace App\Http\Controllers;
use App\Models\Comments_post;
use Illuminate\Http\Request;

class CommentsPostController extends Controller
{

    public function store(Request $request){
        Comments_post::create($request->all());
        return redirect('/post');
    }

    public function create()
    {
       $comments= Comments_post::all();
        return response()->json($comments);
        

    }
}
