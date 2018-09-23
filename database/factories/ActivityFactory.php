<?php

use Faker\Generator as Faker;

$factory->define(App\Activity::class, function (Faker $faker) {
    return [
    	'id_category' 		=> $faker->numberBetween($min = 1, $max = 10),
    	'id_type' 			=> $faker->numberBetween($min = 1, $max = 30),
    	'id_city' 			=> $faker->numberBetween($min = 1, $max = 50),
    	'id_region' 		=> $faker->numberBetween($min = 1, $max = 22),
    	'id_country' 		=> 1,
        'name' 				=> $faker->name,
        'description' 		=> $faker->text(),
        'amount'			=> $faker->numberBetween($min = 1, $max = 100),
        'start' 			=> $faker->datetime,
        'end' 				=> $faker->datetime,
        'number_of_persons' => $faker->numberBetween($min = 5, $max = 20),
    ];
});
