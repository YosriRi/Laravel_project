<?php

use Faker\Generator as Faker;

$factory->define(App\Gift::class, function (Faker $faker) {
    return [
        'description' => $faker->text(20),
        'id_user' => $faker->randomNumber($nbDigits = 2, $strict = false) ,
        'id_activity' => $faker->randomNumber($nbDigits = 2, $strict = false) 
    ];
});
