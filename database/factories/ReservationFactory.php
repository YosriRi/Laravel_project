<?php

use Faker\Generator as Faker;

$factory->define(App\Reservation::class, function (Faker $faker) {
    return [
        'id' 	      => $faker->numberBetween($min = 1, $max = 20),
        'id_user'     => $faker->numberBetween($min = 1, $max = 20),
        'id_activity' => $faker->numberBetween($min = 1, $max = 20),
        'amount'      => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 50),
        'date'        => $faker->datetime,
        'heure'       => $faker->time,
    ];
});
