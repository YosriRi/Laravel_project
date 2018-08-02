<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Photo;
use App\Http\Resources\Photo as PhotoResource;
use Unlu\Laravel\Api\QueryBuilder;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get photos
        $photos = Photo::paginate(15);

        //Return collection of photos as a resource
        return PhotoResource::collection($photos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $photo = $request->isMethod('put') ? Photo::findOrFail($request->photo_id) : new Photo;
        $photo->id = $request->input('photo_id');
        $photo->photo = $request->input('photo');
        $photo->id_user = $request->input('id_user');
        if($photo->save()) {
            return new PhotoResource($photo);
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
        // Get photo
        $photo = Photo::findOrFail($id);
        // Return single photo as a resource
        return new PhotoResource($photo);
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
        // Get photo
        $photo = Photo::findOrFail($id);
        
        if($photo->delete()) {
            return new PhotoResource($photo);
        } 
    }
}
