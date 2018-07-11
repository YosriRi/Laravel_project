<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Users::class, function (Faker $faker) {
	// Génère des données aléatoire pour chaque champ
    return [
    	'firstname' 		=> $faker->firstname,
        'lastname' 			=> $faker->lastname,
        'address' 			=> $faker->address,
        'phone' 			=> $faker->phoneNumber,
        'sexe' 				=> "M",
        'date_of_birth' 	=> $faker->date,
        'user_or_admin' 	=> $faker->numberBetween($min = 0, $max = 1),
        'question_password' => $faker->text(),
        'email' 			=> $faker->email,
        'alt_email' 		=> $faker->email,
        'password' 			=> $faker->password
    ];
});
