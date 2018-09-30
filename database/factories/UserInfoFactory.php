<?php

use Faker\Generator as Faker;

$factory->define(App\UserInfo::class, function (Faker $faker) {
	// Génère des données aléatoire pour chaque champ
    return [
        'id_user'           => $faker->numberBetween($min = 1, $max = 100),
        'address' 			=> $faker->address,
        'phone' 			=> $faker->phoneNumber,
        'sexe' 				=> "M",
        'date_of_birth' 	=> $faker->date,
        'user_or_admin' 	=> $faker->numberBetween($min = 0, $max = 1),
        'question_password' => $faker->text(),
        'alt_email' 		=> $faker->email,
    ];
});
