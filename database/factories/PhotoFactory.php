<?php

use Faker\Generator as Faker;

$factory->define(App\Photo::class, function (Faker $faker) {
    return [
        'media' => $faker->imageUrl($width = 640, $height = 480),
        'id_user' => $faker->numberBetween($min = 1, $max = 100),
        'id_notes' => $faker->numberBetween($min = 1, $max = 100),
        'id_comments' =>$faker->numberBetween($min = 1, $max = 100)
    ];
});