<script lang="ts">
	import { mnemonica, aronson } from '../global';
	import { fade } from 'svelte/transition';

	const stacks = {
		'mnemonica': mnemonica,
		'aronson': aronson
	}

	const stackArray = Object.values(mnemonica);
</script>

<section in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }} class="grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-8 h-full px-4 sm:px-16 xl:px-0 pt-4 pb-16">
	<ul class="text-center text-3xl md:text-4xl">
		{#each stackArray.slice(0,13) as card, idx}
			<li class="grid grid-cols-2 auto-rows-min bg-indigo-50 dark:bg-gray-800 shadow-sm rounded-full my-3 md:my-2">
				<div class="bg-indigo-500 text-white rounded-full font-semibold tracking-wider py-1">{idx+1}</div>
				<div class="py-1 text-gray-800 dark:text-gray-300 tracking-widest">{card}</div>
			</li>
		{/each}
	</ul>
	<ul class="text-center text-3xl md:text-4xl">
		{#each stackArray.slice(13,26) as card, idx}
			<li class="grid grid-cols-2 auto-rows-min bg-indigo-50 dark:bg-gray-800 shadow-sm rounded-full my-3 md:my-2">
				<div class="bg-indigo-500 text-white rounded-full font-semibold tracking-wider py-1">{idx+14}</div>
				<div class="py-1 text-gray-800 dark:text-gray-300 tracking-widest">{card}</div>
			</li>
		{/each}
	</ul>
	<ul class="text-center text-3xl md:text-4xl">
		{#each stackArray.slice(26,39) as card, idx}
			<li class="grid grid-cols-2 auto-rows-min bg-indigo-50 dark:bg-gray-800 shadow-sm rounded-full my-3 md:my-2">
				<div class="bg-indigo-500 text-white rounded-full font-semibold tracking-wider py-1">{idx+27}</div>
				<div class="py-1 text-gray-800 dark:text-gray-300 tracking-widest">{card}</div>
			</li>
		{/each}
	</ul>
	<ul class="text-center text-3xl md:text-4xl">
		{#each stackArray.slice(39,52) as card, idx}
			<li class="grid grid-cols-2 auto-rows-min bg-indigo-50 dark:bg-gray-800 shadow-sm rounded-full my-3 md:my-2">
				<div class="bg-indigo-500 text-white rounded-full font-semibold tracking-wider py-1">{idx+40}</div>
				<div class="py-1 text-gray-800 dark:text-gray-300 tracking-widest">{card}</div>
			</li>
		{/each}
	</ul>
</section>