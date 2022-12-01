<nav class="navbar">
  <div class="header-container">
      @if (has_nav_menu('primary_navigation'))
          {!! wp_nav_menu([
                  'theme_location' => 'primary_navigation',
                  'menu'  =>  'collapse navbar-collapse',
                  'container' => 'div',
                  'container_class' => 'collapse navbar-collapse',
                  'container_id' => 'navbarSupportedContent',
                  'menu_class' => 'navbar-nav',
                  'menu_id' => ' ',
                  'before' => '',
                  'after' => '',
                  'link_before' => '',
                  'link_after' => '',
              ])
          !!}
      @endif
  </div>
</nav>