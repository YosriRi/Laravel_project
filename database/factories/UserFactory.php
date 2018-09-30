<?php

use Faker\Generator as Faker;

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'firstname' 	=> $faker->name,
        'lastname' 		=> $faker->name,
        'email' 		=> $faker->email,
        'password' 		=> bcrypt($faker->password),
    ];
});
