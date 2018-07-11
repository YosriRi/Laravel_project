<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id_user');
            $table->string('firstname', 15);
            $table->string('lastname', 15);
            $table->string('address', 100);
            $table->string('phone', 25);
            $table->string('sexe', 1);
            $table->date('date_of_birth');
            $table->integer('user_or_admin');
            $table->string('question_password', 255);
            $table->string('email', 100)->unique();
            $table->string('alt_email', 100);
            $table->string('password', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
