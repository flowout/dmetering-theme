{{--
  Template Name: Favorites Template
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <h1 class="text-center">{{ get_the_title() }}</h1>
    {!! do_shortcode('[user_favorites include_links="true" include_thumbnails="true"]') !!}
  @endwhile
@endsection
