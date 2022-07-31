<?php

namespace App\Http\Controllers;
use App\Models\Posts;
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
        // ->where('rule' , 1)
        return Posts::all();
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
      public function viewPost($id){
        return Posts::all()->where('id',$id);
       }
}
