<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Promotion;
use App\Http\Resources\Promotion as PromotionResource;

class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $promotions = Promotion::paginate(15);

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
        $promotion = new Promotion;

        $promotion->id_category = $request->input('id_category');
        $promotion->id_type     = $request->input('id_type');
        $promotion->description = $request->input('description');
        $promotion->amount      = $request->input('amount');

        if ($promotion->save()) {
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
        $promotion = Promotion::findOrFail($id);

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
        $promotion = Promotion::findOrFail($id);

        $promotion->id_category = $request->input('id_category');
        $promotion->id_type     = $request->input('id_type');
        $promotion->description = $request->input('description');
        $promotion->amount      = $request->input('amount');

        if ($promotion->save()) {
            return new PromotionResource($promotion);
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
        $promotion = Promotion::findOrFail($id);
        
        if ($promotion->delete()) {
            return new PromotionResource($promotion);
        } 
    }
}
