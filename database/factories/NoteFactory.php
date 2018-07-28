<?php

use Faker\Generator as Faker;

$factory->define(App\Note::class, function (Faker $faker) {
    return [
        'note' => $faker->numberBetween($min = 0, $max = 5),
        'id_user' => $faker->numberBetween($min = 1, $max = 100),
        'id_activity' => $faker->numberBetween($min = 1, $max = 100),
        'id_photos' => $faker->numberBetween($min = 1, $max = 100),
        'activity_or_photo' => $faker->numberBetween($min = 0, $max = 1),
    ];
});
