<div class="hero hero-static">
    <div class="hero-image">
      {!! the_post_thumbnail('full') !!}
      <!--<img src="@asset('hero-bg.png')" alt="hero background">-->
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
    <div class="container">
        <div class="hero-content-centered">
          <h1>{{ get_the_title() }}</h1>
        </div>
    </div>
    </div>
</div>