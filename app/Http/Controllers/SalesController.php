<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Sales;
use App\Http\Resources\Sales as SalesResource;
use Unlu\Laravel\Api\QueryBuilder;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get saless
        $saless = Sales::paginate(15);

        //Return collection of saless as a resource
        return SalesResource::collection($saless);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $sales = $request->isMethod('put') ? Sales::findOrFail($request->sales_id) : new Sales;
        $sales->id = $request->input('sales_id');
        $sales->sales = $request->input('sales');
        $sales->id_user = $request->input('id_user');
        if ($sales->save()) {
            return new SalesResource($sales);
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
        // Get sales
        $sales = Sales::findOrFail($id);
        // Return single sales as a resource
        return new SalesResource($sales);
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
        // Get sales
        $sales = Sales::findOrFail($id);

        if ($sales->delete()) {
            return new SalesResource($sales);
        }
    }
}
