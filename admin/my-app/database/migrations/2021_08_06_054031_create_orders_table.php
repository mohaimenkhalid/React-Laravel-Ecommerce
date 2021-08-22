<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('customer_id');
            $table->string('invoice_no');
            $table->string('payment_type');
            $table->string('payment_id')->nullable();
            $table->string('total_amount')->default(0);
            $table->string('shipping_price')->default(0);
            $table->tinyInteger('is_completed')->default(0);
            $table->string('status')->default('pending');
            $table->tinyInteger('shipped')->default(0);
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
        Schema::dropIfExists('orders');
    }
}
