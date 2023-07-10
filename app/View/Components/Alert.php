<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Alert extends Component
{
    public function __construct(
        public array $errors = []
    ) {
    }


    public function render()
    {
        return view('components.alert');
    }
}
