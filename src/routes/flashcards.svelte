<script lang="ts">
	import Flashcard from '$lib/Flashcard.svelte';
	import { fade } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { mnemonica } from '../global';

	const stack = Object.values(mnemonica);

	let showAdditional = false;

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<svelte:head>
	<title>Stack Tutor - Flashcards</title>
</svelte:head>

<section in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }} style="height: calc(100vh - 4rem)" class="flex flex-col justify-center items-center">
	

	<div class="w-full flex justify-center">
		<div class="w-[30em] h-[20em] md:w-[40em] md:h-[25em] xl:w-[50em] xl:h-[30em] overflow-hidden text-center relative {showAdditional ? 'w-[15em] h-[10em] md:w-[20em] md:h-[12em] xl:w-[28em] xl:h-[17em]':''}">
			<div aria-hidden="true" class="absolute -top-12 h-16 w-full bg-white dark:bg-gray-900 blur-md z-20"></div>
			<div aria-hidden="true" class="absolute -bottom-12 h-16 w-full bg-white dark:bg-gray-900 blur-md z-20"></div>
			<div class="counter-digits absolute h-full w-full" style="transform: translate(0, {-100 * offset}%)">
				<Flashcard style="top: 100%" showAdditional ariaHidden="true" card={stack[Math.floor($displayed_count + 1)]} />
				<Flashcard showAdditional card={stack[Math.floor($displayed_count)]} />
			</div>
		</div>
	</div>


	
	<div class="w-full flex justify-center px-16 mt-8 lg:mt-0">
		<div class="h-16 flex border-t border-b dark:border-gray-800">
			<button disabled={count <= 0} on:click={() => {count -= 1}} class="touch-action-manipulation dark:text-gray-300 h-16 w-16 grid place-items-center disabled:opacity-50 disabled:pointer-events-none transition-opacity duration-300">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
				</svg>
			</button>
			<div class="w-32 h-16 overflow-hidden text-center relative">
				<div class="counter-digits absolute h-full w-full" style="transform: translate(0, {-100 * offset}%)">
					<strong class="absolute dark:text-gray-300 grid place-items-center w-full h-full text-3xl" style="top: 100%" aria-hidden="true">{Math.floor($displayed_count + 2)}</strong>
					<strong class="absolute dark:text-gray-300 grid place-items-center w-full h-full text-3xl">{Math.floor($displayed_count + 1)}</strong>
				</div>
			</div>
			<button disabled={count >= 51} on:click={() => {count += 1}} class="touch-action-manipulation dark:text-gray-300 h-16 w-16 grid place-items-center disabled:opacity-50 disabled:pointer-events-none transition-opacity duration-300">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
				</svg>
			</button>
		</div>
	</div>
</section>{offset}