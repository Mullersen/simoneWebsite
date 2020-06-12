@extends('layouts.app')

@php
if(Auth::check()){
    $user=Auth::user()->name;
} else{
    $user=null;
}
@endphp

@section('content')
    <div class="content">
        <div id="app">
            <app user="{{$user}}" csrf={{ csrf_token() }}></app>
        </div>
    </div>
@endsection
