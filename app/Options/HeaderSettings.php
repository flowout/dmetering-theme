<?php

namespace App\Options;

use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class HeaderSettings extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Dmetering Settings';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Dmetering Settings | Options';

    /**
     * The option page field group.
     *
     * @return array
     */
    public function fields()
    {
        $headerSettings = new FieldsBuilder('header_settings');
        $headerSettings
            ->addTab('Top bar')
            ->addText('top_bar_text', [
                'wrapper' => [
                    'width' => '50',
                ],
            ])
            ->addImage('bar_image', [
                'preview_size' => 'medium',
                'wrapper' => [
                    'width' => '30',
                ],
            ])
            ->addTab('Header settings')
            ->addImage('logo', [
                'preview_size' => 'medium',
                'wrapper' => [
                    'width' => '30',
                ],
              ])
            ->addImage('mobile_logo', [
                'preview_size' => 'full',
                'wrapper' => [
                    'width' => '30',
                ],
              ])
            ->addTab('Featured Items')
            ->addPostObject('featured', [
              'label' => 'Featured Items',
              'instructions' => '',
              'required' => 0,
              'wrapper' => [
                  'width' => '',
                  'class' => '',
                  'id' => '',
              ],
              'post_type' => ['product'],
              'allow_null' => 0,
              'multiple' => 1,
              'return_format' => 'integer',
              'ui' => 1,
          ]);

        return $headerSettings->build();
    }
}
