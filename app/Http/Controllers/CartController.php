<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Cart;
use App\Http\Resources\Cart as CartResource;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $carts = Cart::where('id_user', $request->id_user)->get();
        
        return CartResource::collection($carts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cart = new Cart;

        $cart->id_user          = $request->input('id_user');
        $cart->id_activity      = $request->input('id_activity');
        $cart->date             = $request->input('date');
        $cart->hour             = $request->input('hour');
        $cart->number_of_person = $request->input('number_of_person');

        if ($cart->save()) {
            return new CartResource($cart);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cart = Cart::findOrFail($id);

        return new CartResource($cart);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $cart = Cart::findOrFail($id);

        $cart->id_user          = $request->input('id_user');
        $cart->id_activity      = $request->input('id_activity');
        $cart->date             = $request->input('date');
        $cart->hour             = $request->input('hour');
        $cart->number_of_person = $request->input('number_of_person');

        if ($cart->save()) {
            return new CartResource($cart);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cart = Cart::findOrFail($id);

        if ($cart->delete()) {
            return new CartResource($cart);
        }
    }
}
