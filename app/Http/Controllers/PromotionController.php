<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Promotion;
use App\Http\Resources\Promotion as PromotionResource;
use Unlu\Laravel\Api\QueryBuilder;

class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get promotions
        $promotions = Promotion::paginate(15);

        //Return collection of promotions as a resource
        return PromotionResource::collection($promotions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $promotion = $request->isMethod('put') ? Promotion::findOrFail($request->promotion_id) : new Promotion;
        $promotion->id = $request->input('promotion_id');
        $promotion->promotion = $request->input('promotion');
        $promotion->id_user = $request->input('id_user');
        if($promotion->save()) {
            return new PromotionResource($promotion);
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
        // Get promotion
        $promotion = Promotion::findOrFail($id);
        // Return single promotion as a resource
        return new PromotionResource($promotion);
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
        // Get promotion
        $promotion = Promotion::findOrFail($id);
        
        if($promotion->delete()) {
            return new PromotionResource($promotion);
        } 
    }
}
