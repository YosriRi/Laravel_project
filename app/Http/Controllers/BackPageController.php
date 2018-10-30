<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BackPageController extends Controller
{
    public function index()
    {
        return view('backoffice', ['name' => 'app']);
    }

    public function login()
    {
        return view('backoffice', ['name' => 'login']);
    }
}
