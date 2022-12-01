<?php

namespace App\View\Components;

use Illuminate\View\Component;

class SliderOne extends Component
{

    public $title;
    public $items;
    public $color;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($title, $items, $color = null)
    {
        $this->title = $title;
        $this->items = $items;
        $this->color = $color;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.slider-one');
    }
}
