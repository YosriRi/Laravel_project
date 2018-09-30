<?php

use Faker\Generator as Faker;

$factory->define(App\Sale::class, function (Faker $faker) {
    return [
        'sales_amount' => $faker->numberBetween($min = 1000, $max = 10000),
        'id_promotion' => $faker->numberBetween($min = 1, $max = 100),
        'activity_price' => $faker->numberBetween($min = 100, $max = 1000)
    ];
});
