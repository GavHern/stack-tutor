<script lang="ts">
	import "../app.css";

	import { theme } from '../global';
	import { page } from '$app/stores';

	let darkModeParent: Element;

	// Default dark theme to local storage value. Fallback on device preference for first-timers
	let dark = false //localStorage.dark
	//$: window.localStorage.dark = dark; // Update local storage when state changes
	
	const darkToggle = () => {
		dark = !dark;
		//window.localStorage.dark = dark;
	}
</script>

<nav class="fixed bg-indigo-500 w-full h-16 flex justify-between z-30">
	<a href="/" class="w-16 h-full grid place-items-center focus:bg-white/20" class:invisible={$page.path === "/"}>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
		</svg>
	</a>
	<button class="w-16 h-full grid place-items-center focus:bg-white/20" on:click={darkToggle}>
		{#if dark}
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
		</svg>
		{:else}
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
		</svg>
		{/if}
	</button>
</nav>

<div class="h-screen" class:dark>
	<main class="pt-16 min-h-screen dark:bg-gray-900">
		<div class="max-w-6xl h-full m-auto">
			<slot></slot>
		</div>
	</main>
</div>