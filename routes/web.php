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

Route::get('/', 'PageController@index');

Route::get('/login', 'AuthController@login');

Route::get('/register', 'AuthController@register');

Route::get('/activity', 'PageController@searchResult');

Route::get('/detailActivity/{id}', 'PageController@detailActivity');

Route::get('/profile/{id}', 'PageController@profile');

Route::get('/cart/{id}', 'PageController@cart');

Route::get('/all', 'PageController@all');