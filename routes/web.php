<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Website
Route::get('/', 'PageController@index');

Route::get('/login', 'AuthController@login');

Route::get('/register', 'AuthController@register');

Route::get('/activity', 'PageController@searchResult');

Route::get('/gallery', 'PageController@gallery');

Route::get('/about', 'PageController@about');

Route::get('/paymentsuccess', 'PageController@paymentSuccess');

Route::get('/detailActivity/{id}', 'PageController@detailActivity');

Route::get('/profile/{id}', 'PageController@profile');

Route::get('/cart/{id}', 'PageController@cart');

Route::get('/all', 'PageController@all');

// Backoffice
Route::get('/backoffice', 'BackPageController@index');
Route::get('/backoffice/connexion', 'BackPageController@login');