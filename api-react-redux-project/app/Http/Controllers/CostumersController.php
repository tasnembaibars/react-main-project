<?php
use App\Models\Costumers;

namespace App\Http\Controllers;
use App\Http\Controllers;
use Illuminate\Http\Request;

class CostumersController extends Controller
{
    //

    
    public function registerAPI(Request $request)
    {

        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'name' => 'required|string',
        //         'email' => 'email|required|unique:users',
        //         'pass' => 'required|min:8',
              
        //     ]
        // );

        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }

        $user = new Costumers();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->input('pass'));
        $user->save();

        return response($user, 201);
    }
}
