<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = [
    		[
            	'name' => 'Eau',
            	'description' => 'Ici vous trouverez toutes les activités en lien avec l\'eau',
        	],
        	[
            	'name' => 'Terre',
            	'description' => 'Ici vous trouverez toutes les activités en lien avec la terre',
        	],
        	[
            	'name' => 'Air',
            	'description' => 'Ici vous trouverez toutes les activités en lien avec l\'air',
        	],
        	[
            	'name' => 'Neige',
            	'description' => 'Ici vous trouverez toutes les activités en lien avec la neige',
        	]
    	];

        DB::table('categories')->insert($category);
    }
}
