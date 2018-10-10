<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
	protected $fillable = [
    	'name',
    	'description',
    	'amount',
    	'start',
    	'end',
    	'number_of_persons',
	];
}
