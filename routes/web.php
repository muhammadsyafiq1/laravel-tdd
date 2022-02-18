<?php

use Illuminate\Foundation\Application;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ThreadController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class);
Route::get('/dashboard', DashboardController::class)->name('dashboard');
Route::resource('threads', ThreadController::class);
require __DIR__.'/auth.php';
