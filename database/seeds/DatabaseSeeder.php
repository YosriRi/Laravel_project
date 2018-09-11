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
        $this->call(UserInfoTableSeeder::class);
        $this->call(ActivityTableSeeder::class);
        $this->call(CommentTableSeeder::class);
        $this->call(PhotoTableSeeder::class);
        $this->call(SaleTableSeeder::class);
        $this->call(ReservationTableSeeder::class);
        $this->call(NoteTableSeeder::class);
        $this->call(PromotionTableSeeder::class);
        $this->call(GiftTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(PaymentTableSeeder::class);
    }
}
