<?php

use Faker\Generator as Faker;

$factory->define(App\UserInfo::class, function (Faker $faker) {
	// Génère des données aléatoire pour chaque champ
    return [
        'id_user'           => $faker->numberBetween($min = 1, $max = 20),
        'id_country'        => $faker->numberBetween($min = 1, $max = 20),
        'address' 			=> $faker->address,
        'postal_code'       => '75000',
        'phone' 			=> $faker->phoneNumber,
        'sexe' 				=> "M",
        'date_of_birth' 	=> $faker->date,
        'question_password' => $faker->text(),
        'alt_email' 		=> $faker->email,
    ];
});
