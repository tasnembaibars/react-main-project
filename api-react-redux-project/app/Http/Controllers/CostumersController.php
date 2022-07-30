<?php


namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\Costumers;

class CostumersController extends Controller
{

    //

    
    public function registerAPI(Request $request)
    {

       

      $validator = Validator:: make($request->all(),
      
      [
        'name' => 'required',
        'email' => 'required|unique:costumers,email',
        'password' => 'required|min:8',
      ],
      
      );

           if ($validator->fails()) {
             return response()->json(['errors' => $validator->errors()->all()]);
           }

          $costumer = Costumers::create($request->all());

          $costumer->save();

        // $user = new Costumers();
        // $user->name = $request->name;
        // $user->email = $request->email;
        // $user->password = $request->password;
        // $user->save();

        // return $user;
    }

    public function loginAPI(Request $request)
    {
      
        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'email' => 'email|required',
        //         'password' => 'required|min:8',
        //     ]
        // );

        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }

        $user = Costumers::where('email', request('email'))->first();

   
        if (!$user || !Hash::check($request->input('password'), $user->password)) {
            return response()->json([
                'errors' => ['Email or Password is incorrect']
            ]);
        }
        return response($user, 201);
        
       
    }

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





















      //selects users data for comments page
      public function view($id){
       return Costumers::all()->where('id',$id);
      }

}
