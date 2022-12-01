@isset($items)
<section class="section @isset($color){{ 'section__' . $color }}@endisset products-slider">
    <div class="container">
        <div class="w-100 d-flex justify-content-between">
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
        <div class="slider slider__style-1 swiper">
          <div class="swiper-wrapper">
            @foreach ( $items as $item )
              <div class="swiper-slide">
                  @php
                  $post_object = get_post( $item );
                  setup_postdata( $GLOBALS['product'] =& $post_object );
                  wc_get_template_part( 'content', 'product' );
                  @endphp
              </div>
            @endforeach
            @php wp_reset_postdata(); @endphp
          </div>
        </div>
    </div>
</section>
@endisset