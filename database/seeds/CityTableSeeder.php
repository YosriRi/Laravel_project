<?php

use Illuminate\Database\Seeder;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $city = [
    		[
            	'name' => 'Paris',
        	],
        	[
            	'name' => 'Lille',
        	],
        	[
            	'name' => 'Marseille',
        	],
        	[
            	'name' => 'Lyon',
        	],
        	[
            	'name' => 'Rouen',
        	]
    	];

        DB::table('cities')->insert($city);
    }
}
