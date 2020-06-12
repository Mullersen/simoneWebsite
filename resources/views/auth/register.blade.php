@extends('layouts.app')

@section('content')
<div class="container">
    <div class="columns is-centered">
        <div class="column is-half">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title">
                        <h2 class="title my-4">{{ __('Tilmeld dig') }}</h2>
                    </div>
                </div>

                <div class="card-content">
                    <form method="POST" action="/register">
                        @csrf

                        <div class="field">
                            <label for="name" class="label">Brugernavn</label>

                            <div class="control">
                                <input id="name" type="text" class="input @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="field">
                            <label for="email" class="label">{{ __('E-Mail Adresse') }}</label>

                            <div class="control">
                                <input id="email" type="email" class="input @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="Email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="field">
                            <label for="password" class="label">{{ __('Kodeord') }}</label>

                            <div class="control">
                                <input id="password" type="password" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="Nyt Kodeord">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="field">
                            <label for="password-confirm" class="label">{{ __('Bekræft Kodeord') }}</label>

                            <div class="control">
                                <input id="password-confirm" type="password" class="input" name="password_confirmation" required autocomplete="Nyt Kodeord">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button type="submit" class="button">
                                    {{ __('Opret Profil') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
