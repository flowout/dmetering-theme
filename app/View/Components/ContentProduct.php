<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ContentProduct extends Component
{
    public $title;
    public $items;
    public $thumbnail;
    
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.content-product');
    }
}
