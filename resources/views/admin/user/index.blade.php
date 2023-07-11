@extends('layout.app')

@section('title')
    Liste d'utilisateur
@endsection

@section('content')
    <div class="container-fluid">

        <x-page-title pageTitle="Utilisateurs" title="Liste d'utilisateur" />

        <div class="d-flex justify-content-end mb-2">
            <a href="{{ route('admin.utilisateurs.create') }}" class="btn btn-primary">
                <i class="mdi mdi-account-plus"></i>
                Nouveau
            </a>
        </div>


        <div class="row">
            @forelse ($users as $user)
                <div class="col-xl-3 col-sm-6">
                    <div class="card text-center">
                        <div class="card-body">
                            <div class="avatar-sm mx-auto mb-4">
                                <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                                    {{ Str::upper($user->name[0]) ?? '' }} {{ Str::upper($user->surname[1]) ?? '' }}
                                </span>
                            </div>
                            <h5 class="font-size-15 mb-1"><a href="javascript: void(0);"
                                    class="text-dark">{{ $user->full_name }}</a>
                            </h5>
                            <br>
                            <p class="text-muted">{{ $user->email }}</p>
                            <p class="text-muted">{{ $user->phone }}</p>

                            <div>
                                <a href="javascript: void(0);" class="badge bg-primary font-size-11 m-1">
                                    {{ $user->type_text }}
                                </a>
                            </div>
                        </div>
                        <div class="card-footer bg-transparent border-top">
                            <div class="contact-links d-flex font-size-20">
                                <div class="flex-fill">
                                    <a href="javascript: void(0);"><i class="bx bx-message-square-dots"></i></a>
                                </div>
                                {{-- <div class="flex-fill">
                                    <a href="javascript: void(0);"><i class="bx bx-pie-chart-alt"></i></a>
                                </div> --}}
                                <div class="flex-fill">
                                    <a href="javascript: void(0);">
                                        <i class="bx bx-user-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @empty
            @endforelse

            {{ $users->links() }}
        </div>
        <!-- end row -->

        <!-- end row -->
        <!-- end row -->

    </div> <!-- container-fluid -->
@endsection
