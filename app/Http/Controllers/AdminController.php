<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{
    public function index(){
        //potentially add another if statement to make sure the username Admin matches the admins unique email address
        if(Auth::user()->id === 4){
            return view("admin");
        }
    }

    public function uploadArticle(Request $request){
        if(Auth::user()->id === 4){ //auth checking the route. 
            $article = new \App\Article;
            $article->header = $request->title;
            $article->content = $request->description;
            $article->image = $request->file('image')->store('images');
            $article->save();
            
            $article->tag('article'); //always have this tag for articles - so that the front page article view works.
            $article->tag($request->tags); // potentially use the function setTag instead. think about not overwriting current tags. 
            return response()->json(['the new article' => $article]);
        }
    }
}
