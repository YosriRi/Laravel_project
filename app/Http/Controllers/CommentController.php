<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Comment;
use App\Http\Resources\Comment as CommentResource;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Comment::paginate(15);

        return CommentResource::collection($comments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment;

        $comment->comment = $request->input('comment');
        $comment->id_user = $request->input('id_user');
        $comment->id_activity = $request->input('id_activity');
        $comment->id_photo = $request->input('id_photo');
        $comment->activity_or_photo = $request->input('activity_or_photo');

        if ($comment->save()) {
            return new CommentResource($comment);
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
        $comment = Comment::findOrFail($id);

        return new CommentResource($comment);
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
        $comment = Comment::findOrFail($id);

        $comment->comment = $request->input('comment');
        $comment->id_user = $request->input('id_user');
        $comment->id_activity = $request->input('id_activity');
        $comment->id_photo = $request->input('id_photo');
        $comment->activity_or_photo = $request->input('activity_or_photo');

        if ($comment->save()) {
            return new CommentResource($comment);
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
        $comment = Comment::findOrFail($id);
        
        if ($comment->delete()) {
            return new CommentResource($comment);
        } 
    }
}
