<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use App\Models\User;

class ThreadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'category_id' => rand(1,5),
            'title' => $name = \Str::title($this->faker->sentence()),
            'slug' => \Str::slug($name . '-' . \Str::random(6)),
            'body' => $this->faker->paragraph(),
        ];
    }
}
