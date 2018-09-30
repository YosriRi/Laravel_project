<?php

use Faker\Generator as Faker;

$factory->define(App\Comment::class, function (Faker $faker) {
    return [
        'comment' => $faker->text(50),
        'id_user' => $faker->numberBetween($min = 1, $max = 100),
        'id_activity' => $faker->numberBetween($min = 1, $max = 100),
        'id_photo' => $faker->numberBetween($min = 1, $max = 100),
        'activity_or_photo' => $faker->numberBetween($min = 0, $max = 1)
    ];
});
