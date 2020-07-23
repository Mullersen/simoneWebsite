<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    //will force anyone to be logged in on the page - also just visitors- and redirect to login page. We don't want that.
    public function __construct()
    {
    //     $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {
        return view('welcome');
    }
    public function getAllArticles(){
        $articles = \App\Article::all();
        return response()->json(['articles' => $articles]);
    }

    public function getArticles(Request $request){
        $articles = \App\Article::withTag($request->tagselection)->orderBy('created_at', 'DESC')->paginate(10);
        return response()->json(['articles' => $articles]);
    }
    public function getfpArticles(){
        $fparticles = \App\Article::orderBy('created_at', 'DESC')->get();
        return response()->json(['fparticles' => $fparticles]);
    }
    public function getArticle(Request $request){
        $myarticleID = \App\Article::where('header', $request->header)->value('id');
        $tagsarticle = \App\Article::find($myarticleID);
        $mytags = $tagsarticle->tags;
        return response()->json(['article' => $tagsarticle, 'tags' => $mytags]);
    }
    public function getTags(){
        $tags = \App\Article::allTags()->get();
        return response()->json(['tags' => $tags]);
    }
    public function sendComment(Request $request){
        if(Auth::user()->name === $request->user){
            $articleId = \App\Article::where('header', $request->header)->value('id');
            $comment = new \App\Comment;
            $comment->article_id = $articleId;
            $comment->user_id = Auth::user()->id;
            $comment->content = $request->content;
            $comment->save();

            return response()->json(['comment' => $comment]);
        } else {
            return response()->json(['comment' => 'du har ikke adgang til dette']);
        }
    }
    public function getComments(Request $request){
        $articleId = \App\Article::where('header', '=', $request->header)->value('id');
        $comments = \App\Comment::where('article_id', '=', $articleId)->with('user')->get();
         return response()->json(['comments' => $comments]);
    }
    public function deleteComment(Request $request){
            if(Auth::user()->name === $request->user_name){
            \App\Comment::where('id', '=', $request->comment_id)->delete();
            return response()->json(['comment' => 'deleted']);
            }
    }
}
