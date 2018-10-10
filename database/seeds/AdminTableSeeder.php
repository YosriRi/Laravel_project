<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$admin = [
    		[
            	'firstname' => "Yosri",
            	'lastname' => "Riani",
            	'email' => "yosri.riani@gmail.com",
            	'password' => bcrypt('yosri'),
        	],
        	[
            	'firstname' => "Ahmet",
            	'lastname' => "Bolek",
            	'email' => "ahmet.bolek@gmail.com",
            	'password' => bcrypt('ahmet'),
        	],
        	[
            	'firstname' => "Stéphane",
            	'lastname' => "Lin",
            	'email' => "stephane.lin@gmail.com",
            	'password' => bcrypt('stephane'),
        	]
    	];

        DB::table('admin')->insert($admin);
    }
}
