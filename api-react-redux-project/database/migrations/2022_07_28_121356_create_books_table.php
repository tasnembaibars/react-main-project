<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('date')->nullable();


            $table->string('user_phone')->nullable();
            $table->string('address')->nullable();
            $table->string('sub_email')->nullable();
            $table->boolean('book_state')->nullable();

            $table->foreignId('service_id')->nullable()->constrained('services');
            $table->foreignId('costumer_id')->nullable()->constrained('costumers');
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
        Schema::dropIfExists('books');
    }
}
