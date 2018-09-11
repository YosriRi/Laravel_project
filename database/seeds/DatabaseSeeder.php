<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersInfoTableSeeder::class);
        $this->call(ActivitiesTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(PhotosTableSeeder::class);
        $this->call(SalesTableSeeder::class);
        $this->call(ReservationTableSeeder::class);
        $this->call(NoteTableSeeder::class);
        $this->call(PromotionTableSeeder::class);
        $this->call(GiftTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(PayementTableSeeder::class);
    }
}
