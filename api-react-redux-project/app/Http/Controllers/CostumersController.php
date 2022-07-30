<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Costumers;

class CostumersController extends Controller
{
    //view user data in profile
    public function index($id)
    {
      return Costumers::find($id);
     
    }


    public function store(Request $request ,User $User)
    {
        $request->validate([
        'name',
        'email',
        'phone',
        'password',

        ]);
  
        
        $User->name=$request->name;
         $User->email=$request->email;
         $User->password=$request->password;
       
        $User->save(); 
    }


    public function edit($id)
    {
        return Costumers::find($id);
  
         }



   public function update(Request $request,$id)
         {
             $user=Costumers::find($id);
             $user->update([
             'name'=>$request->input('name'),
             'email'=>$request->input('email'),
             'phone'=>$request->input('phone'),
             'password'=>$request->input('password'),
             'picture'=>$request->input('picture'),
         ]);
         $user->save();
         return $user;
      }


    //upload image 
    // public function upload(Request $request) {
    //     $imagesName = [];
    //     $response = [];

    //     $validator = Validator::make($request->all(),
    //         [
    //             'images' => 'required',
    //             'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    //         ]
    //     );

    //     if($validator->fails()) {
    //         return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
    //     }

    //     if($request->has('images')) {
    //         foreach($request->file('images') as $image) {
    //             $filename = time().rand(3). '.'.$image->getClientOriginalExtension();
    //             $image->move('uploads/', $filename);

    //             Image::create([
    //                 'picture' => $filename
    //             ]);
    //         }

    //         $response["status"] = "successs";
    //         $response["message"] = "Success! image(s) uploaded";
    //     }

    //     else {
    //         $response["status"] = "failed";
    //         $response["message"] = "Failed! image(s) not uploaded";
    //     }
    //     return response()->json($response);
    // }
}
