@include('sections.header')

  <main id="main" class="main">

    @include('components.hero')

    <div class="container hero-above">
      <div class="section">
        @yield('content')
      </div>
    </div>

    @include('components.faq')

  </main>

  @hasSection('sidebar')
    <aside class="sidebar">
      @yield('sidebar')
    </aside>
  @endif

@include('sections.footer')