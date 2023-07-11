@extends('layout.app')

@section('title')
    Nouveau Utilisateur
@endsection

@section('content')
    <div class="container-fluid">

        <x-page-title pageTitle="Utilisateurs" title="Nouveau Utilisateur" />

        <form action="{{ route('admin.utilisateurs.store') }}" class="needs-validation" novalidate method="post">
            @csrf
            <div class="card">
                <div class="card-body">
                    @include('include.alert')

                    <div class="mb-3 row">
                        <label class="col-sm-4 col-md-3 col-form-label">Rôle</label>
                        <div class="col-sm col-md">
                            <select class="form-select" name="type" required>
                                <option value="">Rôle</option>
                                @foreach (\App\Models\User::TYPES as $index => $value)
                                    <option value="{{ $value }}">{{ Str::title($index) }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label for="name" class="col-sm-4 col-md-3 col-form-label">Nom</label>
                        <div class="col-sm col-md">
                            <input class="form-control" type="text" value="{{ old('name') }}" name="name" required
                                id="name">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="name" class="col-sm-4 col-md-3 col-form-label">Prenom</label>
                        <div class="col-sm col-md">
                            <input class="form-control" type="text" value="{{ old('surname') }}" name="surname" required
                                id="surname">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="phone" class="col-sm-4 col-md-3 col-form-label">Téléphone</label>
                        <div class="col-sm col-md">
                            <input class="form-control" type="tel" value="{{ old('phone') }}" name="phone" required
                                id="phone">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="email" class="col-sm-4 col-md-3 col-form-label">Email</label>
                        <div class="col-sm col-md">
                            <input class="form-control" type="email" value="{{ old('email') }}" name="email" required
                                id="email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="password" class="col-sm-4 col-md-3 col-form-label">Mot De Passe</label>
                        <div class="col-sm col-md">
                            <input class="form-control" type="password" value="{{ old('password') }}" name="password"
                                required id="password">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="password_confirmation" class="col-sm-4 col-md-3 col-form-label">Confirmez le mot de
                            passe</label>
                        <div class="col-sm col-md">
                            <input class="form-control" type="password" name="password_confirmation"
                                value="{{ old('password_confirmation') }}" name="password_confirmation" required
                                id="password_confirmation">
                        </div>
                    </div>
                    <button class="btn btn-rounded btn-primary waves-effect waves-light float-end">
                        <i class="mdi mdi-content-save"></i> Enregistrer
                    </button>
                </div>
            </div>
        </form>
    </div> <!-- container-fluid -->
@endsection

@section('script')
    <script src="{{asset('js/panel.js')}}" type="module"></script>
@endsection
