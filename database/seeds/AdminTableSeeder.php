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
            	'password' => sha1('yosri'),
        	],
        	[
            	'firstname' => "Ahmet",
            	'lastname' => "Bolek",
            	'email' => "ahmet.bolek@gmail.com",
            	'password' => sha1('ahmet'),
        	],
        	[
            	'firstname' => "Stéphane",
            	'lastname' => "Lin",
            	'email' => "stephane.lin@gmail.com",
            	'password' => sha1('stephane'),
        	]
    	];

        DB::table('admins')->insert($admin);
    }
}
