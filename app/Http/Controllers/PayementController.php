<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Payement;
use App\Http\Resources\Payement as PayementResource;
use Unlu\Laravel\Api\QueryBuilder;

class PayementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get payements
        $payements = Payement::paginate(15);

        //Return collection of payements as a resource
        return PayementResource::collection($payements);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $payement = $request->isMethod('put') ? Payement::findOrFail($request->payement_id) : new Payement;
        $payement->id = $request->input('payement_id');
        $payement->payement = $request->input('payement');
        $payement->id_user = $request->input('id_user');
        if($payement->save()) {
            return new PayementResource($payement);
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
        // Get payement
        $payement = Payement::findOrFail($id);
        // Return single payement as a resource
        return new PayementResource($payement);
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
        // Get payement
        $payement = Payement::findOrFail($id);
        
        if($payement->delete()) {
            return new PayementResource($payement);
        } 
    }
}
