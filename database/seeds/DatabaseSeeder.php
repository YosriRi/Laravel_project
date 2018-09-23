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
        $this->call(UserTableSeeder::class);
        $this->call(CountryTableSeeder::class);
        $this->call(UserInfoTableSeeder::class);
        $this->call(TypeInfoTableSeeder::class);
        $this->call(CityInfoTableSeeder::class);
        $this->call(RegionInfoTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(ActivityTableSeeder::class);
        $this->call(PromotionTableSeeder::class);
        $this->call(ReservationTableSeeder::class);
        $this->call(SaleTableSeeder::class);
        $this->call(PhotoTableSeeder::class);
        $this->call(CommentTableSeeder::class);
        $this->call(NoteTableSeeder::class);
        $this->call(GiftTableSeeder::class);
        $this->call(AdminTableSeeder::class);
    }
}
