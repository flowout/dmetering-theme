{{--
The Template for displaying product archives, including the main shop page which is a post type archive

This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.

HOWEVER, on occasion WooCommerce will need to update template files and you
(the theme developer) will need to copy the new files to your theme to
maintain compatibility. We try to do this as little as possible, but it does
happen. When this occurs the version of the template file will be bumped and
the readme will list any important changes.

@see https://docs.woocommerce.com/document/template-structure/
@package WooCommerce/Templates
@version 3.4.0
--}}

@extends('layouts.app')

@section('content')
  @php
    do_action('get_header', 'shop');
    do_action('woocommerce_before_main_content');
  @endphp

  <header class="woocommerce-products-header">
    @if (apply_filters('woocommerce_show_page_title', true))
      <h1 class="woocommerce-products-header__title page-title d-none">{!! woocommerce_page_title(false) !!}</h1>
    @endif

    @php
      do_action('woocommerce_archive_description')
    @endphp
  </header>

  <section class="section">
  @if (woocommerce_product_loop())
    @php do_action('woocommerce_before_shop_loop'); @endphp
    
    <div class="products-top">
      <div class="products-current-filters">
      <div class="products-result-count">
        @php woocommerce_result_count(); @endphp
      </div>
      {!! do_shortcode('[woof_search_options]'); !!}
      </div>
      <div class="products-view">
        <ul class="products-nav nav">
          <li><button data-value="listed" type="button" class="btn"><span class="material-icons-outlined">list</span></button></li>
          <li><button data-value="columns-3" type="button" class="btn current"><span class="material-icons-outlined">grid_on</span></button></li>
        </ul>
      </div>
    </div>
    
    <div class="products-catalog">
    <div class="products-left">
      {!! do_shortcode('[woof]') !!}
    </div>
    <div class="products-right">
    @php
      woocommerce_product_loop_start();
    @endphp

    @if (wc_get_loop_prop('total'))
      @while (have_posts())
        @php
          the_post();
          do_action('woocommerce_shop_loop');
          wc_get_template_part('content', 'product');
        @endphp
      @endwhile
    @endif

    @php
      woocommerce_product_loop_end();
      echo '<div class="products-pagination">';
      woocommerce_pagination();
    @endphp
      <div class="products-per-page-btns">
        <span>Items per page</span>
        <ul class="products-nav nav">
          <li><button data-value="3" type="button" class="btn current">3</button></li>
          <li><button data-value="12" type="button" class="btn">12</button></li>
          <li><button data-value="24" type="button" class="btn">24</button></li>
          <li><button data-value="36" type="button" class="btn">36</button></li>
          <li><button data-value="-1" type="button" class="btn">All</button></li>
        </ul>
      </div>
    @php
      echo '</div>';
      echo '</div>';
      echo '</div>';
      do_action('woocommerce_after_shop_loop');
    @endphp
  @else
    @php
      do_action('woocommerce_no_products_found')
    @endphp
  @endif
  </section>

  @php
    do_action('woocommerce_after_main_content');
    do_action('get_sidebar', 'shop');
    do_action('get_footer', 'shop');
  @endphp
@endsection
