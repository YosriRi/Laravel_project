<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
	protected $fillable = [
		'id_user',
    	'address',
    	'phone',
    	'sexe',
    	'date_of_birth',
    	'user_or_admin',
    	'question_password',
    	'alt_email',
	];
}
