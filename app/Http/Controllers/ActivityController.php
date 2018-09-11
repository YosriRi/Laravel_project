<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Activity;
use App\Http\Resources\Activity as ActivityResource;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $activities = Activity::paginate(15);
        
        return ActivityResource::collection($activities);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $activity = new Activity;

        $activity->name               = $request->input('name');
        $activity->type               = $request->input('type');
        $activity->duration           = $request->input('duration');
        $activity->description        = $request->input('description');
        $activity->date_of_activity   = $request->input('date_of_activity');

        if ($activity->save()) {
            return new ActivityResource($activity);
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
        $activity = Activity::findOrFail($id);

        return new ActivityResource($activity);
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
        $activity = Activity::findOrFail($id);

        $activity->name               = $request->input('name');
        $activity->type               = $request->input('type');
        $activity->duration           = $request->input('duration');
        $activity->description        = $request->input('description');
        $activity->date_of_activity   = $request->input('date_of_activity');

        if ($activity->save()) {
            return new ActivityResource($activity);
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
        $activity = Activity::findOrFail($id);

        if ($activity->delete()) {
            return new ActivityResource($activity);
        }
    }
}
