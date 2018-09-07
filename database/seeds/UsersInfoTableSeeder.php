<?php

use Illuminate\Database\Seeder;

class UsersInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	// Lance la génération de données en précisant le nombre à générer
        factory(App\UsersInfo::class, 5)->create();
    }
}
