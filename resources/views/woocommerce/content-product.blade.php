<?php
/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined( 'ABSPATH' ) || exit;

global $product;

// Ensure visibility.
if ( empty( $product ) || ! $product->is_visible() ) {
	return;
}
?>
<div class="product-card" <?php //wc_product_class( '', $product ); ?>>
  <div class="product-card__top">
    <div class="product-card__buttons">
      <div class="product-card__buttons-left">
        <span class="product-card__stock">{{ $product->get_stock_quantity() }} Pieces</span>
      </div>
      <div class="product-card__buttons-right">
        {!! do_shortcode('[favorite_button]') !!}
        {!! do_shortcode('[yith_compare_button]') !!}
      </div>
    </div>
    <div class="product-card__assets">
      <a class="product-card__link" href="{{ get_permalink($product->get_id()) }}" title="{{ $product->get_name() }}">
        <div class="product-card__image">
          {!! woocommerce_get_product_thumbnail() !!}
        </div>
      </a>
      <div class="product-card__brand">
        <img src="@asset('brand-logo-sample.svg')" alt="brand">
      </div>
    </div>
  </div>
  <div class="product-card__middle">
      <div class="product-card__tag">{{ $product->get_sku() }}</div>
      <div class="product-card__title"><a href="{{ get_permalink($product->get_id()) }}" title="{{ $product->get_name() }}">{{ $product->get_name() }}</a></div>
      <div class="product-short-desc">
        <table class="table table-borderless table-sm">
            <tbody>
              <tr>
                <td>Marketing Trade Name</td>
                <td><a href="#">QO</a></td>
              </tr>
              <tr>
                <td>Product Type</td>
                <td><a href="#">Load Center</a></td>
              </tr>
              <tr>
                <td>Number of Phases</td>
                <td><a href="#">1 phase</a></td>
              </tr>
              <tr>
                <td>Number of Spaces</td>
                <td><a href="#">42</a></td>
              </tr>
            </tbody>
          </table>
      </div>
  </div>
  <div class="product-card__bottom">
    @php do_action( 'woocommerce_after_shop_loop_item' ); @endphp
    <div class="product-card__buttons-listed">
      {!! do_shortcode('[favorite_button]') !!}
      {!! do_shortcode('[yith_compare_button]') !!}
    </div>
  </div>
</div>