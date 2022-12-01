@include('sections.header')

  <main id="main" class="main">
    @unless (is_front_page() || is_product() )
    <div class="container">
    @endunless
    
    @yield('content')

    @unless (is_front_page() || is_product() )
    </div>
    @endunless
  </main>

  @hasSection('sidebar')
    <aside class="sidebar">
      @yield('sidebar')
    </aside>
  @endif

@include('sections.footer')