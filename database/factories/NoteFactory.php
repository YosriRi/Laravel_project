<?php

use Faker\Generator as Faker;

$factory->define(App\Note::class, function (Faker $faker) {
    return [
        'id_user' 		=> $faker->numberBetween($min = 1, $max = 20),
        'id_activity' 	=> $faker->numberBetween($min = 1, $max = 20),
        'id_photo' 		=> $faker->numberBetween($min = 1, $max = 20),
        'note' 			=> $faker->numberBetween($min = 0, $max = 5),
    ];
});
