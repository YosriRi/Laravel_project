<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index', ['name' => 'homeComponent']);
    }

    public function searchResult()
    {
        return view('index', ['name' => 'searchResultComponent']);
    }

    public function detailActivity($id)
    {
        return view('index', ['name' => 'detailActivityComponent']);
    }

    public function profile($id)
    {
        return view('index', ['name' => 'profileComponent']);
    }

    public function cart($id)
    {
        return view('index', ['name' => 'paymentComponent']);
    }

    public function all()
    {
        return view('allComponent');
    }
}
