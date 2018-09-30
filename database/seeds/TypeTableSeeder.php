<?php

use Illuminate\Database\Seeder;

class TypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $type = [
    		[
            	'name' => 'Parachute',
        	],
        	[
            	'name' => 'Deltaplane',
        	],
        	[
            	'name' => 'Surf',
        	],
        	[
            	'name' => 'Voile',
        	],
        	[
            	'name' => 'Motoneige',
        	]
    	];

        DB::table('types')->insert($type);
    }
}
