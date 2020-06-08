<?php

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('articles')->insert([
            'header' => Str::random(50),
            'image' => Str::random(50),
            'content' => Str::random(100),
         ]);
    }
}
