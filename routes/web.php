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

Route::get('/', function(){
return redirect('/home/home');
});

// $proxy_url    = getenv('PROXY_URL');
// $proxy_schema = getenv('PROXY_SCHEMA');

// if (!empty($proxy_url)) {
//    URL::forceRootUrl($proxy_url);
// }

// if (!empty($proxy_schema)) {
//    URL::forceScheme($proxy_schema);
// }

Auth::routes();

Route::get('/admin', 'AdminController@index')->middleware('auth');
Route::post('/article/getarticles/', 'HomeController@getArticles');
Route::get('/articles/getfpArticles', 'HomeController@getfpArticles');
Route::post('/articles/getarticle', 'HomeController@getArticle');
Route::get('/article/getAllArticles', 'HomeController@getAllArticles');
Route::post('/article/uploadArticle', 'AdminController@uploadArticle')->middleware('auth');
Route::post("/addons/deleteArticle", "AdminController@deleteArticle")->middleware('auth');
Route::get('/article/getTags', 'HomeController@getTags');
Route::post('/article/getAutofillTags', 'AdminController@getAutofillTags')->middleware('Auth');
Route::post('/comment/sendcomment', 'HomeController@sendComment')->middleware('auth');
Route::post('/comment/getcomments', 'HomeController@getComments');
Route::post("/comment/deleteComment", 'HomeController@deleteComment')->middleware('auth');
Route::post('/search/searchArticles', 'HomeController@searchArticles');


//any routes registered before this catch-all for vue-router will still function.
Route::get('/home/{any}', 'HomeController@index')->where('any', '.*');


