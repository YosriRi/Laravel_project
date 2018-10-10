<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return view('index', ['name' => 'loginComponent']);
    }

    public function register()
    {
        return view('index', ['name' => 'registerComponent']);
    }
}
