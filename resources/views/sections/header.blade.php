<header>
  @hasoption('top_bar_text')
      <div class="header-top">
          <div class="container-fluid text-center">
              <div class="d-flex align-items-center justify-content-center">
                  @option('top_bar_text')
                  @hasoption('bar_image', 'url')
                      <img src="@option('bar_image', 'url')" alt="@option('bar_image', 'alt')">
                  @endoption
              </div>
          </div>
      </div>
  @endfield
  <div class="header-middle">
      <nav class="navbar navbar-expand-lg" role="navigation">
        <div class="header-container">
            <div class="header-items">
                <div class="header-item header-item_1">
                    <div class="header-brand">
                        <div class="header-logo">
                            <a href="{{ get_home_url() }}">
                            @hasoption('logo', 'url')
                              <img class="desktop-logo" src="@option('logo', 'url')" alt="@option('logo', 'alt')">
                            @endoption
                            @hasoption('mobile_logo', 'url')
                              <img class="mobile-logo" src="@option('mobile_logo', 'url')" alt="@option('mobile_logo', 'alt')">
                            @endoption
                            </a>
                        </div>
                        <div>
                            <button type="button" class="delivery-area">
                              <span>Deliver to</span><span class="delivery-area_selected">Slovenia</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="header-item header-item_2">
                    <button type="button" class="open-search-btn"><span class="material-icons">search</span><span>Search</span></button>
                    <div class="search-main">
                      <div class="input-group nav-search">
                          <span class="input-group-text"><span class="material-icons">search</span></span>
                          <input type="text" class="form-control" placeholder="Search">
                          <button class="btn" type="button" id="button-search">Search</button>
                      </div>
                    </div>
                </div>
                <div class="header-main-link d-block d-lg-none">
                    <a class="nav-utility-link" href="{!! wc_get_cart_url() !!}">
                        <span class="material-icons">shopping_cart</span>
                        <span>Cart</span>
                    </a>
                </div>
              <div class="mobile-menu">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="mobile-menu__inner">
                      <div class="header-item header-item_3">
                        <div class="header-main-links">
                            <div class="header-main-link">
                                <a class="nav-utility-link" href="{!! wc_get_page_permalink( 'myaccount' ) !!}">
                                    <span class="material-icons">person</span>
                                    <span>Account</span>
                                </a>
                            </div>
                            <div class="header-main-link">
                                <a class="nav-utility-link" href="/my-products">
                                    <span class="material-icons">favorite</span>
                                    <span>My products</span>
                                </a>
                            </div>
                            <div class="header-main-link">
                                <a class="nav-utility-link" href="#">
                                    <span class="material-icons">playlist_add</span>
                                    <span>Compare</span>
                                </a>
                            </div>
                            <div class="header-main-link d-none d-lg-block">
                                <a class="nav-utility-link" href="{!! wc_get_cart_url() !!}">
                                    <span class="material-icons">shopping_cart</span>
                                    <span>Cart</span>
                                </a>
                            </div>
                        </div>
                      </div>
                      <div class="header-item header-item_4">
                        <div class="language-selector">En<span class="material-icons-outlined">expand_more</span></div>
                      </div>
                    </div>
                </div>
              </div>
        </div>
      </nav>
  </div>
  <div class="categories-nav">
      <div class="header-container">
          @if (has_nav_menu('primary_navigation'))
              {!! wp_nav_menu([
                      'theme_location' => 'primary_navigation',
                      'menu'  =>  '',
                      'container' => 'div',
                      'container_class' => 'categories-nav__inner',
                      'container_id' => '',
                      'menu_class' => 'categories-nav__items',
                      'menu_id' => '',
                      'before' => '',
                      'after' => '',
                      'link_before' => '',
                      'link_after' => '',
                  ])
              !!}
          @endif
      </div>
   </div>
</header>
