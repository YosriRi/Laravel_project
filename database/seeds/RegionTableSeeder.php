<?php

use Illuminate\Database\Seeder;

class RegionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $region = [
    		[
            	'name' => 'Ile-de-France',
        	],
        	[
            	'name' => 'Corse',
        	],
        	[
            	'name' => 'Normandie',
        	],
        	[
            	'name' => 'Bretagne',
        	],
        	[
            	'name' => 'Provence-Alpes-Côte d\'Azur',
        	]
    	];

        DB::table('regions')->insert($region);
    }
}
