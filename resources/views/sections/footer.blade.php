<footer>
  <div class="footer-top">
    <div class="footer-container">
      <div class="footer-inner">
        <div class="footer-primary">
          <div class="footer-newsletter">
            <form action="" method="get">
              <p class="footer-title">Subscribe for our newsletter</p>
              <div class="mb-3">
                <input class="form-control" placeholder="Your e-mail" type="email" name="newsletter-email" id="newsletter-email">
              </div>
              <button class="btn" type="submit">Subscribe</button>
            </form>
          </div>
          <div class="footer-primary-navigation">
            <div>
              <p class="footer-title">Company</p>
              @if (has_nav_menu('footer_primary_navigation'))
              {!! wp_nav_menu([
                      'theme_location' => 'footer_primary_navigation',
                      'container' => 'div',
                      'menu_class' => 'nav flex-column footer-links'
                  ])
              !!}
              @endif
            </div>
            <div>
              <p class="footer-title">Company</p>
              @if (has_nav_menu('footer_primary_navigation'))
              {!! wp_nav_menu([
                      'theme_location' => 'footer_primary_navigation',
                      'container' => 'div',
                      'menu_class' => 'nav flex-column footer-links'
                  ])
              !!}
              @endif
            </div>
            <div>
              <p class="footer-title">Company</p>
              @if (has_nav_menu('footer_primary_navigation'))
              {!! wp_nav_menu([
                      'theme_location' => 'footer_primary_navigation',
                      'container' => 'div',
                      'menu_class' => 'nav flex-column footer-links'
                  ])
              !!}
              @endif
            </div>
            <div>
              <p class="footer-title">Company</p>
              @if (has_nav_menu('footer_primary_navigation'))
              {!! wp_nav_menu([
                      'theme_location' => 'footer_primary_navigation',
                      'container' => 'div',
                      'menu_class' => 'nav flex-column footer-links'
                  ])
              !!}
              @endif
            </div>
          </div>
        </div>
        <div class="footer-secondary">
          <div class="footer-secondary__left">
            @hasoption('logo', 'url')
              <a class="footer-logo" href="{{ get_home_url() }}">
                <img src="@option('logo', 'url')" alt="@option('logo', 'alt')">
              </a>
            @endoption
          </div>
          <div class="footer-secondary__right">
            <div class="footer-secondary-menu">
              @if (has_nav_menu('footer_secondary_navigation'))
              {!! wp_nav_menu([
                      'theme_location' => 'footer_secondary_navigation',
                      'container' => 'div',
                      'menu_class' => 'nav footer-links'
                  ])
              !!}
              @endif
            </div>
            <div class="footer-socials">
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="@asset('linkedin-icon.svg')" alt="Linkedin"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-container">
      <div class="footer-copyright">
        @if (has_nav_menu('copyright_navigation'))
        {!! wp_nav_menu([
                'theme_location' => 'copyright_navigation',
                'container' => 'div',
                'menu_class' => 'nav footer-links'
            ])
        !!}
        @endif
        <div class="copyright-text">© Dmetering, 2022</div>
      </div>
    </div>
  </div>
</footer>
