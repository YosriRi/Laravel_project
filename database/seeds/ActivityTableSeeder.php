<?php

use Illuminate\Database\Seeder;

class ActivityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Lance la génération de données en précisant le nombre à générer
        factory(App\Activity::class, 20)->create();
    }
}
