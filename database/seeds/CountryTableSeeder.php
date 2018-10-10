<?php

use Illuminate\Database\Seeder;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country = [
    		[
            	'name' => 'France',
        	],
        	[
            	'name' => 'Espagne',
        	],
        	[
            	'name' => 'Allemagne',
        	],
        	[
            	'name' => 'Angleterre',
        	],
        	[
            	'name' => 'Islande',
        	]
    	];

        DB::table('countries')->insert($country);
    }
}
