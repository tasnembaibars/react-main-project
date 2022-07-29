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
        // $comments= Comments_post::all();
        // return response()->json($comments);
        // $comments = DB::table('comments_posts')
         $comments= Comments_post::select('comments_posts.*','costumers.name')
        ->join('costumers','costumers.id','=','comments_posts.costumer_id')
        ->get();
        return $comments;

       
       
       // $users = DB::table('users')
    // ->join('contacts', 'users.id', '=', 'contacts.user_id')
    // ->join('orders', 'users.id', '=', 'orders.user_id')
    // ->select('users.*', 'contacts.phone', 'orders.price')
    // ->get();

    }

   

    
}
