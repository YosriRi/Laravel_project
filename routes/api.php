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

/************************* USERS *************************/
// Get all users
Route::get('users', 'UsersController@index');

// Get one user
Route::get('users/{id}', 'UsersController@show');

// Post a new user
Route::post('users', 'UsersController@store');

// Update a user
Route::put('users/{id}', 'UsersController@update');

// Delete a user
Route::delete('users/{id}', 'UsersController@destroy');

/************************* ACTIVITIES *************************/
// Get all activities
Route::get('activities', 'ActivitiesController@index');

// Get one activity
Route::get('activities/{id}', 'ActivitiesController@show');

// Post a new activity
Route::post('activities', 'ActivitiesController@store');

// Update an activity
Route::put('activities/{id}', 'ActivitiesController@update');

// Delete an activity
Route::delete('activities/{id}', 'ActivitiesController@destroy');

/************************* CATEGORIES *************************/

// Get all users
Route::get('categories', 'CategoryController@index');

// Get one user
Route::get('category/{id}', 'CategoryController@show');

// Post a new user
Route::post('category', 'CategoryController@store');

// Update a user
Route::put('category/{id}', 'CategoryController@update');

// Delete a user
Route::delete('category/{id}', 'CategoryController@destroy');

/************************* COMMENTS *************************/
// Get all users
Route::get('comments', 'CommentController@index');

// Get one user
Route::get('comment/{id}', 'CommentController@show');

// Post a new user
Route::post('comment', 'CommentController@store');

// Update a user
Route::put('comment/{id}', 'CommentController@update');

// Delete a user
Route::delete('comment/{id}', 'CommentController@destroy');

/************************* PHOTOS *************************/
// Get all users
Route::get('photos', 'PhotoController@index');

// Get one user
Route::get('photo/{id}', 'PhotoController@show');

// Post a new user
Route::post('photo', 'PhotoController@store');

// Update a user
Route::put('photo/{id}', 'PhotoController@update');

// Delete a user
Route::delete('photo/{id}', 'PhotoController@destroy');

/************************* RESERVATIONS *************************/
// Get all users
Route::get('reservations', 'ReservationController@index');

// Get one user
Route::get('reservation/{id}', 'ReservationController@show');

// Post a new user
Route::post('reservation', 'ReservationController@store');

// Update a user
Route::put('reservation/{id}', 'ReservationController@update');

// Delete a user
Route::delete('reservation/{id}', 'ReservationController@destroy');

/************************* SALES *************************/
// Get all users
Route::get('sales', 'SalesController@index');

// Get one user
Route::get('sale/{id}', 'SalesController@show');

// Post a new user
Route::post('sale', 'SalesController@store');

// Update a user
Route::put('sale/{id}', 'SalesController@update');

// Delete a user
Route::delete('sale/{id}', 'SalesController@destroy');

/************************* GIFTS *************************/
// Get all users
Route::get('gifts', 'GiftController@index');

// Get one user
Route::get('gift/{id}', 'GiftController@show');

// Post a new user
Route::post('gift', 'GiftController@store');

// Update a user
Route::put('gift/{id}', 'GiftController@update');

// Delete a user
Route::delete('gift/{id}', 'GiftController@destroy');

/************************* PROMOTIONS *************************/
// Get all users
Route::get('promotions', 'PromotionController@index');

// Get one user
Route::get('promotion/{id}', 'PromotionController@show');

// Post a new user
Route::post('promotion', 'PromotionController@store');

// Update a user
Route::put('promotion/{id}', 'PromotionController@update');

// Delete a user
Route::delete('promotion/{id}', 'PromotionController@destroy');

/************************* NOTES *************************/
// Get all users
Route::get('notes', 'NoteController@index');

// Get one user
Route::get('note/{id}', 'NoteController@show');

// Post a new user
Route::post('note', 'NoteController@store');

// Update a user
Route::put('note/{id}', 'NoteController@update');

// Delete a user
Route::delete('note/{id}', 'NoteController@destroy');

/************************* PAYEMENTS *************************/
// Get all users
Route::get('payements', 'PayementController@index');

// Get one user
Route::get('payement/{id}', 'PayementController@show');

// Post a new user
Route::post('payement', 'PayementController@store');

// Update a user
Route::put('payement/{id}', 'PayementController@update');

// Delete a user
Route::delete('payement/{id}', 'PayementController@destroy');