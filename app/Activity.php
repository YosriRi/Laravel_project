<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
	protected $fillable = [
    	'name',
    	'type',
    	'duration',
    	'description',
    	'date_of_activity',
	];
}
