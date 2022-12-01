{{--
  Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
  <h1 class="d-none">{{ get_the_title() }}</h1>
  @include('components.hero-slider')
  @include('components.categories-grid')
  
  @hasoption('featured')
  <x-slider-one title="Featured items" :items="$featured" color="grey"/>
  @endoption

  <x-slider-one title="Best sellers" :items="$bestselling" />

  <section class="section section__grey">
    <div class="container">
      <div class="card-links">
        <a href="about-us" class="card-link">
          <div class="card-link__img" style="background-image: url(@asset('about-us.jpeg'));"></div>
          <!--<img src="@asset('about-us.jpeg')" alt="About us">
          <div class="card-link__overlay"></div>-->
          <div class="card-link__content">
            <span>About us</span>
            <span class="material-icons-outlined">east</span>
          </div>
        </a>
        <a href="contact" class="card-link">
          <div class="card-link__img" style="background-image: url(@asset('contact-us.jpeg'));"></div>
          <!--<img src="@asset('contact-us.jpeg')" alt="Contact us">
          <div class="card-link__overlay"></div>-->
          <div class="card-link__content">
            <span>Contact us</span>
            <span class="material-icons-outlined">east</span>
          </div>
        </a>
      </div>
    </div>
  </section>
@endsection