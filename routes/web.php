<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', 'HomeController@index');

Auth::routes();

Route::get('/article/getarticles/', 'HomeController@getArticles');


//any routes registered before this catch all for vue-router will still function.
Route::get('/{any}', 'HomeController@index')->where('any', '.*');


