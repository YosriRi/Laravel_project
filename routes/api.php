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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/************************* USERSINFO *************************/
// Get all usersInfo
Route::get('usersInfo', 'UsersController@index');

// Get one usersInfo
Route::get('usersInfo/{id}', 'UsersController@show');

// Post a new usersInfo
Route::post('usersInfo', 'UsersController@store');

// Update a usersInfo
Route::put('usersInfo/{id}', 'UsersController@update');

// Delete a usersInfo
Route::delete('usersInfo/{id}', 'UsersController@destroy');
/************************* USERS *************************/


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
/************************* ACTIVITIES *************************/


/************************* CATEGORIES *************************/
// Get all categories
Route::get('categories', 'CategoryController@index');

// Get one category
Route::get('category/{id}', 'CategoryController@show');

// Post a new category
Route::post('category', 'CategoryController@store');

// Update a category
Route::put('category/{id}', 'CategoryController@update');

// Delete a category
Route::delete('category/{id}', 'CategoryController@destroy');
/************************* CATEGORIES *************************/


/************************* COMMENTS *************************/
// Get all comments
Route::get('comments', 'CommentController@index');

// Get one comment
Route::get('comment/{id}', 'CommentController@show');

// Post a new comment
Route::post('comment', 'CommentController@store');

// Update a comment
Route::put('comment/{id}', 'CommentController@update');

// Delete a comment
Route::delete('comment/{id}', 'CommentController@destroy');
/************************* COMMENTS *************************/


/************************* PHOTOS *************************/
// Get all photos
Route::get('photos', 'PhotoController@index');

// Get one photo
Route::get('photo/{id}', 'PhotoController@show');

// Post a new photo
Route::post('photo', 'PhotoController@store');

// Update a photo
Route::put('photo/{id}', 'PhotoController@update');

// Delete a photo
Route::delete('photo/{id}', 'PhotoController@destroy');
/************************* PHOTOS *************************/


/************************* RESERVATIONS *************************/
// Get all reservations
Route::get('reservations', 'ReservationController@index');

// Get one reservation
Route::get('reservation/{id}', 'ReservationController@show');

// Post a new reservation
Route::post('reservation', 'ReservationController@store');

// Update a reservation
Route::put('reservation/{id}', 'ReservationController@update');

// Delete a reservation
Route::delete('reservation/{id}', 'ReservationController@destroy');
/************************* RESERVATIONS *************************/


/************************* SALES *************************/
// Get all sales
Route::get('sales', 'SalesController@index');

// Get one sale
Route::get('sale/{id}', 'SalesController@show');

// Post a new sale
Route::post('sale', 'SalesController@store');

// Update a sale
Route::put('sale/{id}', 'SalesController@update');

// Delete a sale
Route::delete('sale/{id}', 'SalesController@destroy');
/************************* SALES *************************/


/************************* GIFTS *************************/
// Get all gifts
Route::get('gifts', 'GiftController@index');

// Get one gift
Route::get('gift/{id}', 'GiftController@show');

// Post a new gift
Route::post('gift', 'GiftController@store');

// Update a gift
Route::put('gift/{id}', 'GiftController@update');

// Delete a gift
Route::delete('gift/{id}', 'GiftController@destroy');
/************************* GIFTS *************************/


/************************* PROMOTIONS *************************/
// Get all promotions
Route::get('promotions', 'PromotionController@index');

// Get one promotion
Route::get('promotion/{id}', 'PromotionController@show');

// Post a new promotion
Route::post('promotion', 'PromotionController@store');

// Update a promotion
Route::put('promotion/{id}', 'PromotionController@update');

// Delete a promotion
Route::delete('promotion/{id}', 'PromotionController@destroy');
/************************* PROMOTIONS *************************/


/************************* NOTES *************************/
// Get all notes
Route::get('notes', 'NoteController@index');

// Get one note
Route::get('note/{id}', 'NoteController@show');

// Post a new note
Route::post('note', 'NoteController@store');

// Update a note
Route::put('note/{id}', 'NoteController@update');

// Delete a note
Route::delete('note/{id}', 'NoteController@destroy');
/************************* NOTES *************************/


/************************* PAYEMENTS *************************/
// Get all payements
Route::get('payements', 'PayementController@index');

// Get one payement
Route::get('payement/{id}', 'PayementController@show');

// Post a new payement
Route::post('payement', 'PayementController@store');

// Update a payement
Route::put('payement/{id}', 'PayementController@update');

// Delete a payement
Route::delete('payement/{id}', 'PayementController@destroy');
/************************* PAYEMENTS *************************/
