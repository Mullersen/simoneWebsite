@extends('layouts.app')

@php
if(Auth::check()){
    $user=Auth::user()->name;
} else{
    $user=null;
}
@endphp

@section('content')
    <div id="app">
        <Admin user="{{$user}}"/>
    </div>
@endsection
