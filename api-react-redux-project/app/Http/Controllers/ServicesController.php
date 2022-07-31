<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Services;

class ServicesController extends Controller
{
    //












































































































































    function index()
    {
        return Services::all();
    }

    function single($id)
    {
        return Services::firstWhere('id', $id);
    }



    // Create (POST) function
    function store(Request $request)
    {
        //validation 
        // request()->validate([
        //     'title' => 'required',
        //     'content' => 'required'
        // ]);

        //create command


        $filepath = $request->file('file')->store('products');



        return Services::create([
            'title' => request('title'),
            'price' => request('price'),
            'description' => request('description'),
            'picture' => $filepath

        ]);
    }



    // Update (PUT) function
    function update(Services $service)
    {


        return $service->update([
            'title' => request('title'),
            'price' => request('price'),
            'description' => request('description'),
            'picture' => request('picture')

        ]);


        // return $product->update([
        //     'title' => request('name'),
        //     'content' => request('content')

        // ]);


    }



    // Delete (DELETE) function
    function destroy(Services $service)
    {
        return  $service->delete();
    }
}
