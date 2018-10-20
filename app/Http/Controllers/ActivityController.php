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
        // $activities = Activity::where('id_category', $request->id_category)
        //     ->where('id_type', $request->id_type)
        //     ->get();
        if ($request->id_category) {
            $activities = Activity::where('id_category', $request->id_category)->get();
        } else if ($request->id_type) {
            $activities = Activity::where('id_type', $request->id_type)->get();
        } else if ($request->id_city) {
            $activities = Activity::where('id_city', $request->id_city)->get();
        } else if ($request->id_region) {
            $activities = Activity::where('id_region', $request->id_region)->get();
        } else if ($request->id_country) {
            $activities = Activity::where('id_country', $request->id_country)->get();
        } else {
            $activities = Activity::all();
        }
        
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

        $activity->id_category          = $request->input('id_category');
        $activity->id_type              = $request->input('id_type');
        $activity->id_city              = $request->input('id_city');
        $activity->id_region            = $request->input('id_region');
        $activity->id_country           = $request->input('id_country');
        $activity->name                 = $request->input('name');
        $activity->description          = $request->input('description');
        $activity->amount               = $request->input('amount');
        $activity->start                = $request->input('start');
        $activity->end                  = $request->input('end');
        $activity->number_of_persons    = $request->input('number_of_persons');

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

        $activity->id_category          = $request->input('id_category');
        $activity->id_type              = $request->input('id_type');
        $activity->id_city              = $request->input('id_city');
        $activity->id_region            = $request->input('id_region');
        $activity->id_country           = $request->input('id_country');
        $activity->name                 = $request->input('name');
        $activity->description          = $request->input('description');
        $activity->amount               = $request->input('amount');
        $activity->start                = $request->input('start');
        $activity->end                  = $request->input('end');
        $activity->number_of_persons    = $request->input('number_of_persons');

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
