<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Activites;
use App\Http\Resources\Activities as ActivitiesResource;

class ActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities = Activities::paginate();

        return ActivitiesResource::collection($activities);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $activities = new Activities;

        $activities->name               = $request->input('name');
        $activities->type               = $request->input('type');
        $activities->duration           = $request->input('duration');
        $activities->description        = $request->input('description');
        $activities->date_of_activity   = $request->input('date_of_activity');

        if ($activities->save()) {
            return new ActivitiesResource($activities);
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
        $activities = Activities::findOrFail($id);

        return new ActivitiesResource($activities);
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
        $activities = Activities::findOrFail($id);

        $activities->name               = $request->input('name');
        $activities->type               = $request->input('type');
        $activities->duration           = $request->input('duration');
        $activities->description        = $request->input('description');
        $activities->date_of_activity   = $request->input('date_of_activity');

        if ($activities->save()) {
            return new ActivitiesResource($activities);
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
        $activities = Activities::findOrFail($id);

        if ($activities->delete()) {
            return new ActivitiesResource($activities);
        }
    }
}
