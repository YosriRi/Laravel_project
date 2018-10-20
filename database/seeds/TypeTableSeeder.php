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
				'name' 			=> 'Parachute',
				'description' 	=> 'Parachute',
        	],
        	[
				'name' 			=> 'Deltaplane',
				'description' 	=> 'Deltaplane',
        	],
        	[
				'name' 			=> 'Surf',
				'description' 	=> 'Surf',
        	],
        	[
				'name' 			=> 'Voile',
				'description' 	=> 'Voile',
        	],
        	[
				'name' 			=> 'Motoneige',
				'description' 	=> 'Motoneige',
        	]
    	];

        DB::table('types')->insert($type);
    }
}
