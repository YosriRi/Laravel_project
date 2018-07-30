<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Comment;
use App\Http\Resources\Comment as CommentResource;
use Unlu\Laravel\Api\QueryBuilder;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get comments
        $comments = Comment::paginate(15);

        //Return collection of comments as a resource
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
        $comment = $request->isMethod('put') ? Comment::findOrFail($request->comment_id) : new Comment;
        $comment->id = $request->input('comment_id');
        $comment->comment = $request->input('comment');
        $comment->id_user = $request->input('id_user');
        if($comment->save()) {
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
        // Get comment
        $comment = Comment::findOrFail($id);
        // Return single comment as a resource
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
        // Get comment
        $comment = Comment::findOrFail($id);
        
        if($comment->delete()) {
            return new CommentResource($comment);
        } 
    }
}
