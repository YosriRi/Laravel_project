<?php

use Illuminate\Http\Request;

Route::post('login', 'UserController@login');
Route::post('loginAdmin', 'AdminController@login');
Route::post('register', 'UserController@register');

/**
* Activities
*/
Route::get('activities', 'ActivityController@index');
Route::get('activities/{id}', 'ActivityController@show');
Route::post('activities', 'ActivityController@store');
Route::put('activities/{id}', 'ActivityController@update');
Route::delete('activities/{id}', 'ActivityController@destroy');

Route::get('categories', 'CategoryController@index');
Route::get('categories/{id}', 'CategoryController@show');

Route::get('comments', 'CommentController@index');

Route::get('photos', 'PhotoController@index');

Route::get('promotions', 'PromotionController@index');

Route::get('notes', 'NoteController@index');

Route::get('regions', 'RegionController@index');

Route::get('cities', 'CityController@index');

Route::get('countries', 'CountryController@index');

Route::get('types', 'TypeController@index');

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
	* Categories
	**/
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
	* Carts
	**/
	Route::get('carts', 'CartController@index');
	Route::get('carts/{id}', 'CartController@show');
	Route::post('carts', 'CartController@store');
	Route::put('carts/{id}', 'CartController@update');
	Route::delete('carts/{id}', 'CartController@destroy');

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
	 * Types
	 */
	Route::get('types/{id}', 'TypeController@show');
	Route::post('types', 'TypeController@store');
	Route::put('types/{id}', 'TypeController@update');
	Route::delete('types/{id}', 'TypeController@destroy');

	/**
	 * Countries
	 */
	Route::get('countries/{id}', 'CountryController@show');
	Route::post('countries', 'CountryController@store');
	Route::put('countries/{id}', 'CountryController@update');
	Route::delete('countries/{id}', 'CountryController@destroy');

	/**
	 * Cities
	 */
	Route::get('cities/{id}', 'CityController@show');
	Route::post('cities', 'CityController@store');
	Route::put('cities/{id}', 'CityController@update');
	Route::delete('cities/{id}', 'CityController@destroy');

	/**
	 * Regions
	 */
	Route::get('regions/{id}', 'RegionController@show');
	Route::post('regions', 'RegionController@store');
	Route::put('regions/{id}', 'RegionController@update');
	Route::delete('regions/{id}', 'RegionController@destroy');
});
