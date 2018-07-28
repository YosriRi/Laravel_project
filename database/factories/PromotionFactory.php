<?php

use Faker\Generator as Faker;

$factory->define(App\Promotion::class, function (Faker $faker) {
    return [
        'description' => $faker->text(20),
        'amount' => $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 100)
    ];
});
