<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{
    public function index(){
        //potentially add another if statement to make sure the username Admin matches the admins unique email address
        if(Auth::check()){
            if(Auth::user()->id === 1){
                return view("admin");
            }
        } else {
            return redirect('/login');
        }
    }

    public function uploadArticle(Request $request){
        if(Auth::user()->id === 1){ //auth checking the route.
            $article = new \App\Article;
            $article->header = $request->title;
            $article->content = $request->description;
            $article->header_image = $request->file('header_image')->store('images');

            $article->save();

            // $article->tag('artikel'); //always have this tag for articles - so that the front page article view works.

            $article->tag($request->tags); // potentially use the function setTag instead.
            return response()->json(['the new article' => $article]);
        }
    }
    public function deleteArticle(Request $request){
        if(Auth::user()->id === 1){
        \App\Article::find($request->id)->untag();
        \App\Article::where('id', '=', $request->id)->delete();
        return response()->json(['article' => 'deleted']);
        }
    }

    public function getArticleTags(Request $request){
        if(Auth::user()->id === 1){
            $myarticle = \App\Article::find($request->tagid);
            $articletags = $myarticle->tags;
            return response()->json(['tags' => $articletags]);
        }
    }

    public function editArticle(Request $request){
        if(Auth::user()->id === 1){
            $article = \App\Article::find($request->id);
            $article->header = $request->title;
            $article->content = $request->description;
            if (is_string($request->header_image) == true){
                $article->header_image = $request->header_image;
            } else {
                $article->header_image = $request->file('header_image')->store('images');
            }

            $article->save();
            $article->untag();
            $article->tag($request->tags);
            return response()->json(['article edited' => $article]);
        }
    }


}
