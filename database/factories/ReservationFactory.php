<?php

use Faker\Generator as Faker;

$factory->define(App\Reservation::class, function (Faker $faker) {
    return [
        'description' => $faker->text(20),
        'date_of_activity' =>$faker->date
    ];
});
