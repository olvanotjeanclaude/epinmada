<?php

namespace App\View\Components;

use Illuminate\View\Component;

class ButtonBuyProduct extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public \App\Models\Product $product
    ) {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.button-buy-product');
    }
}
