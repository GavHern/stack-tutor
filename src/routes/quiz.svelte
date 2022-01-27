<script lang="ts">
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import ChipPlatter from '$lib/ChipPlatter.svelte';

	let max: number = 52;
	let type: "number" | "card" = "card";

	const hint = writable('Loading...')
</script>

<svelte:head>
	<title>Stack Tutor - Quiz</title>
</svelte:head>

<section in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }} style="height: calc(100vh - 4rem)" class="flex flex-col justify-center items-center space-y-16">
	<div class="h-1/2 grid place-items-center">
		<h1 class="text-8xl dark:text-white font-semibold tracking-widest">{$hint}</h1>
	</div>
	<div class="h-full">
		<ChipPlatter type={type} max={max} hintStore={hint} />
		
		<div class="flex justify-center items-center space-x-4 pt-8">
			<label for="maximum" class="text-gray-600 dark:text-gray-400">Max</label>
			<input id="maxiumum" type="number" bind:value={max} min="1" max="52" class="bg-indigo-50 py-3 px-1 text-center rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">

			<label for="type" class="text-gray-600 dark:text-gray-400 pl-4">Type</label>
			<select id="type" bind:value={type} min="1" max="52" class="bg-indigo-50 py-3 px-3 text-center rounded-lg border-indigo-400 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">\
				<option value="card">Number to Card</option>
				<option value="number">Card to Number</option>
			</select>
		</div>
	</div>
</section>