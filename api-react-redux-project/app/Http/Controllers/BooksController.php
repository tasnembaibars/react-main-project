<?php

namespace App\Http\Controllers;
use App\Models\Books;
use Illuminate\Http\Request;

class BooksController extends Controller
{

    public function store(Request $request){
        $Books= new Books;
        $Books->email= $request->email;
        $Books->phone= $request->phone;
        $Books->hour= $request->hour;
        $Books->date= $request->date;
        $Books->save();
     }





































































































































     function index1()
     {
 
         return Books::all();
     }
 
     function single1($id)
     {
         return Books::firstWhere('id', $id);
     }
 
 
 
     // Create (POST) function
     function store1(Request $request)
     {
         //validation 
         request()->validate([
            //  'date' => 'required',
            //  'hour' => 'required',
            //  'date' => 'required',
             'book_state' => 'required',
             'service_id' => 'required',
             'costumer_id' => 'required'
         ]);
 
         //create command
         return Books::create([
             'date' => request('date'),
             'phone' => request('phone'),
             'hour' => request('hour'),
             'email' => request('email'),
             'book_state' => request('book_state'),
             'service_id' => request('service_id'),
             'costumer_id' => request('costumer_id')
 
 
         ]);
     }
 
 
     function changeState(Books $book){
         return $book->update([
             'book_state' => request('book_state')
         ]);
 
 
     }
     // Update (PUT) function
     function update1(Books $book)
     {
 
 
         //validation 
         request()->validate([
             'date' => 'required',
             'hour' => 'required',
             'date' => 'required',
             'book_state' => 'required',
             'service_id' => 'required',
             'costumer_id' => 'required'
         ]);
 
     //Update query 
         return $book->update([
 
             'date' => request('date'),
             'phone' => request('phone'),
             'hour' => request('hour'),
             'semail' => request('email'),
             'book_state' => request('book_state'),
             'service_id' => request('service_id'),
             'costumer_id' => request('costumer_id')
         ]);
 
     }
 
 
 
     // Delete (DELETE) function
     function destroy1(Books $book)
     {
         return  $book->delete();
     }
 
}
