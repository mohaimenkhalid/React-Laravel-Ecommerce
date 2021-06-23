<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_infos', function (Blueprint $table) {
            $table->id();
            $table->text('about');
            $table->longText('terms');
            $table->longText('policy');
            $table->longText('purchase_guide');
            $table->text('about_company');
            $table->text('address');
            $table->string('facebook_link');
            $table->string('twitter_link');
            $table->string('instagram_link');
            $table->text('delivery_notice');
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
        Schema::dropIfExists('site_infos');
    }
}
