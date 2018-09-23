<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gifts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_user')->unsigned();
            $table->integer('id_activity')->unsigned();
            $table->text('message');
            $table->string('email', 255);
            $table->timestamps();

            $table->foreign('id_user')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');

            $table->foreign('id_activity')
            ->references('id')
            ->on('activities')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gifts');
    }
}
