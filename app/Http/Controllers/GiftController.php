<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Gift;
use App\Http\Resources\Gift as GiftResource;

class GiftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gifts = Gift::paginate(15);

        return GiftResource::collection($gifts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $gift = new Gift;

        $gift->description = $request->input('description');
        $gift->id_user = $request->input('id_user');
        $gift->id_activity = $request->input('id_activity');

        if ($gift->save()) {
            return new GiftResource($gift);
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
        $gift = Gift::findOrFail($id);

        return new GiftResource($gift);
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
        $gift = Gift::findOrFail($id);;

        $gift->description = $request->input('description');
        $gift->id_user = $request->input('id_user');
        $gift->id_activity = $request->input('id_activity');

        if ($gift->save()) {
            return new GiftResource($gift);
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
        $gift = Gift::findOrFail($id);
        
        if ($gift->delete()) {
            return new GiftResource($gift);
        } 
    }
}
