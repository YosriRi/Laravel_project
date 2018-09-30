<?php

use Illuminate\Database\Seeder;

class UserInfoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	// Lance la génération de données en précisant le nombre à générer
        factory(App\UserInfo::class, 10)->create();
    }
}
