<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Users;
use App\Http\Resources\Users as UsersResource;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = Users::paginate(10);

        return UsersResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $users = new Users;

        $users->firstname = $request->input('firstname');
        $users->lastname = $request->input('lastname');
        $users->email = $request->input('email');
        $users->password = $request->input('password');

        if ($users->save()) {
            return new UsersResource($users);
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
        $users = Users::findOrFail($id);

        return new UsersResource($users);
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
        $users = Users::findOrFail($id);

        $users->firstname = $request->input('firstname');
        $users->lastname = $request->input('lastname');
        $users->email = $request->input('email');
        $users->password = $request->input('password');

        if ($users->save()) {
            return new UsersResource($users);
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
        $users = Users::findOrFail($id);

        if ($users->delete()) {
            return new UsersResource($users);
        }
    }
}
