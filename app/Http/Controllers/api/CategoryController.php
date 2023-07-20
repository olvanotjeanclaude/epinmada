<?php

namespace App\Http\Controllers\api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->input('name', '');
        
        $name = is_string($name) ? $name : '';
        
        $categories = Category::where('name', 'LIKE', "%$name%")->paginate(10);
        
        return response()->json($categories);
    }
}
