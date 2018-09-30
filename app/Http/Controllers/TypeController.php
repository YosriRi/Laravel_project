<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Type;
use App\Http\Resources\Type as TypeResource;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $types = Type::paginate(15);
        
        return TypeResource::collection($types);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $region = new Type;

        $region->name           = $request->input('name');
        $region->description    = $request->input('description');

        if ($region->save()) {
            return new TypeResource($region);
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
        $region = Type::findOrFail($id);

        return new TypeResource($region);
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
        $region = Type::findOrFail($id);

        $region->name           = $request->input('name');
        $region->description    = $request->input('description');

        if ($region->save()) {
            return new TypeResource($region);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $region = Type::findOrFail($id);

        if ($region->delete()) {
            return new TypeResource($region);
        }
    }
}
