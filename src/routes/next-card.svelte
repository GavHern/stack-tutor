<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Stack Tutor - Next Card</title>
</svelte:head>

<section in:fade={{ duration: 300, delay: 300 }} out:fade={{ duration:300 }} class="text-center">

	<h1 class="pt-16 text-4xl font-semibold tracking-wider mb-4 dark:text-gray-200">Coming soon!</h1>

	<a href="/" class="text-indigo-600 dark:text-indigo-400 underline">Back to home</a>

</section>