<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{
    public function index(){
        //potentially add another if statement to make sure the username Admin matches the admins unique email address
        if(Auth::user()->name === "Admin"){
            return view("admin");
        }
    }
}
