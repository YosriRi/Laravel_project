<?php

use Faker\Generator as Faker;

$factory->define(App\Sale::class, function (Faker $faker) {
    return [
        'id_reservation' 	=> $faker->numberBetween($min = 1, $max = 20),
        'amount' 			=> $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 50),
    ];
});
