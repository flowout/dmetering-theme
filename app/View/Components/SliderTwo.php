<?php

namespace App\View\Components;

use Illuminate\View\Component;

class SliderTwo extends Component
{
    public $title;
    public $items;
    public $id;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($title, $items, $id = null)
    {
        $this->title = $title;
        $this->items = $items;
        $this->id = $id;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.slider-two');
    }
}
