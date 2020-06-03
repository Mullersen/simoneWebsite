<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cartalyst\Tags\TaggableTrait;
use Cartalyst\Tags\TaggableInterface;

class Article extends Model implements TaggableInterface
{
    use App\TaggableInterface;
    protected $table = 'articles';

    function user(){
        return $this->belongsTo('App\User');
    }
    function comment(){
        return $this->hasMany('App\Comment');
    }
    // function subjectpage(){
    //     return $this->belongsTo('App\Subjectpage');
    // }
}
