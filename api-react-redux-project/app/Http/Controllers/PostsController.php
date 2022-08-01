<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use App\Models\Comments_post;
use Illuminate\Http\Request;

class PostsController extends Controller
{


    public function store(Request $request){
       $Posts= new Posts;
       $Posts->post= $request->post;

       $Posts->costumer_id= $request->costumer_id;

       $Posts->save();
    }

    function create (){
        $post= Posts::select('posts.*','costumers.*')
        ->join('costumers','costumers.id','=','posts.costumer_id')
       
       ->get();
        return $post;
        
    }
    function show ($id){
        $post= Posts::select('posts.*','costumers.*')
        ->join('costumers','costumers.id','=','posts.costumer_id')
       
       ->get()->firstwhere('id',$id);
        return $post;
        
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
    public function update(Request $request,$id)
         {
             $post=Posts::find($id);
             $post->update([
             'likes'=>$request->input('likes'),

         ]);
         $post->save();
         return $post;
      }
      public function viewP($id){
        return Posts::find($id);
        
       }
       public function viewComments($id){
        return Comments_post::all()->where('post_id',$id);
       }
}
