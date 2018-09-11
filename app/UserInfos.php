<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserInfos extends Model
{
	protected $fillable = [
    	'firstname',
    	'lastname',
    	'address',
    	'phone',
    	'sexe',
    	'date_of_birth',
    	'user_or_admin',
    	'question_password',
    	'alt_email',
	];
}
