<script lang="ts">
	import { page } from '$lib/global';

	export let name: string;
	export let href: string;
	export let id: string;
	export let icon: string;

	const icons = {
		"list": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
		"flashcards": "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
		"next": "M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z",
		"guess": "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
	}

	const clickHandler = () => {
		page.set(id)
	}
</script>

<a href={href} on:click={clickHandler} class="w-full border rounded-lg p-3 flex flex-col relative bg-white hover:bg-gray-100 focus:ring-2 ring-indigo-600 ring-offset-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-800 dark:ring-indigo-400 dark:ring-offset-gray-900">
	<div class="flex items-center space-x-2 w-full mb-1">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400 transform scale-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons[icon]} />
		</svg>
		<h2 class="text-indigo-600 dark:text-indigo-400 font-semibold lg:text-lg">{name}</h2>
	</div>
	<div>
		<p class="text-gray-800 text-sm lg:text-md pr-4 dark:text-gray-300"><slot></slot></p>
	</div>

	<div class="absolute right-0 top-0 h-full px-2 grid place-items-center">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</div>
</a>