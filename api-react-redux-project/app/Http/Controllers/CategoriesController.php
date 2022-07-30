<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;

class CategoriesController extends Controller
{
    //












































































































































    function index()
    {
        return Categories::all();
    }

    function single($id)
    {
        return Categories::firstWhere('id', $id);
    }



    // Create (POST) function
    function store(Request $request)
    {
        // validation 
        request()->validate([

            'name' => 'required|max:100'

        ]);


        //create query
        return Categories::create([
            'name' => request('name')
        ]);
    }



    // Update (PUT) function
    function update(Categories $category)
    {

        request()->validate([
            'name' => 'required|max:100'
        ]);

        return $category->update([
            'name' => request('name')
        ]);
    }



    // Delete (DELETE) function
    function destroy(Categories $category)
    {
        return  $category->delete();
    }
}
