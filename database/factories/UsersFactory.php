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
	// Génère des données aléatoire
    return [
    	'firstname' => $faker->firstname,
        'lastname' => $faker->lastname,
        'email' => $faker->email,
        'password' => 'azerty'
    ];
});
