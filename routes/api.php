<?php

use Illuminate\Http\Request;
use App\Users;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Get all users
Route::get('users', 'UsersController@index');

// Get one users
Route::get('users/{id}', 'UsersController@show');

// Post a new user
Route::post('users', 'UsersController@store');

// Update a user
Route::put('users/{id}', 'UsersController@update');

// Delete a user
Route::delete('users/{id}', 'UsersController@destroy');

