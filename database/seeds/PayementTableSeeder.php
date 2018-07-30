<?php

use Illuminate\Database\Seeder;

class PayementTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Payement::class, 20)->create();
    }
}
