<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Reservation;
use App\Http\Resources\Reservation as ReservationResource;
use Unlu\Laravel\Api\QueryBuilder;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get reservations
        $reservations = Reservation::paginate(15);

        //Return collection of reservations as a resource
        return ReservationResource::collection($reservations);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reservation = $request->isMethod('put') ? Reservation::findOrFail($request->reservation_id) : new Reservation;
        $reservation->id = $request->input('reservation_id');
        $reservation->reservation = $request->input('reservation');
        $reservation->id_user = $request->input('id_user');
        if($reservation->save()) {
            return new ReservationResource($reservation);
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
        // Get reservation
        $reservation = Reservation::findOrFail($id);
        // Return single reservation as a resource
        return new ReservationResource($reservation);
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
        // Get reservation
        $reservation = Reservation::findOrFail($id);
    
        if($reservation->delete()) {
            return new ReservationResource($reservation);
        } 
    }
}
