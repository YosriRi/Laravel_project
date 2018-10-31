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

Route::get('/connexion', 'AuthController@login');

Route::get('/inscription', 'AuthController@register');

Route::get('/activites', 'PageController@searchResult');

Route::get('/gallery', 'PageController@gallery');

Route::get('/a-propos', 'PageController@about');

Route::get('/detail-activite/{id}', 'PageController@detailActivity');

Route::get('/profil/{id}', 'PageController@profile');

Route::get('/panier/{id}', 'PageController@cart');

Route::get('/cgu', 'PageController@cgu');

// Backoffice
Route::get('/backoffice', 'BackPageController@index');
Route::get('/backoffice/connexion', 'BackPageController@login');