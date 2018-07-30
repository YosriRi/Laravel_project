<?php

use Faker\Generator as Faker;

$factory->define(App\Payement::class, function (Faker $faker) {
    return [
        'creditCardType'=> $faker->creditCardType,   
        'creditCardNumber'=> $faker->creditCardNumber,  
        'creditCardExpirationDate'=> $faker->creditCardExpirationDate,
        'iban'=> $faker->iban("FR"),    
        'BicNumber'=> $faker->swiftBicNumber      
    ];
});
