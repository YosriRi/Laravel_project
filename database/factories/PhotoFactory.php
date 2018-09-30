<?php

use Faker\Generator as Faker;

$factory->define(App\Photo::class, function (Faker $faker) {
    return [
        'id_user' 		=> $faker->numberBetween($min = 1, $max = 20),
        'id_activity' 	=> $faker->numberBetween($min = 1, $max = 20),
        'name' 			=> $faker->name,
    ];
});
