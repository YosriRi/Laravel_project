<?php

use Illuminate\Database\Seeder;

class PhotoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

            $Photo = [
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (1).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (2).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (3).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (4).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (5).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (6).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (7).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (8).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (9).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (10).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (11).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (12).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (13).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (14).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (15).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (16).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (17).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (18).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (19).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (20).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (21).jpg'
                ],
                [
                    'id_user' 		    => 1,
                    'id_activity' 		=> 1,
                    'name' 				=> '/images/gallery/gallery (22).jpg'
                ]
            ];
            DB::table('photos')->insert($Photo);

    }
}
