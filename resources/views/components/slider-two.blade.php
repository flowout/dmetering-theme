@isset($items)
<section class="section products-slider"@isset($color){{ ' id="'.$id.'"' }}@endisset>
  <div class="container">
    <div class="product-row">
      <div class="product-row__left">
        <h2>{{ $title }}</h2>
        <div class="slider__navigation">
          <button type="button" class="slider__navigation-prev btn btn__rounded">
            <span class="material-icons-outlined">arrow_left</span>
          </button>
          <button type="button" class="slider__navigation-next btn btn__rounded">
            <span class="material-icons-outlined">arrow_right</span>
          </button>
        </div>
      </div>
      <div class="product-row__right">
        <div class="style-2-slider">
          <div class="style-2-slides">
            <div class="slider slider__style-2 swiper">
              <div class="swiper-wrapper">
                @foreach ( $items as $item )
                  <div class="swiper-slide">
                      @php
                      $post_object = get_post( $item->get_id() );
                      setup_postdata( $GLOBALS['product'] =& $post_object );
                      wc_get_template_part( 'content', 'product' );
                      @endphp
                  </div>
                @endforeach
                @php wp_reset_postdata(); @endphp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
@endisset