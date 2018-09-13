<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\UserInfo;
use App\Http\Resources\UserInfo as UserInfoResource;

class UserInfosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userInfos = UserInfo::paginate(15);

        return UserInfoResource::collection($userInfos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userInfo = new UserInfo;

        $userInfo->id_user             = $request->input('id_user');
        $userInfo->address             = $request->input('address');
        $userInfo->phone               = $request->input('phone');
        $userInfo->sexe                = $request->input('sexe');
        $userInfo->date_of_birth       = $request->input('date_of_birth');
        $userInfo->question_password   = $request->input('question_password');
        $userInfo->alt_email           = $request->input('alt_email');

        if ($userInfo->save()) {
            return new UserInfoResource($userInfo);
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
        $userInfo = UserInfo::findOrFail($id);

        return new UserInfoResource($userInfo);
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
        $userInfo = UserInfo::findOrFail($id);

        $userInfo->address             = $request->input('address');
        $userInfo->phone               = $request->input('phone');
        $userInfo->sexe                = $request->input('sexe');
        $userInfo->date_of_birth       = $request->input('date_of_birth');
        $userInfo->question_password   = $request->input('question_password');
        $userInfo->alt_email           = $request->input('alt_email');

        if ($userInfo->save()) {
            return new UserInfoResource($userInfo);
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
        $userInfo = UserInfo::findOrFail($id);

        if ($userInfo->delete()) {
            return new UserInfoResource($userInfo);
        }
    }
}
