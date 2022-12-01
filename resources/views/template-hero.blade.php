{{--
  Template Name: Hero Template
--}}

@extends('layouts.app-hero')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-page')
  @endwhile
@endsection
