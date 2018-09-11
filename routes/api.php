<?php

use Illuminate\Http\Request;

/**
* Doesn't need to be logged in to do these actions
*/
Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

Route::get('activities', 'ActivityController@index');
Route::get('activities/{id}', 'ActivityController@show');

Route::get('comments', 'CommentController@index');

Route::get('photos', 'PhotoController@index');

Route::get('promotions', 'PromotionController@index');

Route::get('notes', 'NoteController@index');

/**
* Must be logged in to do these actions
*/
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('logout', 'UserController@logout');

 	/**
 	* Who is connected
 	*/
    Route::get('user', 'UserController@getAuthUser');

    /**
    * User informations
    */
    Route::get('userInfos', 'UserInfoController@index');
	Route::get('userInfos/{id}', 'UserInfoController@show');
	Route::post('userInfos', 'UserInfoController@store');
	Route::put('userInfos/{id}', 'UserInfoController@update');
	Route::delete('userInfos/{id}', 'UserInfoController@destroy');

	/**
	* Activities
	*/
	Route::post('activities', 'ActivityController@store');
	Route::put('activities/{id}', 'ActivityController@update');
	Route::delete('activities/{id}', 'ActivityController@destroy');

	/**
	* Categories
	**/
	Route::get('categories', 'CategoryController@index');
	Route::get('categories/{id}', 'CategoryController@show');
	Route::post('categories', 'CategoryController@store');
	Route::put('categories/{id}', 'CategoryController@update');
	Route::delete('categories/{id}', 'CategoryController@destroy');

	/**
	* Comments
	**/
	Route::get('comments/{id}', 'CommentController@show');
	Route::post('comments', 'CommentController@store');
	Route::put('comments/{id}', 'CommentController@update');
	Route::delete('comments/{id}', 'CommentController@destroy');

	/**
	* Photos
	**/
	Route::get('photos/{id}', 'PhotoController@show');
	Route::post('photos', 'PhotoController@store');
	Route::put('photos/{id}', 'PhotoController@update');
	Route::delete('photos/{id}', 'PhotoController@destroy');

	/**
	* Reservations
	**/
	Route::get('reservations', 'ReservationController@index');
	Route::get('reservations/{id}', 'ReservationController@show');
	Route::post('reservations', 'ReservationController@store');
	Route::put('reservations/{id}', 'ReservationController@update');
	Route::delete('reservations/{id}', 'ReservationController@destroy');

	/**
	* Sales
	**/
	Route::get('sales', 'SaleController@index');
	Route::get('sales/{id}', 'SaleController@show');
	Route::post('sales', 'SaleController@store');
	Route::put('sales/{id}', 'SaleController@update');
	Route::delete('sales/{id}', 'SaleController@destroy');

	/**
	* Gifts
	**/
	Route::get('gifts', 'GiftController@index');
	Route::get('gifts/{id}', 'GiftController@show');
	Route::post('gifts', 'GiftController@store');
	Route::put('gifts/{id}', 'GiftController@update');
	Route::delete('gifts/{id}', 'GiftController@destroy');

	/**
	* Promotions
	**/
	Route::get('promotions/{id}', 'PromotionController@show');
	Route::post('promotions', 'PromotionController@store');
	Route::put('promotions/{id}', 'PromotionController@update');
	Route::delete('promotions/{id}', 'PromotionController@destroy');

	/**
	* Notes
	**/
	Route::get('notes/{id}', 'NoteController@show');
	Route::post('notes', 'NoteController@store');
	Route::put('notes/{id}', 'NoteController@update');
	Route::delete('notes/{id}', 'NoteController@destroy');

	/**
	* Payments
	**/
	Route::get('payments', 'PaymentController@index');
	Route::get('payments/{id}', 'PaymentController@show');
	Route::post('payments', 'PaymentController@store');
	Route::put('payments/{id}', 'PaymentController@update');
	Route::delete('payments/{id}', 'PaymentController@destroy');
});
