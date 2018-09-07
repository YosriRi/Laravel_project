<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\UsersInfo;
use App\Http\Resources\UsersInfo as UsersInfoResource;
use Unlu\Laravel\Api\QueryBuilder;

class UsersInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $queryBuilder = new QueryBuilder(new Users, $request);

        return response()->json([
            'data' => $queryBuilder->build()->paginate()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $users = new UsersInfo;

        $users->firstname           = $request->input('firstname');
        $users->lastname            = $request->input('lastname');
        $users->address             = $request->input('address');
        $users->phone               = $request->input('phone');
        $users->sexe                = $request->input('sexe');
        $users->date_of_birth       = $request->input('date_of_birth');
        $users->user_or_admin       = $request->input('user_or_admin');
        $users->question_password   = $request->input('question_password');
        $users->email               = $request->input('email');
        $users->alt_email           = $request->input('alt_email');
        $users->password            = $request->input('password');

        if ($users->save()) {
            return new UsersInfoResource($users);
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
        $users = UsersInfo::findOrFail($id);

        return new UsersInfoResource($users);
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
        $users = UsersInfo::findOrFail($id);

        $users->firstname           = $request->input('firstname');
        $users->lastname            = $request->input('lastname');
        $users->address             = $request->input('address');
        $users->phone               = $request->input('phone');
        $users->sexe                = $request->input('sexe');
        $users->date_of_birth       = $request->input('date_of_birth');
        $users->user_or_admin       = $request->input('user_or_admin');
        $users->question_password   = $request->input('question_password');
        $users->email               = $request->input('email');
        $users->alt_email           = $request->input('alt_email');
        $users->password            = $request->input('password');

        if ($users->save()) {
            return new UsersInfoResource($users);
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
        $users = UsersInfo::findOrFail($id);

        if ($users->delete()) {
            return new UsersInfoResource($users);
        }
    }
}
