<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Note;
use App\Http\Resources\Note as NoteResource;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = Note::paginate(15);

        return NoteResource::collection($notes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $note = new Note;

        $note->note = $request->input('note');
        $note->id_user = $request->input('id_user');
        $note->id_activity = $request->input('id_activity');
        $note->id_photo = $request->input('id_photo');
        $note->activity_or_photo = $request->input('activity_or_photo');

        if ($note->save()) {
            return new NoteResource($note);
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
        $note = Note::findOrFail($id);

        return new NoteResource($note);
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
        $note = Note::findOrFail($id);

        $note->note = $request->input('note');
        $note->id_user = $request->input('id_user');
        $note->id_activity = $request->input('id_activity');
        $note->id_photo = $request->input('id_photo');
        $note->activity_or_photo = $request->input('activity_or_photo');

        if ($note->save()) {
            return new NoteResource($note);
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
        $note = Note::findOrFail($id);
        
        if ($note->delete()) {
            return new NoteResource($note);
        } 
    }
}
