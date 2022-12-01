<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
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

/**
 * Hook: woocommerce_before_single_product.
 *
 * @hooked woocommerce_output_all_notices - 10
 */
echo '<div class="container">';
do_action( 'woocommerce_before_single_product' );
echo '</div>';

if ( post_password_required() ) {
	echo get_the_password_form(); // WPCS: XSS ok.
	return;
}

?>
<div id="product-<?php the_ID(); ?>" <?php wc_product_class( '', $product ); ?>>

  <div class="container">
    <h1>{{ $product->get_name() }}</h1>
    <div class="product-top">
      <div class="product-meta">
        <img src="@asset('brand-logo-sample.svg')" alt="">
        <div>ID: {{ $product->get_sku() }}</div>
      </div>
      <div class="product-meta-buttons">
        <button type="button" class="btn btn__borderless"><span class="material-icons">favorite_border</span>Add to my products</button>
        {!! do_shortcode('[yith_compare_button]') !!}
      </div>
    </div>
  </div>

  <div class="product-anchors">
    <div class="container">
      <ul class="nav">
        <li class="nav-item"><a class="nav-link active" href="#main-information">Main Information</a></li>
        <li class="nav-item"><a class="nav-link" href="#specifications">Specifications</a></li>
        <li class="nav-item"><a class="nav-link" href="#sustainability">Sustainability</a></li>
        <li class="nav-item"><a class="nav-link" href="#documents">Documents</a></li>
        <li class="nav-item"><a class="nav-link" href="#related-items">Related items</a></li>
      </ul>
    </div>
  </div>

  <section id="main-information">
    <div class="container">
      <div class="product-summary">
        <div class="product-gallery">
          <?php
          /**
           * Hook: woocommerce_before_single_product_summary.
           *
           * @hooked woocommerce_show_product_sale_flash - 10
           * @hooked woocommerce_show_product_images - 20
           */
          do_action( 'woocommerce_before_single_product_summary' );
          ?>
        </div>
        <div class="product-short-desc">
          <h3>Short description</h3>
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>Brand</td>
                <td><img src="@asset('brand-logo-sample.svg')" alt=""></td>
              </tr>
              <tr>
                <td>Marketing Trade Name</td>
                <td><a href="#">QO</a></td>
              </tr>
              <tr>
                <td>Cover Type</td>
                <td><a href="#">Order separately</a></td>
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
              <tr>
                <td>Maximum Number of Single Pole Circuits</td>
                <td><a href="#">52</a></td>
              </tr>
              <tr>
                <td>Rated Current</td>
                <td><a href="#">200A</a></td>
              </tr>
              <tr>
                <td>Load Center Type</td>
                <td><a href="#">Main breaker</a></td>
              </tr>
              <tr>
                <td>Enclosure Rating</td>
                <td><a href="#">NEMA 1 indoor</a></td>
              </tr>
              <tr>
                <td>Product Certifications</td>
                <td><a href="#">UL Listed</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="product-pricing">
          <div class="product-pricing-card">
            <p class="stock-info stock-info__fast">20 pieces available in 1-3 days</p>
            <p class="stock-info">10+ pieces available in 4-7 day</p>
            <?php
            /**
             * Hook: woocommerce_single_product_summary.
             *
             * @hooked woocommerce_template_single_title - 5
             * @hooked woocommerce_template_single_rating - 10
             * @hooked woocommerce_template_single_price - 10
             * @hooked woocommerce_template_single_excerpt - 20
             * @hooked woocommerce_template_single_add_to_cart - 30
             * @hooked woocommerce_template_single_meta - 40
             * @hooked woocommerce_template_single_sharing - 50
             * @hooked WC_Structured_Data::generate_product_data() - 60
             */
            do_action( 'woocommerce_single_product_summary' );
            ?>
          </div>
          <div class="product-pricing-card product-pricing-card__narrow">
            <div class="product-pricing-card__top">
              Price range
            </div>
            <div class="product-pricing-card__body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Amount (pcs)</td>
                    <th>Price</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1+</td>
                    <td>1,249.00&nbsp;€</td>
                  </tr>
                  <tr>
                    <td>5+</td>
                    <td>1,135.00&nbsp;€</td>
                  </tr>
                  <tr>
                    <td>10+</td>
                    <td>1,084.00&nbsp;€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="site-divider"></div>

  <section class="section" id="main-documents">
    <div class="container">
      <h2>Main documents</h2>
      <div class="product-documents">
        <div class="documents-wrapper">
          <div class="documents-list">
            <a class="document" href="#" download>
              <div class="document-name"><img src="@asset('document-pdf-icon.svg')" alt="">Product Datasheet</div>
              <span class="material-icons">download</span>
            </a>
            <a class="document" href="#" download>
              <div class="document-name"><img src="@asset('document-pdf-icon.svg')" alt="">Product Datasheet</div>
              <span class="material-icons">download</span>
            </a>
            <a class="document" href="#" download>
              <div class="document-name"><img src="@asset('document-pdf-icon.svg')" alt="">Product Datasheet Test Product Test</div>
              <span class="material-icons">download</span>
            </a>
            <a class="document" href="#" download>
              <div class="document-name"><img src="@asset('document-pdf-icon.svg')" alt="">Product Datasheet</div>
              <span class="material-icons">download</span>
            </a>
          </div>
          <a class="show-more-link" href="#documents">See all documents<span class="material-icons-outlined">chevron_right</span></a>
        </div>
      </div>
    </div>
  </section>

  <div class="site-divider"></div>
  <!--
  <section class="section" id="similar-items">
    <div class="container">
      <div class="product-row">
        <div class="product-row__left">
          <h2>Similar items</h2>
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
        </div>
      </div>
    </div>
  </section>
  -->
  @php $similar_items = wc_get_products( array(
            'limit' => 8,
  )); @endphp
  <x-slider-two title="Similar items" :items="$similar_items" id="similar-items" />

  <div class="site-divider"></div>

  <section class="section" id="description">
    <div class="container">
      <div class="product-row">
        <div class="product-row__left">
          <h2>Description</h2>
        </div>
        <div class="product-row__right">
          <p class="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. VestibL</p>
        </div>
      </div>
    </div>
  </section>

  <div class="site-divider"></div>

  <section class="section" id="specifications">
    <div class="container">
      <div class="product-row">
        <div class="product-row__left">
          <h2>Specifications</h2>
        </div>
        <div class="product-row__right">
          <table class="table table-special">
            <tbody>
              <tr>
                <td class="specification-category" colspan="2">Main</td>
              </tr>
              <tr>
                <td>Marketing Trade Name</td>
                <td>QO</td>
              </tr>
              <tr>
                <td>Product Type</td>
                <td>Load Center</td>
              </tr>
              <tr>
                <td>Cover Type</td>
                <td>Order separately</td>
              </tr>
              <tr>
                <td class="specification-category" colspan="2">Complementary</td>
              </tr>
              <tr>
                <td>Tightening Torque</td>
                <td>Cover 20 lb.in</td>
              </tr>
              <tr>
                <td>Load Center Type</td>
                <td>Main breaker</td>
              </tr>
              <tr>
                <td>Rated Current</td>
                <td>200 A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <div class="site-divider"></div>

  <section class="section" id="sustainability">
    <div class="container">
      <div class="product-row">
        <div class="product-row__left">
          <h2>Sustainability</h2>
          <div class="product-row__content">
            <p>Green PremiumTM label is Schneider Electric's commitment to delivering products with best-in-class environmental performance. Green Premium promises compliance with the latest regulations, transparency on environmental impacts, as well as circular and low-CO2 products.</p>
            <a class="show-more-link" href="#">Learn more<span class="material-icons-outlined">chevron_right</span></a>
          </div>
        </div>
        <div class="product-row__right">
          <table class="table table-special">
              <tbody>
                <tr>
                  <td class="specification-category" colspan="2">Well-being perfomance</td>
                </tr>
                <tr>
                  <td>REACh free of SVHC</td>
                  <td><span class="material-icons">check_circle</span></td>
                </tr>
                <tr>
                  <td>Toxic heavy metal free</td>
                  <td><span class="material-icons">check_circle</span></td>
                </tr>
                <tr>
                  <td>Mercury free</td>
                  <td><span class="material-icons">check_circle</span></td>
                </tr>
                <tr>
                  <td>RoHS exemption information</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>REACh Regulation</td>
                  <td><a href="#" target="_blank" rel="noopener noreferrer">REACh Declaration</a></td>
                </tr>
                <tr>
                  <td>EU RoHS Directive</td>
                  <td>Compliant<br><a href="#">EU RoHS Declaration</a></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </section>

  <div class="site-divider"></div>

  <section class="section" id="documents">
    <div class="container">
      <div class="product-row">
        <div class="product-row__left">
          <h2>Documents</h2>
          <div class="product-row__content">
            <div class="doc-category-selector">
              <p>Document category</p>
              <select class="form-select doc-category-select" name="doc-category" id="doc-category">
                <option selected value="">Select...</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>
          </div>
        </div>
        <div class="product-row__right">
          <div class="documents">
            <a href="#" class="single-doc">
              <div class="single-doc__meta">
                <div class="single-doc__icon"><img src="@asset('document-pdf-icon.svg')" alt=""></div>
                <div class="single-doc_content">
                  <p class="single-doc__title">China RoHS declaration</p>
                  <div class="single-doc__text">QO142M200P : Load center, QO, 1 phase, 42 spaces, 52 circuits, 200A convertible main breaker, PoN, NEMA1, UL</div>
                </div>
              </div>
              <div class="single-doc__date">04/05/2022</div>
            </a>
            <a href="#" class="single-doc">
              <div class="single-doc__meta">
                <div class="single-doc__icon"><img src="@asset('document-doc-icon.svg')" alt=""></div>
                <div class="single-doc_content">
                  <p class="single-doc__title">China RoHS declaration</p>
                  <div class="single-doc__text">QO142M200P : Load center, QO, 1 phase, 42 spaces, 52 circuits, 200A convertible main breaker, PoN, NEMA1, UL</div>
                </div>
              </div>
              <div class="single-doc__date">04/05/2022</div>
            </a>
            <a href="#" class="single-doc">
              <div class="single-doc__meta">
                <div class="single-doc__icon"><img src="@asset('document-svg-icon.svg')" alt=""></div>
                <div class="single-doc_content">
                  <p class="single-doc__title">China RoHS declaration</p>
                  <div class="single-doc__text">QO142M200P : Load center, QO, 1 phase, 42 spaces, 52 circuits, 200A convertible main breaker, PoN, NEMA1, UL</div>
                </div>
              </div>
              <div class="single-doc__date">04/05/2022</div>
            </a>
            <a href="#" class="single-doc">
              <div class="single-doc__meta">
                <div class="single-doc__icon"><img src="@asset('document-zip-icon.svg')" alt=""></div>
                <div class="single-doc_content">
                  <p class="single-doc__title">China RoHS declaration</p>
                  <div class="single-doc__text">QO142M200P : Load center, QO, 1 phase, 42 spaces, 52 circuits, 200A convertible main breaker, PoN, NEMA1, UL</div>
                </div>
              </div>
              <div class="single-doc__date">04/05/2022</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="site-divider"></div>
  <!--
  <section class="section" id="related-items">
    <div class="container">
      <div class="product-row">
        <div class="product-row__left">
          <h2>Related items</h2>
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
        </div>
      </div>
    </div>
  </section>
  -->

	<?php
	/**
	 * Hook: woocommerce_after_single_product_summary.
	 *
	 * @hooked woocommerce_output_product_data_tabs - 10
	 * @hooked woocommerce_upsell_display - 15
	 * @hooked woocommerce_output_related_products - 20
	 */
	do_action( 'woocommerce_after_single_product_summary' );
	?>

</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>
