<?php

use Faker\Generator as Faker;

$factory->define(App\Promotion::class, function (Faker $faker) {
    return [
    	'id_category' 	=> $faker->numberBetween($min = 1, $max = 4),
        'id_type' 		=> $faker->numberBetween($min = 1, $max = 5),
        'description' 	=> $faker->text(),
        'amount' 		=> $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 50),
    ];
});
