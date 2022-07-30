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
}
