<?php

use App\Models\Thread;
use App\Models\User;
use App\Models\Category;

test('an authenticated user can be create new thread', function () {


    $thread = Thread::factory()->make();

    $user  = User::factory()->create();

    $response = $this->actingAs($user)->post(route('threads.store'), $thread->toArray());

    expect($response->getStatusCode())->toEqual(302);

    $response->assertRedirect();
});

test('an authenticated user can not create new thread if he does not fill anything required', function () {

    $user  = User::factory()->create();

    $response = $this->actingAs($user)->post(route('threads.store'), [
        'title' => '',
    ]);

    expect($response->getStatusCode())->toEqual(302);

    $response->assertRedirect();
});


test('a guest can not create new thread', function () {

    $thread = Thread::factory()->make();

    $response = $this->post(route('threads.store'), $thread->toArray());
    
    $response->assertRedirect(route('login'));

    $this->assertGuest();

});


it('can be update by the owner of thread', function(){
    $user = User::factory()->create();

    $thread = Thread::factory()->create(['user_id' => $user->id]);

    expect($user->id)->toEqual($thread->user_id);

    $response = $this->actingAs($user)->put(route('threads.update', $thread->id), [
        'title' => 'Thread Updated',
        'body' => 'The body updated',
        'category_id' => Category::factory()->create()->id
    ]);

    $response->assertRedirect();

    expect($response->getRequest()->title)->toEqual('Thread Updated');
});

it('can not be updated if he does not fill anything required', function(){
    $user = User::factory()->create();

    $thread = Thread::factory()->create(['user_id'=> $user->id]);

    expect($thread->user_id)->toEqual($user->id);

    $response = $this->actingAs($user)->put(route('threads.update', $thread->id), []);

    $response->assertRedirect()->assertSessionHasErrors();
});

it('can not be updated if he not own the thread', function(){
    $user = User::factory()->create();

    $thread = Thread::factory()->create();

    $response = $this->actingAs($user)->put(route('threads.update', $thread->id), []);

    expect($response->status())->toEqual(403);
});

it('can be deleted by the owner of the thread', function(){
    $user = User::factory()->create();

    $thread = Thread::factory()->create(['user_id' => $user->id]);

    expect($user->id)->toEqual($thread->user_id);

    $response = $this->actingAs($user)->delete(route('threads.destroy', $thread->id));

    $response->assertRedirect(route('threads.index'));

    $this->assertDeleted($thread);
});

it('can not be deleted if he does do not own the thread', function(){
    $user = User::factory()->create();

    $thread = Thread::factory()->create();


    $response = $this->actingAs($user)->delete(route('threads.destroy', $thread->id));

    expect($response->status())->toEqual(403);
});  









 














 