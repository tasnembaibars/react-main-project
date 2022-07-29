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
             'password'=>$request->input('password'),
         ]);
         $user->save();
         return $user;
      }
}
