<?php

use Faker\Generator as Faker;

$factory->define(App\Payment::class, function (Faker $faker) {
    return [
    	'id_user'           => $faker->numberBetween($min = 1, $max = 100),
        'creditCardType'=> $faker->creditCardType,   
        'creditCardNumber'=> $faker->creditCardNumber,  
        'creditCardExpirationDate'=> $faker->creditCardExpirationDate,
        'iban'=> $faker->iban("FR"),    
        'BicNumber'=> $faker->swiftBicNumber      
    ];
});
