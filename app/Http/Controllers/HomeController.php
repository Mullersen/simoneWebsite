<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    //will force anyone to be logged in on the page - also just visitors- and redirect to login page. We don't want that.
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('welcome');
    }
    public function getArticles(){
        $articles = \App\Article::orderBy('created_at', 'DESC')->paginate(10);
        return response()->json(['articles' => $articles]);
    }
}
