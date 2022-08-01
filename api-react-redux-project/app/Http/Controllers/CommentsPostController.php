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

    public function create($id)
    {
        
<<<<<<< HEAD
         $comments= Comments_post::select('comments_posts.*','costumers.*')
=======
         $comments= Comments_post::select('comments_posts.*','comments_posts.id as com','costumers.*')
>>>>>>> 9a45d31a5269e1447f90bd9d1f2b07b21a8030c6
        ->join('costumers','costumers.id','=','comments_posts.costumer_id')
        ->join('posts','posts.id','=','comments_posts.post_id')
        ->where('posts.id',$id)
        ->get();
        return $comments;

       
       
  

    }

        //select comment data/id
   public function edit($id){
    return Comments_post::find($id);
  
  
     }
  
     public function update(Request $request,$id)
     {
         $comment=Comments_post::find($id);
<<<<<<< HEAD
         $comment->update([
         'comment'=>$request->input('comment'),
        //  'costumer_id'=>$request->input('costumer_id'),
        //  'post_id'=>$request->input('post_id'),
=======
    //      $comment->update([
    //      'comment'=>request('comment'),
    //     //  'costumer_id'=>$request->input('costumer_id'),
    //     //  'post_id'=>$request->input('post_id'),
>>>>>>> 9a45d31a5269e1447f90bd9d1f2b07b21a8030c6
         
    //  ]);
    $comment->comment=$request->comment;
     $comment->save();
     return $comment;
  }
  public function index($id){
    return Comments_post::find($id);

  }

  public function delete(Comments_post $comment)
      {
          return  $comment->delete();
      }

    
}
