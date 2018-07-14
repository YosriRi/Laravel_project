<?php

use Illuminate\Database\Seeder;

class ActivitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Lance la génération de données en précisant le nombre à générer
        factory(App\Activities::class, 50)->create();
    }
}
