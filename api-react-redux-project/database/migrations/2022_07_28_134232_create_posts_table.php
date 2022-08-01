<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamp('Date')->useCurrent();
            $table->text('post');
            $table->integer('rule')->default(0);
            $table->integer('likes')->default(0);

            $table->foreignId('costumer_id')->nullable()->constrained('costumers')->onDelete('cascade');
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            // $table->foreignId('costumer_id')->nullable()->constrained('costumers');
>>>>>>> e95521bce25eb3b2eec4db6165998f5e82765e6e
>>>>>>> 27bb64db685bd9bfd8a14e7d4c01337670189fb7
=======
            // $table->foreignId('costumer_id')->nullable()->constrained('costumers');
>>>>>>> 06be71a4f4171562c7881cbf2f9b9c319e484fb2
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
        Schema::dropIfExists('posts');
    }
}
