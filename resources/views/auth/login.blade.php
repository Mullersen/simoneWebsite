@extends('layouts.app')

@section('content')
<div class="container">
    <div class="columns is-centered">
        <div class="column is-half">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title">
                        <h2 class="title my-4">{{ __('Login') }}</h2>
                    </div>
                </div>

                <div class="card-content">
                    <form method="POST" action="/login">
                        @csrf

                        <div class="field">
                            <label for="email" class="label">{{ __('E-Mail Adresse') }}</label>

                            <div class="control">
                                <input id="email" type="email" class="input @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

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
                                <input id="password" type="password" class="input @error('password') is-invalid @enderror" name="password" required autocomplete="Nuværende Kodeord">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                        {{ __('Husk mig') }}
                                </label>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button type="submit" class="button">
                                    {{ __('Login') }}
                                </button>

                                {{-- @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="/password/reset">
                                        {{ __('Glemt Kodeord?') }}
                                    </a>
                                @endif --}}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
