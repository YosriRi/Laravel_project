<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
    	'creditCardType',
    	'creditCardNumber',
    	'creditCardExpirationDate',
    	'iban',
    	'BicNumber',
	];
}
