<?php

use Illuminate\Database\Seeder;

class GiftTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Gift::class, 20)->create();
    }
}
