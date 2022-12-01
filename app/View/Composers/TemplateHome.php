<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class TemplateHome extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        //
        'template-home'
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'featured' => $this->getFeaturedItems(),
            'bestselling' => $this->getBestSellingItems(),
        ];
    }

    public function getFeaturedItems()
    { 
        $featured = get_field('featured', 'option') ?? false;
        return wc_get_products(array(
          'include'  => $featured,
          'return'   => 'ids',
        ));
        /*return collect(get_field('featured', 'option'))->map(function ($productID) {
            $product = wc_get_product($productID);
            return (object) [
                'title' => $product->get_name(),
                'url' => get_permalink($productID),
            ];
        });*/
    }
    public function getBestSellingItems()
    { 
        return wc_get_products( array(
            'meta_key' => 'total_sales',
            'return'   => 'ids',
            'limit' => 8,
            'orderby'  => array( 'meta_value_num' => 'DESC', 'title' => 'ASC' ), // order from highest to lowest of top sellers
        ) );
    }
}
