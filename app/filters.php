<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

// woocommerce_format_sale_price
add_filter( 'woocommerce_format_sale_price', function ( $price, $regular_price, $sale_price ) {
    $percentage = '-' . round(100 - ($sale_price / $regular_price * 100)) . '%';
    $price = '<div class="price-regular">' . ( is_numeric( $sale_price ) ? wc_price( $sale_price ) : $sale_price ) . '</div>' . '<div class="price-sale">RRP <del aria-hidden="true">' . ( is_numeric( $regular_price ) ? wc_price( $regular_price ) : $regular_price ) . '</del><span class="sale-tag">' . $percentage . '</span></div>'; 
    
    return $price; 
}, 10, 3 );
  
// woocommerce_loop_add_to_cart_link
add_filter( 'woocommerce_loop_add_to_cart_link', function ( $html, $product, $args ) { 
    if( isset( $args['class'] ) ) {
      $args['class'] = str_replace("button", "btn", $args['class']);
    }
    $html = sprintf(
      '<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
      esc_url( $product->add_to_cart_url() ),
      esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
      esc_attr( isset( $args['class'] ) ? $args['class'] : 'btn' ),
      isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
      esc_html( $product->add_to_cart_text() )
    );
    return $html; 
}, 10, 3 );

add_filter( 'woocommerce_breadcrumb_defaults', function( $args ) {
  $args['delimiter'] = '<span class="material-icons-outlined breadcrumb-delimiter">chevron_right</span>';
  
  return $args;
}, 10, 1);

add_filter( 'woocommerce_get_breadcrumb', function ( $crumbs, $breadcrumb ) {
  if ( is_product() ) {
      $product = wc_get_product( get_the_ID() );
      //var_dump($crumbs);
      $index = count( $crumbs ) - 1;
      $crumbs[$index][0] = $product->get_sku();
   }
   return $crumbs;
}, 9999, 2 );

// WOOF filters
add_filter('woof_clear_all_text', function($default_text) {
    return 'Clear';
}, 99, 1);
add_filter('woof_delete_img_url', function($current_img) {
    $image = \Roots\asset('close.svg');
    return $image->uri();
}, 10, 1);

add_filter( 'woocommerce_output_related_products_args', function( $args ) {
	$args['posts_per_page'] = 12; // 4 related products
	return $args;
}, 20 );