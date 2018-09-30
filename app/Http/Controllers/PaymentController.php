<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Payment;
use App\Http\Resources\Payment as PaymentResource;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $payments = Payment::paginate(15);

        return PaymentResource::collection($payments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $payment = new Payment;

        $payment->id_user = $request->input('id_user');
        $payment->creditCardType = $request->input('creditCardType');
        $payment->creditCardNumber = $request->input('creditCardNumber');
        $payment->creditCardExpirationDate = $request->input('creditCardExpirationDate');
        $payment->iban = $request->input('iban');
        $payment->BicNumber = $request->input('BicNumber');

        if ($payment->save()) {
            return new PaymentResource($payment);
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
        $payment = Payment::findOrFail($id);

        return new PaymentResource($payment);
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
        $payment = Payment::findOrFail($id);

        $payment->id_user = $request->input('id_user');
        $payment->creditCardType = $request->input('creditCardType');
        $payment->creditCardNumber = $request->input('creditCardNumber');
        $payment->creditCardExpirationDate = $request->input('creditCardExpirationDate');
        $payment->iban = $request->input('iban');
        $payment->BicNumber = $request->input('BicNumber');

        if ($payment->save()) {
            return new PaymentResource($payment);
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
        $payment = Payment::findOrFail($id);
        
        if ($payment->delete()) {
            return new PaymentResource($payment);
        } 
    }
}
