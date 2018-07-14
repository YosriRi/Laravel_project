<?php

use Faker\Generator as Faker;

$factory->define(App\Activities::class, function (Faker $faker) {
    return [
        'name' 				=> $faker->name,
        'type' 				=> $faker->name,
        'duration' 			=> $faker->numberBetween($min = 2, $max = 60),
        'description' 		=> $faker->text(),
        'date_of_activity' 	=> $faker->datetime
    ];
});
