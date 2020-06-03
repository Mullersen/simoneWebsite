<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';

    function user(){
        return $this->belongsTo('App\User');
        }

    function article(){
        return $this->belongsTo('App\Article');
    }
}
