<?php

use Faker\Generator as Faker;

$factory->define(App\Gift::class, function (Faker $faker) {
    return [
        'id_user' 		=> $faker->numberBetween($min = 1, $max = 20),
        'id_activity' 	=> $faker->numberBetween($min = 1, $max = 20),
        'message' 		=> $faker->text(),
        'email' 		=> $faker->email(),
    ];
});
