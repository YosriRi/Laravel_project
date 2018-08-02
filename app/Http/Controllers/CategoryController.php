<?php

namespace App\Http\Controllers\api;

use app\category;
use App\Http\Requests;
use App\Http\Resources\Category as CategoryResource;
use Unlu\Laravel\Api\QueryBuilder;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get categories
        $categories = Category::paginate(15);

        //Return collection of categories as a resource
        return CategoryResource::collection($categories);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = $request->isMethod('put') ? Category::findOrFail($request->category_id) : new Category;
        $category->id = $request->input('category_id');
        $category->category = $request->input('category');
        $category->id_user = $request->input('id_user');
        if ($category->save()) {
            return new CategoryResource($category);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Get category
        $category = Category::findOrFail($id);
        // Return single category as a resource
        return new CategoryResource($category);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Get category
        $category = Category::findOrFail($id);

        if ($category->delete()) {
            return new CategoryResource($category);
        }
    }
}
