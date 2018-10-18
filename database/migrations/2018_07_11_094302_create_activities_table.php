<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_category')->unsigned();
            $table->integer('id_type')->unsigned();
            $table->integer('id_city')->unsigned();
            $table->integer('id_region')->unsigned();
            $table->integer('id_country')->unsigned();
            $table->string('name', 100);
            $table->text('description');
            $table->decimal('amount');
            $table->string('image1_location', 100);
            $table->string('image2_location', 100);
            $table->string('image3_location', 100);
            $table->datetime('start');
            $table->datetime('end');
            $table->integer('number_of_persons');
            $table->timestamps();

            $table->foreign('id_category')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');

            $table->foreign('id_type')
            ->references('id')
            ->on('types')
            ->onDelete('cascade');

            $table->foreign('id_city')
            ->references('id')
            ->on('cities')
            ->onDelete('cascade');

            $table->foreign('id_region')
            ->references('id')
            ->on('regions')
            ->onDelete('cascade');

            $table->foreign('id_country')
            ->references('id')
            ->on('countries')
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
        Schema::dropIfExists('activities');
    }
}
