<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Gift;
use App\Http\Resources\Gift as GiftResource;
use Unlu\Laravel\Api\QueryBuilder;

class GiftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get gifts
        $gifts = Gift::paginate(15);

        //Return collection of gifts as a resource
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
        $gift = $request->isMethod('put') ? Gift::findOrFail($request->gift_id) : new Gift;
        $gift->id = $request->input('gift_id');
        $gift->gift = $request->input('gift');
        $gift->id_user = $request->input('id_user');
        if($gift->save()) {
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
        // Get gift
        $gift = Gift::findOrFail($id);
        // Return single gift as a resource
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
        // Get gift
        $gift = Gift::findOrFail($id);
        
        if($gift->delete()) {
            return new GiftResource($gift);
        } 
    }
}
